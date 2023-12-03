import * as fs from "node:fs";
import * as readline from "node:readline";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let total = 0;

const inputStream = fs.createReadStream(`${__dirname}/input.txt`);
const rl = readline.createInterface({
  input: inputStream,
  crlfDelay: Infinity,
});

const lines: string[] = [];

for await (const line of rl) {
  lines.push(line);
}

const nullLine = ".".repeat(lines[0].length);

const sumSymbolAdjacentNumbers = (
  line: string,
  previousLine: string,
  nextLine: string,
) => {
  const lineNumbersMatches = line.matchAll(/[0-9]+/g);
  const debug = [];
  for (const numberMatch of lineNumbersMatches) {
    const searchSliceStart = Math.max(numberMatch.index - 1, 0);
    const searchSliceEnd = numberMatch.index + numberMatch[0].length + 1;

    for (const l of [line, previousLine, nextLine]) {
      if (l.slice(searchSliceStart, searchSliceEnd).match(/[^0-9.]/)) {
        debug.push(numberMatch[0]);
        total += Number.parseInt(numberMatch[0]);
        break;
      }
    }
  }

  console.log(debug);
};

lines.forEach((line, idx) => {
  const previousLine = idx === 0 ? nullLine : lines[idx - 1];
  const nextLine = idx === lines.length - 1 ? nullLine : lines[idx + 1];
  sumSymbolAdjacentNumbers(line, previousLine, nextLine);
});

console.log(total);
