import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Have you tried turning it off and on again — and this time, really meaning it? Sometimes the Wi-Fi can tell when your heart isn't in it.";

// The gate requires 1–199 characters, a single line, and non-blank text.
// Fail loudly instead of writing an entry the grader would reject.
if (LINE.length < 1 || LINE.length > 199 || LINE.includes("\n") || !LINE.trim()) {
  throw new Error(`entry line is invalid (length ${LINE.length})`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
