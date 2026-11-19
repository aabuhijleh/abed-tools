import { chat } from "@tanstack/ai";
import { createAnthropicChat, type AnthropicChatModel } from "@tanstack/ai-anthropic";
import { stream } from "@tanstack/ai-react";
import { getPreferences, type Model } from "./preferences";

type Effort = "low" | "medium" | "high";

const EFFORT: Record<Model, Effort> = {
  "claude-haiku-5-5": "high",
  "claude-sonnet-5-5": "medium",
  "claude-opus-5-5": "low",
};

const MAX_TOKENS = 16_000;

export function createEditorConnection(systemPrompt: string) {
  const { apiKey, model } = getPreferences();
  const adapter = createAnthropicChat(model as AnthropicChatModel, apiKey);
  // The adapter forwards output_config as is, but its types omit it for Sonnet 5.5 and Haiku 5.5.
  const modelOptions = { max_tokens: MAX_TOKENS, output_config: { effort: EFFORT[model] } } as never;

  return stream((messages, _data, abortSignal) => {
    const abortController = new AbortController();
    abortSignal?.addEventListener("abort", () => abortController.abort(), { once: true });

    return chat({
      adapter,
      messages,
      systemPrompts: [systemPrompt],
      abortController,
      modelOptions,
    });
  });
}
