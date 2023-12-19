import * as fs from "node:fs";
import * as readline from "node:readline";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.time();

const inputStream = fs.createReadStream(`${__dirname}/input.txt`);
const rl = readline.createInterface({
  input: inputStream,
  crlfDelay: Infinity,
});

const yCoordsToXCoords: { [y: number]: number[] } = {};

let currentX = 0;
let currentY = 0;
let maxX = 0;
let minX = 0;
let borderLength = 0;

for await (const row of rl) {
  const [direction, countStr, colourHex] = row.split(" ");
  const count = Number.parseInt(countStr);
  borderLength += count;

  for (let i = 1; i <= count; i++) {
    switch (direction) {
      case "R":
        currentX += 1;
        break;
      case "L":
        currentX -= 1;
        break;
      case "U":
        currentY -= 1;
        break;
      case "D":
        currentY += 1;
        break;
    }
    maxX = Math.max(currentX, maxX);
    minX = Math.min(currentX, minX);
    if (yCoordsToXCoords[currentY] === undefined) {
      yCoordsToXCoords[currentY] = [currentX];
    } else {
      yCoordsToXCoords[currentY].push(currentX);
    }
  }
}

let total = 0;

const grid: ("." | "#")[][] = [];

const sortedYCoords = Object.keys(yCoordsToXCoords).sort(
  (a, b) => Number.parseInt(a) - Number.parseInt(b),
);
const minY = Number.parseInt(sortedYCoords[0]);

sortedYCoords.forEach((y) => {
  const row: ("." | "#")[] = [];
  const xCoords = yCoordsToXCoords[y];
  for (let i = minX; i <= maxX; i++) {
    if (xCoords.includes(i)) {
      row.push("#");
    } else {
      row.push(".");
    }
  }
  grid.push(row);
});

const interiorSearchStart = { x: minX * -1, y: minY * -1 };

const determineIfInternalAndCountIfSo = (x: number, y: number) => {
  const squaresFound: string[] = [[x, y].join(",")];
  const squaresToExpandInto: { x: number; y: number }[] = [
    { x: x - 1, y },
    { x: x + 1, y },
    { x, y: y + 1 },
    { x, y: y - 1 },
  ];

  while (squaresToExpandInto.length > 0) {
    const next = squaresToExpandInto.pop();
    // you've gone off the grid, which means it's not internal
    if (
      next.x < 0 ||
      next.x >= grid[0].length ||
      next.y < 0 ||
      next.y >= grid.length
    ) {
      return;
    }

    if (grid[next.y]?.[next.x] === ".") {
      if (!squaresFound.includes([next.x, next.y].join(","))) {
        squaresFound.push([next.x, next.y].join(","));
      }

      [-1, 1].forEach((diff) => {
        if (!squaresFound.includes([next.x + diff, next.y].join(","))) {
          squaresToExpandInto.push({ x: next.x + diff, y: next.y });
        }
        if (!squaresFound.includes([next.x, next.y + diff].join(","))) {
          squaresToExpandInto.push({ x: next.x, y: next.y + diff });
        }
      });
    }
  }

  total = squaresFound.length + borderLength;
};

for (let xDiff = -1; xDiff <= 1; xDiff++) {
  for (let yDiff = -1; yDiff <= 1; yDiff++) {
    if (
      grid[interiorSearchStart.y + yDiff]?.[interiorSearchStart.x + xDiff] ===
        "." &&
      total === 0
    ) {
      determineIfInternalAndCountIfSo(
        interiorSearchStart.x + xDiff,
        interiorSearchStart.y + yDiff,
      );
    }
  }
}

console.log(total);
console.timeEnd();
