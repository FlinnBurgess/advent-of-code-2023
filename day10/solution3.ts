import * as fs from "node:fs";
import * as readline from "node:readline";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { loopCoords } from "./loopCoords.json";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const inputStream = fs.createReadStream(`${__dirname}/input.txt`);
const rl = readline.createInterface({
  input: inputStream,
  crlfDelay: Infinity,
});

const above = [0, -1];
const topRight = [1, -1];
const right = [1, 0];
const bottomRight = [1, 1];
const below = [0, 1];
const bottomLeft = [-1, 1];
const left = [-1, 0];
const topLeft = [-1, -1];

const inwardDirectionMap = {
  "|": {
    right: {
      L: "right",
      J: "right",
      7: "right",
      F: "right",
      "|": "right",
      offset: right,
    },
    left: {
      L: "left",
      J: "left",
      7: "left",
      F: "left",
      "|": "left",
      offset: left,
    },
  },
  "-": {
    up: { L: "up", J: "up", 7: "up", F: "up", "-": "up", offset: above },
    down: {
      L: "down",
      J: "down",
      7: "down",
      F: "down",
      "-": "down",
      offset: below,
    },
  },
  L: {
    right: {
      J: "up",
      7: "up",
      "-": "up",
      "|": "right",
      F: "right",
      offset: topRight,
    },
    left: {
      J: "down",
      7: "down",
      "-": "down",
      "|": "left",
      F: "left",
      offset: bottomLeft,
    },
    up: {
      J: "up",
      7: "up",
      "-": "up",
      "|": "right",
      F: "right",
      offset: topRight,
    },
    down: {
      J: "down",
      7: "down",
      "-": "down",
      "|": "left",
      F: "left",
      offset: bottomLeft,
    },
  },
  J: {
    right: {
      L: "down",
      F: "right",
      "-": "down",
      "|": "right",
      7: "right",
      offset: bottomRight,
    },
    left: {
      L: "up",
      F: "up",
      "-": "up",
      "|": "left",
      7: "left",
      offset: topLeft,
    },
    up: {
      L: "up",
      F: "up",
      "-": "up",
      "|": "left",
      7: "left",
      offset: topLeft,
    },
    down: {
      L: "down",
      F: "down",
      "-": "down",
      "|": "right",
      7: "right",
      offset: bottomRight,
    },
  },
  7: {
    right: {
      L: "up",
      F: "up",
      "-": "up",
      "|": "right",
      J: "right",
      offset: topRight,
    },
    left: {
      L: "down",
      F: "down",
      "-": "down",
      "|": "left",
      J: "left",
      offset: bottomLeft,
    },
    up: {
      L: "right",
      F: "up",
      "-": "up",
      "|": "right",
      J: "right",
      offset: topRight,
    },
    down: {
      L: "left",
      F: "down",
      "-": "down",
      "|": "left",
      J: "left",
      offset: bottomLeft,
    },
  },
  F: {
    right: {
      L: "right",
      7: "down",
      "-": "down",
      "|": "right",
      J: "right",
      offset: bottomRight,
    },
    left: {
      L: "left",
      7: "up",
      "-": "up",
      "|": "left",
      J: "left",
      offset: topLeft,
    },
    up: {
      L: "left",
      7: "up",
      "-": "up",
      "|": "left",
      J: "left",
      offset: topLeft,
    },
    down: {
      L: "right",
      7: "down",
      "-": "down",
      "|": "right",
      J: "right",
      offset: bottomRight,
    },
  },
};

let currentInwardDirection: string = "down";

const pipeMap: string[][] = [];

for await (const row of rl) {
  // TODO: MAKE SURE YOU'RE REPLACING THE S WITH CORRECT SYMBOL
  pipeMap.push(row.replace("S", "-").split(""));
}

const enclosedCoordsDiscovered: Set<string> = new Set();

const scanForEnclosedSpaces = (startLocation: [number, number]) => {
  [-1, 1].forEach((xDiff) => {
    let currentLocation = startLocation;
    while (!loopCoords.includes(currentLocation.join(","))) {
      enclosedCoordsDiscovered.add(currentLocation.join(","));
      currentLocation = [currentLocation[0] + xDiff, currentLocation[1]];
    }
  });

  [-1, 1].forEach((yDiff) => {
    let currentLocation = startLocation;
    while (!loopCoords.includes(currentLocation.join(","))) {
      enclosedCoordsDiscovered.add(currentLocation.join(","));
      currentLocation = [currentLocation[0], currentLocation[1] + yDiff];
    }
  });
};

loopCoords.forEach((coord, idx) => {
  const [x, y] = coord.split(",").map((x) => Number.parseInt(x));
  const symbol = pipeMap[y][x];
  const [xOffset, yOffset] =
    inwardDirectionMap[symbol][currentInwardDirection].offset;
  scanForEnclosedSpaces([x + xOffset, y + yOffset]);
  if (idx < loopCoords.length - 1) {
    const [nextX, nextY] = loopCoords[idx + 1]
      .split(",")
      .map((x) => Number.parseInt(x));
    const nextSymbol = pipeMap[nextY][nextX];
    currentInwardDirection =
      inwardDirectionMap[symbol][currentInwardDirection][nextSymbol];
  }
});

console.log(enclosedCoordsDiscovered.size);
