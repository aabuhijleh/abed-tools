import {
  Action,
  ActionPanel,
  Clipboard,
  Detail,
  Form,
  Icon,
  Keyboard,
  closeMainWindow,
  openExtensionPreferences,
  showHUD,
  useNavigation,
} from "@raycast/api";
import { useChat } from "@tanstack/ai-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { createEditorConnection } from "./lib/ai";
import { describeError, runtimeDiagnostics } from "./lib/errors";
import { MODEL_LABELS, getPreferences } from "./lib/preferences";
import { readSelection } from "./lib/source-text";
import { toRichText } from "./lib/rich-text";
import { copyRichText, sendPasteKeystroke } from "./lib/pasteboard";
import { SYSTEM_PROMPT, wrapSourceText } from "./commands/improve-writing/prompt";

const COPY_SHORTCUT: Keyboard.Shortcut = { modifiers: ["cmd", "shift"], key: "c" };
const PASTE_PLAIN_SHORTCUT: Keyboard.Shortcut = { modifiers: ["cmd", "shift"], key: "enter" };
const COPY_PLAIN_SHORTCUT: Keyboard.Shortcut = { modifiers: ["cmd", "opt"], key: "c" };
const REFINE_SHORTCUT: Keyboard.Shortcut = { modifiers: ["cmd"], key: "i" };
const REGENERATE_SHORTCUT: Keyboard.Shortcut = { modifiers: ["cmd"], key: "r" };
const STOP_SHORTCUT: Keyboard.Shortcut = { modifiers: ["cmd"], key: "." };

export default function ImproveWriting() {
  const { model } = getPreferences();
  const connection = useMemo(() => createEditorConnection(SYSTEM_PROMPT), []);
  const { messages, sendMessage, reload, stop, isLoading, error } = useChat({ connection });
  const [sourceError, setSourceError] = useState<Error>();
  const requested = useRef(false);

  useEffect(() => {
    if (requested.current) return;
    requested.current = true;
    readSelection()
      .then((text) => sendMessage(wrapSourceText(text)))
      .catch(setSourceError);
  }, [sendMessage]);

  const improved = useMemo(() => {
    const latest = messages.filter((message) => message.role === "assistant").at(-1);
    if (!latest) return "";
    return latest.parts
      .filter((part) => part.type === "text")
      .map((part) => part.content)
      .join("");
  }, [messages]);

  const refinements = Math.max(messages.filter((message) => message.role === "user").length - 1, 0);
  const failure = sourceError ?? error;

  const navigationTitle = [
    "Improve Writing",
    MODEL_LABELS[model],
    refinements > 0 ? `Refined ×${refinements}` : undefined,
  ]
    .filter(Boolean)
    .join(" · ");

  useEffect(() => {
    if (failure) console.error(`improve-writing failed [${runtimeDiagnostics()}]`, failure);
  }, [failure]);

  const markdown = failure
    ? `## Something went wrong\n\n${describeError(failure)}\n\n\`${runtimeDiagnostics()}\``
    : improved || "Reading your selection…";

  return (
    <Detail
      isLoading={isLoading}
      navigationTitle={navigationTitle}
      markdown={markdown}
      actions={
        <ActionPanel>
          {improved.length > 0 && (
            <ActionPanel.Section>
              <Action
                title="Replace Selection"
                icon={Icon.Text}
                onAction={async () => {
                  const { html, text } = toRichText(improved);
                  try {
                    await copyRichText(html, text);
                    await closeMainWindow();
                    await sendPasteKeystroke();
                  } catch (error) {
                    await showHUD(`Could not paste: ${(error as Error).message}`);
                  }
                }}
              />
              <Action
                title="Copy to Clipboard"
                icon={Icon.Clipboard}
                shortcut={COPY_SHORTCUT}
                onAction={async () => {
                  const { html, text } = toRichText(improved);
                  await copyRichText(html, text);
                  await showHUD("Copied improved text");
                }}
              />
              <Action.Paste
                title="Replace Selection as Plain Text"
                icon={Icon.Snippets}
                content={improved}
                shortcut={PASTE_PLAIN_SHORTCUT}
              />
              <Action
                title="Copy as Plain Text"
                icon={Icon.Snippets}
                shortcut={COPY_PLAIN_SHORTCUT}
                onAction={async () => {
                  await Clipboard.copy(improved);
                  await showHUD("Copied improved text as plain text");
                }}
              />
            </ActionPanel.Section>
          )}
          <ActionPanel.Section>
            <Action.Push
              title="Refine"
              icon={Icon.Wand}
              shortcut={REFINE_SHORTCUT}
              target={<RefineForm onRefine={sendMessage} />}
            />
            <Action title="Regenerate" icon={Icon.ArrowClockwise} shortcut={REGENERATE_SHORTCUT} onAction={reload} />
            {isLoading && <Action title="Stop" icon={Icon.Stop} shortcut={STOP_SHORTCUT} onAction={stop} />}
          </ActionPanel.Section>
          <ActionPanel.Section>
            <Action title="Open Extension Preferences" icon={Icon.Gear} onAction={openExtensionPreferences} />
          </ActionPanel.Section>
        </ActionPanel>
      }
    />
  );
}

function RefineForm({ onRefine }: { onRefine: (instruction: string) => void }) {
  const { pop } = useNavigation();

  return (
    <Form
      navigationTitle="Refine"
      actions={
        <ActionPanel>
          <Action.SubmitForm
            title="Refine"
            icon={Icon.Wand}
            onSubmit={({ instruction }: { instruction: string }) => {
              if (!instruction.trim()) return;
              onRefine(instruction);
              pop();
            }}
          />
        </ActionPanel>
      }
    >
      <Form.TextArea
        id="instruction"
        title="Instruction"
        placeholder="Make it shorter. Keep the second paragraph. More formal."
      />
    </Form>
  );
}
