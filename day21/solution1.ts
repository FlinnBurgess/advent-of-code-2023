import * as fs from "node:fs";
import * as readline from "node:readline";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.time();

let inputStream = fs.createReadStream(`${__dirname}/input.txt`);
let rl = readline.createInterface({
  input: inputStream,
  crlfDelay: Infinity,
});

let startPosition: { x: number; y: number };
let currentY = 0;
const grid: string[][] = [];
const alreadySeen: string[] = [];

for await (const line of rl) {
  grid.push(line.replace("S", ".").split(""));
  const startIdx = line.indexOf("S");
  if (startIdx !== -1) {
    startPosition = { x: startIdx, y: currentY };
  }
  currentY++;
}

const endPoints = new Set<string>();

const takeStep = (x: number, y: number, stepsRemaining: number) => {
  if (alreadySeen.includes([x, y, stepsRemaining].join(","))) {
    return;
  }

  if (stepsRemaining === 0) {
    endPoints.add([x, y].join(","));
    return;
  }

  alreadySeen.push([x, y, stepsRemaining].join(","));

  [-1, 1].forEach((diff) => {
    if (grid[y + diff]?.[x] === ".") {
      takeStep(x, y + diff, stepsRemaining - 1);
    }
    if (grid[y]?.[x + diff] === ".") {
      takeStep(x + diff, y, stepsRemaining - 1);
    }
  });
};

takeStep(startPosition.x, startPosition.y, 64);

console.log(endPoints.size);
console.timeEnd();
