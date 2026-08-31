# abed-tools

Personal Raycast extension. `README.md` covers what the commands do.

## Layout

`ray build` resolves each `commands[].name` in `package.json` against `src/<name>.ts`, `.tsx`, `.js`, then `.jsx`, and fails when none exists. It searches only the top level of `src`, with no `index` convention and no recursion, so an entry file cannot move into a folder. Tools resolve the same way under `src/tools/`.

Everything else is free to move. A command's own modules live in `src/commands/<name>/`, and code two commands share lives in `src/lib/`.

```text
src/improve-writing.tsx                 entry, pinned here by ray build
src/commands/improve-writing/prompt.ts  this command only
src/lib/                                shared
```

## Raycast drops the HTML clipboard flavor

`Clipboard.copy({ html, text })` and `Action.Paste` with a `Clipboard.Content` object both accept HTML in their types and then write plain text only. Nothing errors, so the loss is silent.

Check the pasteboard rather than trusting the call:

```bash
osascript -e 'clipboard info'
```

A working rich payload lists `«class HTML»`. Only `«class utf8»` and `string` means the HTML never landed.

`src/lib/pasteboard.ts` writes both flavors itself, through one `osascript` call, hex-encoding each so quotes, backslashes, newlines, and emoji survive:

```applescript
set the clipboard to {«class HTML»:«data HTML<hex>», «class utf8»:«data utf8<hex>»}
```

Pasting is then `copyRichText`, `closeMainWindow()`, and a cmd+V keystroke through System Events, which needs Accessibility permission for Raycast. Copying needs no permission, so a blocked paste still leaves a rich clipboard the user can paste by hand.

## What Slack renders

Slack's mrkdwn is not markdown. Bold is `*text*`, so pasted `**text**` shows its asterisks. HTML sidesteps mrkdwn and, unlike pasted mrkdwn characters, does not depend on the user's "format messages with markup" setting.

Slack renders `<strong>`, `<em>`, `<code>`, `<pre><code>`, `<ul>`, `<ol>`, `<blockquote>`, and `<a>`. It has no headings, tables, or horizontal rules. `src/lib/rich-text.ts` turns headings into bold paragraphs and drops rules.

Slack puts consecutive `<p>` elements on adjacent lines with no gap, so a blank line needs an empty paragraph between blocks:

```html
<p>one</p>
<p><br /></p>
<p>two</p>
```

That is why `toRichText` renders each top-level token on its own and joins with `<p><br></p>`, instead of handing the whole document to `marked` in one call.

## Testing a paste change

`ray develop` stops when Raycast quits or restarts, logging `[killed]` and `stopped development mode`. Builds still succeed on disk afterwards, so a change looks live while Raycast keeps serving the old bundle. Restart the watcher whenever Raycast restarts, and read its log before believing a test result.

To test a payload without the extension, write the pasteboard from the shell and paste by hand. That separates "Slack ignored the HTML" from "Raycast never wrote it", which look identical from the composer.

## Anthropic SDK

Models after Opus 4.6 reject any `temperature` other than 1.0 with a 400. The model preference offers Sonnet 5 and Opus 5, so leave `modelOptions.temperature` unset.

The SDK reports transport failures as a bare `Connection error.` and puts the real reason in `error.cause`. `describeError` in `src/lib/errors.ts` walks that chain.
