import { log } from "node:console";
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

const sumGearRatios = (
  line: string,
  previousLine: string,
  nextLine: string,
) => {
  const gearMatches = line.matchAll(/\*/g);
  for (const gearMatch of gearMatches) {
    const gearPosition = gearMatch.index;

    const numberMatches = [
      ...previousLine.matchAll(/[0-9]+/g),
      ...line.matchAll(/[0-9]+/g),
      ...nextLine.matchAll(/[0-9]+/g),
    ];

    const adjacentNumbers = numberMatches
      .filter((numberMatch) => {
        console.log(
          gearPosition,
          numberMatch.index - 1,
          numberMatch.index + numberMatch[0].length,
        );
        return (
          gearPosition >= numberMatch.index - 1 &&
          gearPosition <= numberMatch.index + numberMatch[0].length
        );
      })
      .map((numberMatch) => Number.parseInt(numberMatch[0]));

    if (adjacentNumbers.length === 2) {
      total += adjacentNumbers[0] * adjacentNumbers[1];
    }
  }
};

lines.forEach((line, idx) => {
  const previousLine = idx === 0 ? nullLine : lines[idx - 1];
  const nextLine = idx === lines.length - 1 ? nullLine : lines[idx + 1];
  sumGearRatios(line, previousLine, nextLine);
});

console.log(total);
