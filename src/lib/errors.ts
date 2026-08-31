export function describeError(error: unknown): string {
  const lines: string[] = [];
  let current: unknown = error;
  let depth = 0;

  while (current && depth < 5) {
    const asError = current as { name?: string; message?: string; cause?: unknown; status?: number };
    const label = asError.name ?? "Error";
    const status = asError.status ? ` (HTTP ${asError.status})` : "";
    lines.push(`${depth === 0 ? "" : "caused by "}**${label}**${status}: ${asError.message ?? String(current)}`);
    current = asError.cause;
    depth += 1;
  }

  return lines.join("\n\n");
}

export function runtimeDiagnostics(): string {
  return [
    `Node ${process.version}`,
    `fetch ${typeof globalThis.fetch}`,
    `ReadableStream ${typeof globalThis.ReadableStream}`,
    `TextDecoderStream ${typeof globalThis.TextDecoderStream}`,
  ].join(" · ");
}
