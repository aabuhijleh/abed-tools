import { execFile } from "node:child_process";
import { promisify } from "node:util";

const run = promisify(execFile);

function hexEncode(value: string): string {
  return Buffer.from(value, "utf8").toString("hex");
}

export async function copyRichText(html: string, text: string): Promise<void> {
  await run("osascript", [
    "-e",
    `set the clipboard to {«class HTML»:«data HTML${hexEncode(html)}», «class utf8»:«data utf8${hexEncode(text)}»}`,
  ]);
}

export async function sendPasteKeystroke(): Promise<void> {
  await run("osascript", [
    "-e",
    "delay 0.15",
    "-e",
    'tell application "System Events" to keystroke "v" using command down',
  ]);
}
