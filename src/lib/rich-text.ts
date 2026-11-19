import { Marked, type Token, type Tokens } from "marked";

export interface RichText {
  html: string;
  text: string;
}

const ESCAPES: Record<string, string> = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" };

function escapeHtml(text: string): string {
  return text.replace(/[&<>"]/g, (char) => ESCAPES[char]);
}

const marked = new Marked({
  gfm: true,
  breaks: true,
  async: false,
  renderer: {
    html({ text }) {
      return escapeHtml(text);
    },
    table(table: Tokens.Table) {
      const headers = table.header.map((cell) => this.parser.parseInline(cell.tokens));
      const rows = table.rows.map((row) => {
        const cells = row.map((cell, index) => {
          const value = this.parser.parseInline(cell.tokens);
          return headers[index] ? `${headers[index]}: ${value}` : value;
        });
        return `<li>${cells.join(", ")}</li>`;
      });
      return `<ul>${rows.join("")}</ul>`;
    },
  },
});

export function toRichText(markdown: string): RichText {
  const tokens = marked.lexer(markdown);
  const blocks: string[] = [];

  for (const token of tokens as Token[]) {
    if (token.type === "space" || token.type === "hr") continue;

    const html = (marked.parser([token]) as string)
      .replace(/<h[1-6]>(.*?)<\/h[1-6]>/gs, "<p><strong>$1</strong></p>")
      .trim();

    if (html) blocks.push(html);
  }

  return { html: blocks.join("<p><br></p>"), text: markdown };
}
