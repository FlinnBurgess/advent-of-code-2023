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
    }

    newColumns.push(tiltedColumn);
  });

  columns = newColumns;
};

const previousConfigsSeen: string[] = [];

let loopFound = false;
let rotationsRequired: number;
let rotations = 0;

while (!loopFound) {
  tiltColumns();
  rotateClockwise();
  tiltColumns();
  rotateClockwise();
  tiltColumns();
  rotateClockwise();
  tiltColumns();
  rotateClockwise();
  rotations += 1;
  const previouslySeen = previousConfigsSeen.findIndex(
    (config) => config === columns.join(","),
  );
  if (previouslySeen > -1) {
    console.log("loop start found: ", previouslySeen + 1);
    console.log("loop end found: ", rotations);
    loopFound = true;
    columns = previousConfigsSeen[previouslySeen].split(",");
    rotationsRequired =
      (1000000000 - previouslySeen + 1) % (rotations - previouslySeen + 1);
  } else {
    previousConfigsSeen.push(columns.join(","));
  }
}

console.log("Rotations required: ", rotationsRequired);

for (let i = 0; i < 5; i++) {
  tiltColumns();
  rotateClockwise();
  tiltColumns();
  rotateClockwise();
  tiltColumns();
  rotateClockwise();
  tiltColumns();
  rotateClockwise();
}

let total = 0;

columns.forEach((column) => {
  for (let i = 0; i < column.length; i++) {
    if (column[i] === "O") {
      total += column.length - i;
    }
  }
});

console.log(total);
