// One Word, One Username, One Reward — entrypoint.
// Writes my own make.fun username and nothing else (at most 30
// characters), exactly as the bounty asks, to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUT = "/output/entry.txt";

// The bounty admits exactly one correct text: the entrant's own
// make.fun username, one word, nothing else. Guard it in code so a
// stray edit can never turn the entry into something invalid.
const LINE = "bangjacky";
if (!/^\S{1,30}$/.test(LINE)) {
  throw new Error("entry must be one word of at most 30 characters");
}

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${OUT}`);
