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
const stepGoal = 26501365;

const takeStep = (
  x: number,
  y: number,
  stepsRemaining: number,
  alreadySeen: string[],
  mapX: number,
  mapY: number,
) => {
  if (alreadySeen.includes([x, y].join(",")) && stepsRemaining !== stepGoal) {
    console.log(
      "looped after",
      stepGoal - stepsRemaining,
      "steps, map X:",
      mapX,
      "map Y:",
      mapY,
    );
    return;
  }

  const newAlreadySeen = [...alreadySeen, [x, y].join(",")];
  let newMapY = mapY;

  [-1, 1].forEach((diff) => {
    let newY = y + diff;
    if (newY === grid.length) {
      newY = 0;
      newMapY += 1;
    } else if (newY === -1) {
      newY = grid.length - 1;
      newMapY -= 1;
    }

    if (grid[newY][x] === ".") {
      takeStep(x, newY, stepsRemaining - 1, newAlreadySeen, mapX, newMapY);
    }

    let newX = x + diff;
    let newMapX = mapX;
    if (newX === grid[0].length) {
      newX = 0;
      newMapX += 1;
    } else if (newX === -1) {
      newX = grid[0].length - 1;
      newMapX -= 1;
    }
    if (grid[y][newX] === ".") {
      takeStep(newX, y, stepsRemaining - 1, newAlreadySeen, newMapX, mapY);
    }
  });
};

takeStep(startPosition.x, startPosition.y, stepGoal, [], 0, 0);

console.log(endPoints.size);
console.timeEnd();
