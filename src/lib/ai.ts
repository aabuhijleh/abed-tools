import { chat } from "@tanstack/ai";
import { createAnthropicChat } from "@tanstack/ai-anthropic";
import { stream } from "@tanstack/ai-react";
import { getPreferences } from "./preferences";

export function createEditorConnection(systemPrompt: string) {
  const { apiKey, model } = getPreferences();
  const adapter = createAnthropicChat(model, apiKey);

  return stream((messages, _data, abortSignal) => {
    const abortController = new AbortController();
    abortSignal?.addEventListener("abort", () => abortController.abort(), { once: true });

    return chat({
      adapter,
      messages,
      systemPrompts: [systemPrompt],
      abortController,
    });
  });
}
