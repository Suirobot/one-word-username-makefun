// One Word, One Username, One Reward — entrypoint.
// Writes my own make.fun username and nothing else (at most 30
// characters), exactly as the bounty asks, to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUT = "/output/entry.txt";

const LINE = "bangjacky";

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${OUT}`);
