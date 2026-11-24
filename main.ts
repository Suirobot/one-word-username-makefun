// One Word, One Username, One Reward — entrypoint.
// Writes my own make.fun username and nothing else (at most 30
// characters), exactly as the bounty asks, to /output/entry.txt.
// Competition: u-hakimi-one-word-username-6d02bb71
// (make.fun, account @bangjacky). Construction: the username is held
// in a named constant below and guarded in code before writing.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUT = "/output/entry.txt";

// The bounty admits exactly one correct text: the entrant's own
// make.fun username, one word, nothing else. The name lives in
// its own constant so there is exactly one place it is spelled,
// and the guard below keeps a stray edit from ever turning the
// entry into something invalid.
const ACCOUNT = "bangjacky";
const LINE = ACCOUNT;
if (!/^\S{1,30}$/.test(LINE)) {
  throw new Error("entry must be one word of at most 30 characters");
}

function main(): void {
  mkdirSync(dirname(OUT), { recursive: true });
  writeFileSync(OUT, LINE, "utf8");
  console.log(`wrote ${LINE.length} chars to ${OUT}`);
}

main();
