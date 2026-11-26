import * as fs from "fs";
import * as path from "path";

// One-liner entry for the make.fun bounty: Midnight Fridge Roast.
// Gate: entry must be 1-200 UTF-8 characters, not only whitespace.
// The guard below enforces the 200-char cap at runtime.
const LINE: string =
  "Midnight. The fridge light is on again. It has seen me eat cold pizza at 2am for the 9th night in a row. It has started leaving the light on out of pity.";

const MAX_CHARS = 200;

if (LINE.length > MAX_CHARS) {
  throw new Error(
    `Entry is ${LINE.length} chars, over the ${MAX_CHARS} char gate.`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), LINE, "utf8");
