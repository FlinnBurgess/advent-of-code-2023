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

let currentDirection = "north";
const directionMappings = {
  north: "west",
  west: "south",
  south: "east",
  east: "north",
};
const previouslySeenMappings = { north: {}, east: {}, south: {}, west: {} };

let columns: string[] = [];
for await (const row of rl) {
  row
    .split("")
    .reverse()
    .forEach((symbol, idx) => {
      columns[idx] = (columns[idx] ?? "").concat(symbol);
    });
}

const rotateClockwise = () => {
  const newColumns = [];
  columns.reverse();

  for (const column of columns) {
    column.split("").forEach((symbol, idx) => {
      newColumns[idx] = (newColumns[idx] ?? "").concat(symbol);
    });
  }

  columns = newColumns;
  currentDirection = directionMappings[currentDirection];
};

let previousMappingsFound = 0;

const tiltColumns = () => {
  const newColumns: string[] = [];
  columns.forEach((column) => {
    let tiltedColumn = previouslySeenMappings[currentDirection][column];
    if (tiltedColumn === undefined) {
      tiltedColumn = column
        .split("#")
        .map((columnSection) => {
          return columnSection
            .split("")
            .sort((char1, char2) => (char1 === "O" ? -1 : 1))
            .join("");
        })
        .join("#");
      previouslySeenMappings[currentDirection][column] = tiltedColumn;
    } else {
      previousMappingsFound += 1;
      // console.log(`${previousMappingsFound} previous mappings found so far`);
    }

    newColumns.push(tiltedColumn);
  });

  columns = newColumns;
};

let rotations = 0;

while (rotations < 1000000000) {
  if (rotations === 100000) {
    console.timeEnd();
  }
  tiltColumns();
  rotateClockwise();
  if (currentDirection === "north") {
    rotations += 1;
  }
}

// console.log("rotated ", rotations, " times before it looped");

// let total = 0;

// console.log(total);
