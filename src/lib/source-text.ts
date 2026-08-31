import { getSelectedText } from "@raycast/api";

export class NoSelectionError extends Error {
  constructor() {
    super("Select some text in the frontmost app, then run this command again.");
    this.name = "NoSelectionError";
  }
}

export async function readSelection(): Promise<string> {
  const selection = await getSelectedText().catch(() => undefined);
  if (!selection?.trim()) throw new NoSelectionError();
  return selection;
}
