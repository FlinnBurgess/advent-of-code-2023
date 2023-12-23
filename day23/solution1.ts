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

const grid: string[][] = [];

for await (const line of rl) {
  grid.push(line.split(""));
}

const startPosition = { x: grid[0].findIndex((char) => char === "."), y: 0 };
const goalPosition = {
  x: grid.at(-1).findIndex((char) => char === "."),
  y: grid.length - 1,
};

const getNextPossibleLocations = (
  loc: { x: number; y: number },
  alreadySeen: string[],
) => {
  const char = grid[loc.y][loc.x];
  if (char === ">") {
    return [{ x: loc.x + 1, y: loc.y }];
  }
  if (char === "<") {
    return [{ x: loc.x - 1, y: loc.y }];
  }
  if (char === "^") {
    return [{ x: loc.x, y: loc.y - 1 }];
  }
  if (char === "v") {
    return [{ x: loc.x, y: loc.y + 1 }];
  }

  const nextLocations: { x: number; y: number }[] = [];
  const walkableSymbols = [".", "<", ">", "^", "v"];

  [-1, 1].forEach((diff) => {
    const xDiffSymbol = grid[loc.y][loc.x + diff];
    if (walkableSymbols.includes(xDiffSymbol)) {
      if (
        !(xDiffSymbol === "<" && diff === 1) &&
        !(xDiffSymbol === ">" && diff === -1)
      ) {
        if (!alreadySeen.includes([loc.x + diff, loc.y].join(","))) {
          nextLocations.push({ x: loc.x + diff, y: loc.y });
        }
      }
    }

    const yDiffSymbol = grid[loc.y + diff]?.[loc.x];
    if (walkableSymbols.includes(yDiffSymbol)) {
      if (
        !(yDiffSymbol === "^" && diff === 1) &&
        !(yDiffSymbol === "v" && diff === -1)
      ) {
        if (!alreadySeen.includes([loc.x, loc.y + diff].join(","))) {
          nextLocations.push({ x: loc.x, y: loc.y + diff });
        }
      }
    }
  });

  return nextLocations;
};

let longestRoute: string[] = [];

const longestRouteFrom = (
  loc: { x: number; y: number },
  alreadySeen: string[],
) => {
  const alreadySeenClone = [...alreadySeen];
  let routeLength = 1;
  alreadySeenClone.push([loc.x, loc.y].join(","));
  let nextPossibleLocations = getNextPossibleLocations(loc, alreadySeenClone);
  while (nextPossibleLocations.length === 1) {
    routeLength += 1;
    alreadySeenClone.push(
      [nextPossibleLocations[0].x, nextPossibleLocations[0].y].join(","),
    );
    nextPossibleLocations = getNextPossibleLocations(
      nextPossibleLocations[0],
      alreadySeenClone,
    );
  }

  if (nextPossibleLocations.length === 0) {
    if (alreadySeenClone.length > longestRoute.length) {
      longestRoute = alreadySeenClone;
    }
    return;
  }

  nextPossibleLocations.forEach((l) => longestRouteFrom(l, alreadySeenClone));
};

const firstStep = getNextPossibleLocations(startPosition, [])[0];
longestRouteFrom(firstStep, ["1,0"]);

longestRoute.forEach((loc) => {
  const [x, y] = loc.split(",");
  grid[y][x] = "O";
});
console.log(grid.map((row) => row.join("")).join("\n"));

console.log(longestRoute.length - 1);

console.timeEnd();
