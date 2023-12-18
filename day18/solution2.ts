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

type Direction = "up" | "down" | "left" | "right";

let beamLocationsSeen: string[] = [];

let energizedLocations = new Set<string>();

type Beam = {
  x: number;
  y: number;
  direction: Direction;
};

let beams: Beam[] = [{ x: 0, y: 0, direction: "right" }];

const grid: string[][] = [];

for await (const row of rl) {
  grid.push(row.split(""));
}

const reflectionMap: {
  [symbol: string]: { [originalDirection: string]: Direction };
} = {
  "/": { right: "up", up: "right", left: "down", down: "left" },
  "\\": { right: "down", up: "left", left: "up", down: "right" },
};

let maxEnergized = 0;

const runWithInitialBeam = ({ x, y, direction }: Beam) => {
  console.log("Running for ", [x, y, direction].join(","));
  beamLocationsSeen = [];
  energizedLocations = new Set<string>();
  beams = [{ x, y, direction }];

  while (beams.length !== 0) {
    const newBeams: Beam[] = [];
    beams.forEach((beam) => {
      const { x, y, direction } = beam;
      energizedLocations.add([x, y].join(","));
      beamLocationsSeen.push([x, y, direction].join(","));
      const symbol = grid[y][x];
      switch (symbol) {
        case "/":
        case "\\":
          beam.direction = reflectionMap[symbol][direction];
          break;
        case "|":
          if (["right", "left"].includes(direction)) {
            beam.direction = "down";
            newBeams.push({ x, y, direction: "up" });
          }
          break;
        case "-":
          if (["up", "down"].includes(direction)) {
            beam.direction = "right";
            newBeams.push({ x, y, direction: "left" });
          }
      }
    });

    beams.push(...newBeams);

    beams.forEach((beam) => {
      const { direction } = beam;

      switch (direction) {
        case "down":
          beam.y = beam.y + 1;
          break;
        case "up":
          beam.y = beam.y - 1;
          break;
        case "right":
          beam.x = beam.x + 1;
          break;
        case "left":
          beam.x = beam.x - 1;
          break;
      }
    });

    beams = beams.filter((beam) => {
      const { direction, x, y } = beam;

      return (
        x >= 0 &&
        x < grid[0].length &&
        y >= 0 &&
        y < grid.length &&
        beamLocationsSeen.find(
          (location) => location === [x, y, direction].join(","),
        ) === undefined
      );
    });
  }

  maxEnergized = Math.max(maxEnergized, energizedLocations.size);
};

for (let y = 0; y < grid.length; y++) {
  runWithInitialBeam({ x: 0, y, direction: "right" });
  runWithInitialBeam({ x: grid[0].length - 1, y, direction: "left" });
}

for (let x = 0; x < grid[0].length; x++) {
  runWithInitialBeam({ x, y: 0, direction: "down" });
  runWithInitialBeam({ x, y: grid.length - 1, direction: "up" });
}

console.log(maxEnergized);
console.timeEnd();
