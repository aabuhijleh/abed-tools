import { marked, type Token } from "marked";

export interface RichText {
  html: string;
  text: string;
}

const MARKED_OPTIONS = { gfm: true, breaks: true, async: false } as const;

export function toRichText(markdown: string): RichText {
  const tokens = marked.lexer(markdown, MARKED_OPTIONS);
  const blocks: string[] = [];

  for (const token of tokens as Token[]) {
    if (token.type === "space" || token.type === "hr") continue;

    const html = marked
      .parser([token], MARKED_OPTIONS)
      .replace(/<h[1-6]>(.*?)<\/h[1-6]>/gs, "<p><strong>$1</strong></p>")
      .trim();

    if (html) blocks.push(html);
  }

  return { html: blocks.join("<p><br></p>"), text: markdown };
}
