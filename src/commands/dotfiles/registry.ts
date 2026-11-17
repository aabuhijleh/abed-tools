import { execFile } from "node:child_process";
import { readFile } from "node:fs/promises";
import { extname } from "node:path";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);

const PREVIEW_LINES = 300;

export interface Dotfile {
  number: number;
  group: string;
  name: string;
  path: string;
  modified?: Date;
  description: string;
}

// A login shell reads .zprofile, which sets PATH and EDITOR the way the terminal sees them.
function runDotfiles(...args: string[]) {
  return execFileAsync("/bin/zsh", ["-lc", 'source "$ZDOTDIR/functions/dotfiles" "$@"', "zsh", ...args], {
    timeout: 10_000,
  });
}

export async function loadDotfiles(): Promise<Dotfile[]> {
  const { stdout } = await runDotfiles("tsv");
  return stdout
    .split("\n")
    .filter(Boolean)
    .map((line, index) => {
      const [group, name, path, mtime, description] = line.split("\t");
      const seconds = Number(mtime);
      return {
        number: index + 1,
        group,
        name,
        path,
        modified: seconds > 0 ? new Date(seconds * 1000) : undefined,
        description: description ?? "",
      };
    });
}

export async function openInEditor(file: Dotfile) {
  await runDotfiles("edit", String(file.number));
}

const FENCE_LANGUAGES: Record<string, string> = {
  ".zsh": "bash",
  ".toml": "toml",
  ".json": "json",
  ".yml": "yaml",
  ".yaml": "yaml",
  ".ghostty": "ini",
  ".conf": "bash",
};

export async function previewMarkdown(file: Dotfile): Promise<string> {
  if (!file.modified) return `_Not created yet._\n\nOpening it creates \`${file.path}\`.`;

  const text = await readFile(file.path, "utf8");
  const lines = text.split("\n");
  const shown = lines.slice(0, PREVIEW_LINES).join("\n");
  const cut = lines.length > PREVIEW_LINES ? `\n\n_First ${PREVIEW_LINES} of ${lines.length} lines._` : "";

  if (extname(file.path) === ".md") return shown + cut;

  const language = FENCE_LANGUAGES[extname(file.path)] ?? (file.path.includes("/functions/") ? "bash" : "");
  const fence = shown.includes("```") ? "~~~~" : "```";
  return `${fence}${language}\n${shown}\n${fence}${cut}`;
}
