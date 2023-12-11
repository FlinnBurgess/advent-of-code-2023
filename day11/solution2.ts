import * as fs from "node:fs";
import * as readline from "node:readline";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const inputStream = fs.createReadStream(`${__dirname}/input.txt`);
const rl = readline.createInterface({
  input: inputStream,
  crlfDelay: Infinity,
});

const galaxyMap: ("." | "#")[][] = [];
const expandedRows: number[] = [];
const expandedColumns: number[] = [];

let currentRow = 0;
for await (const row of rl) {
  const galaxyRow = row.split("") as ("." | "#")[];
  galaxyMap.push(galaxyRow);
  if (galaxyRow.find((x) => x === "#") === undefined) {
    expandedRows.push(currentRow);
  }
  currentRow++;
}

for (let column = 0; column < galaxyMap[0].length; column++) {
  let emptyColumn = true;
  for (let row of galaxyMap) {
    if (row[column] === "#") {
      emptyColumn = false;
      break;
    }
  }
  if (emptyColumn) {
    expandedColumns.push(column);
  }
}

const galaxyCoords: { x: number; y: number }[] = [];

galaxyMap.forEach((row, y) => {
  row.forEach((column, x) => {
    if (column === "#") {
      galaxyCoords.push({ x, y });
    }
  });
});

let answer = 0;

while (galaxyCoords.length > 0) {
  const galaxy = galaxyCoords.shift();
  galaxyCoords.forEach((otherGalaxy) => {
    const relevantExpandedColumns = expandedColumns.filter(
      (col) =>
        col > Math.min(galaxy.x, otherGalaxy.x) &&
        col < Math.max(galaxy.x, otherGalaxy.x),
    );
    const relevantExpandedRows = expandedRows.filter(
      (row) =>
        row > Math.min(galaxy.y, otherGalaxy.y) &&
        row < Math.max(galaxy.y, otherGalaxy.y),
    );

    answer += Math.abs(galaxy.x - otherGalaxy.x);
    answer += Math.abs(galaxy.y - otherGalaxy.y);
    answer += relevantExpandedRows.length * 999999;
    answer += relevantExpandedColumns.length * 999999;
  });
}

console.log(answer);
