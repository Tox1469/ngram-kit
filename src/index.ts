// ngram-kit: char and word n-gram generator
export function charNgrams(text: string, n: number, pad = false): string[] {
  if (n <= 0) return [];
  const src = pad ? "_".repeat(n - 1) + text + "_".repeat(n - 1) : text;
  const out: string[] = [];
  for (let i = 0; i <= src.length - n; i++) out.push(src.slice(i, i + n));
  return out;
}

export function wordNgrams(words: string[], n: number): string[] {
  if (n <= 0 || words.length < n) return [];
  const out: string[] = [];
  for (let i = 0; i <= words.length - n; i++) out.push(words.slice(i, i + n).join(" "));
  return out;
}

export function ngramRange(text: string, min: number, max: number, mode: "char" | "word" = "word"): string[] {
  const out: string[] = [];
  if (mode === "char") {
    for (let n = min; n <= max; n++) out.push(...charNgrams(text, n));
  } else {
    const words = text.split(/\s+/).filter(Boolean);
    for (let n = min; n <= max; n++) out.push(...wordNgrams(words, n));
  }
  return out;
}

export function ngramFrequency(items: string[]): Map<string, number> {
  const m = new Map<string, number>();
  for (const it of items) m.set(it, (m.get(it) ?? 0) + 1);
  return m;
}

export default { charNgrams, wordNgrams, ngramRange, ngramFrequency };
