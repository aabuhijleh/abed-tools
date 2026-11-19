import { Color, Icon, Image } from "@raycast/api";
import { Dotfile } from "./registry";

const BY_NAME: Record<string, Image.Source> = {
  zshenv: Icon.Leaf,
  zprofile: Icon.Person,
  zshrc: Icon.Terminal,
  ghostty: Icon.Window,
  "ghostty-tmux": Icon.Rocket,
  tmux: Icon.AppWindowGrid3x3,
  starship: Icon.Stars,
  git: Icon.Tree,
  gitignore: Icon.EyeDisabled,
  gh: Icon.Globe,
  ssh: Icon.Key,
  aws: Icon.Cloud,
  docker: Icon.Box,
  vscode: Icon.Code,
  "vscode-keys": Icon.Keyboard,
  claude: Icon.Cog,
  "claude-md": Icon.Book,
  bun: Icon.Bolt,
  btop: Icon.Gauge,
  localstack: Icon.HardDrive,
  robo: Icon.SpeechBubble,
  "robo-md": Icon.TextDocument,
};

const GROUP_COLORS: Record<string, Color> = {
  Shell: Color.Green,
  Terminal: Color.Purple,
  Git: Color.Orange,
  Cloud: Color.Blue,
  Editors: Color.Magenta,
  Tools: Color.Yellow,
};

function iconSource(file: Dotfile): Image.Source {
  if (BY_NAME[file.name]) return BY_NAME[file.name];
  if (file.path.includes("/conf.d/")) return Icon.Gear;
  if (file.path.includes("/functions/")) return Icon.CodeBlock;
  if (file.path.includes("/themes/")) return Icon.Brush;
  return Icon.Document;
}

export function dotfileIcon(file: Dotfile): Image.ImageLike {
  const tintColor = file.modified ? (GROUP_COLORS[file.group] ?? Color.SecondaryText) : Color.SecondaryText;
  return { source: iconSource(file), tintColor };
}
