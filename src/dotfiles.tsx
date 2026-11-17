import { Action, ActionPanel, Color, Icon, Keyboard, List, closeMainWindow, showToast, Toast } from "@raycast/api";
import { usePromise } from "@raycast/utils";
import { useState } from "react";
import { describeError } from "./lib/errors";
import { Dotfile, loadDotfiles, openInEditor, previewMarkdown } from "./commands/dotfiles/registry";

const PREVIEW_SHORTCUT: Keyboard.Shortcut = { modifiers: ["cmd"], key: "d" };
const COPY_PATH_SHORTCUT: Keyboard.Shortcut = { modifiers: ["cmd", "shift"], key: "c" };
const RELOAD_SHORTCUT: Keyboard.Shortcut = { modifiers: ["cmd"], key: "r" };

export default function Dotfiles() {
  const { data: files = [], isLoading, error, revalidate } = usePromise(loadDotfiles);
  const [showPreview, setShowPreview] = useState(true);
  const groups = [...new Set(files.map((file) => file.group))];

  return (
    <List
      isLoading={isLoading}
      isShowingDetail={showPreview && files.length > 0}
      searchBarPlaceholder="Search config files by name, description, or path"
    >
      {error && (
        <List.EmptyView icon={Icon.Warning} title="Could not run dotfiles" description={describeError(error)} />
      )}
      {groups.map((group) => (
        <List.Section key={group} title={group}>
          {files
            .filter((file) => file.group === group)
            .map((file) => (
              <DotfileItem
                key={file.path}
                file={file}
                showPreview={showPreview}
                onTogglePreview={() => setShowPreview((current) => !current)}
                onReload={revalidate}
              />
            ))}
        </List.Section>
      ))}
    </List>
  );
}

function DotfileItem({
  file,
  showPreview,
  onTogglePreview,
  onReload,
}: {
  file: Dotfile;
  showPreview: boolean;
  onTogglePreview: () => void;
  onReload: () => void;
}) {
  const path = file.path.replace(process.env.HOME ?? "", "~");
  const exists = Boolean(file.modified);

  return (
    <List.Item
      title={file.name}
      subtitle={showPreview ? undefined : file.description}
      icon={exists ? Icon.Document : { source: Icon.Plus, tintColor: Color.Orange }}
      keywords={[file.description, path, file.group]}
      accessories={
        showPreview
          ? undefined
          : [exists ? { date: file.modified, tooltip: path } : { tag: { value: "not created", color: Color.Orange } }]
      }
      detail={showPreview && <DotfilePreview file={file} path={path} />}
      actions={
        <ActionPanel>
          <ActionPanel.Section>
            <Action
              title={exists ? "Open in Editor" : "Create in Editor"}
              icon={Icon.Pencil}
              onAction={async () => {
                try {
                  await openInEditor(file);
                  await closeMainWindow();
                } catch (error) {
                  await showToast({
                    style: Toast.Style.Failure,
                    title: `Could not open ${file.name}`,
                    message: (error as Error).message,
                  });
                }
              }}
            />
            {exists && <Action.ShowInFinder path={file.path} />}
            {exists && <Action.OpenWith path={file.path} />}
            <Action.CopyToClipboard title="Copy Path" content={file.path} shortcut={COPY_PATH_SHORTCUT} />
          </ActionPanel.Section>
          <ActionPanel.Section>
            <Action
              title={showPreview ? "Hide Preview" : "Show Preview"}
              icon={Icon.Sidebar}
              shortcut={PREVIEW_SHORTCUT}
              onAction={onTogglePreview}
            />
            <Action title="Reload List" icon={Icon.ArrowClockwise} shortcut={RELOAD_SHORTCUT} onAction={onReload} />
          </ActionPanel.Section>
        </ActionPanel>
      }
    />
  );
}

function DotfilePreview({ file, path }: { file: Dotfile; path: string }) {
  const { data: markdown, isLoading, error } = usePromise(previewMarkdown, [file]);

  return (
    <List.Item.Detail
      isLoading={isLoading}
      markdown={error ? `Could not read the file.\n\n${describeError(error)}` : markdown}
      metadata={
        <List.Item.Detail.Metadata>
          <List.Item.Detail.Metadata.Label title="What it is" text={file.description} />
          <List.Item.Detail.Metadata.Label title="Path" text={path} />
          <List.Item.Detail.Metadata.Label
            title="Last changed"
            text={file.modified ? file.modified.toLocaleString() : "not created"}
          />
        </List.Item.Detail.Metadata>
      }
    />
  );
}
