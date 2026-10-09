import { diffWordsWithSpace } from "diff";

type Hunk = { kind: "equal"; text: string } | { kind: "change"; removed: string; added: string };

// Zero-width spaces inside the markers keep them flanking next to punctuation.
const ZERO_WIDTH_SPACE = "\u200B";

export function toDiffMarkdown(before: string, after: string): string {
  const markdown = groupHunks(before, after)
    .map((hunk) =>
      hunk.kind === "equal" ? escapeMarkdown(hunk.text) : mark(hunk.removed, "~~") + mark(hunk.added, "**"),
    )
    .join("");

  return markdown
    .split("\n")
    .map((line) => line.replace(/^ +/, (spaces) => "\u00A0".repeat(spaces.length)))
    .join("  \n");
}

function groupHunks(before: string, after: string): Hunk[] {
  const parts = diffWordsWithSpace(before, after);
  const hunks: Hunk[] = [];

  parts.forEach((part, index) => {
    const last = hunks.at(-1);
    const next = parts[index + 1];
    const isChange = part.added || part.removed;
    const bridgesChanges = /^[^\S\n]+$/.test(part.value) && last?.kind === "change" && (next?.added || next?.removed);

    if (isChange || bridgesChanges) {
      const hunk = last?.kind === "change" ? last : { kind: "change" as const, removed: "", added: "" };
      if (hunk !== last) hunks.push(hunk);
      if (!part.added) hunk.removed += part.value;
      if (!part.removed) hunk.added += part.value;
    } else {
      hunks.push({ kind: "equal", text: part.value });
    }
  });

  return hunks;
}

function mark(text: string, marker: string): string {
  return text
    .split("\n")
    .map((line) => {
      const [, lead, core, trail] = line.match(/^(\s*)(.*?)(\s*)$/s) ?? ["", "", line, ""];
      if (!core) return line;
      return `${lead}${marker}${ZERO_WIDTH_SPACE}${escapeMarkdown(core)}${ZERO_WIDTH_SPACE}${marker}${trail}`;
    })
    .join("\n");
}

function escapeMarkdown(text: string): string {
  return text.replace(/[!-/:-@[-`{-~]/g, "\\$&");
}
