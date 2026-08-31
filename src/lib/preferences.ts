import { getPreferenceValues } from "@raycast/api";

export const MODELS = ["claude-haiku-4-5", "claude-sonnet-5", "claude-opus-5"] as const;

export type Model = (typeof MODELS)[number];

export const MODEL_LABELS: Record<Model, string> = {
  "claude-haiku-4-5": "Haiku 4.5",
  "claude-sonnet-5": "Sonnet 5",
  "claude-opus-5": "Opus 5",
};

interface Preferences {
  apiKey: string;
  model: Model;
}

export function getPreferences(): Preferences {
  return getPreferenceValues<Preferences>();
}
