import { writeFileSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";

const ROAST = "My kettle needs a firmware update to boil water, so tea comes with a loading screen.";

function main(): void {
  const outputPath = "/output/entry.txt";
  mkdirSync(dirname(outputPath), { recursive: true });
  writeFileSync(outputPath, ROAST, "utf8");
}

main();

// Deterministic, no network, no randomness