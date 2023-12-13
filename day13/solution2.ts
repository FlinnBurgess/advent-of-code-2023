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

type Grid = { rows: string[]; columns: string[] };

const grids: Grid[] = [];
let currentGrid: Grid = { rows: [], columns: [] };

const findIndexOfReflectionLine = (lines: string[]) => {
  const lineLength = lines[0].length;
  for (let i = 1; i < lineLength; i++) {
    let discrepanciesFound = 0;
    for (const line of lines) {
      let leftSide = line.slice(0, i);
      let rightSideReflected = line.slice(i).split("").reverse().join("");

      if (rightSideReflected.length > leftSide.length) {
        rightSideReflected = rightSideReflected.slice(
          rightSideReflected.length - leftSide.length,
        );
      } else {
        leftSide = leftSide.slice(leftSide.length - rightSideReflected.length);
      }

      for (let char = 0; char < leftSide.length; char++) {
        if (leftSide[char] !== rightSideReflected[char]) {
          discrepanciesFound += 1;
        }
      }

      if (discrepanciesFound > 1) {
        break;
      }
    }

    if (discrepanciesFound === 1) {
      return i;
    }
  }
};

for await (const row of rl) {
  if (row.trim().length === 0) {
    grids.push(currentGrid);
    currentGrid = { rows: [], columns: [] };
    continue;
  }

  currentGrid.rows.push(row);

  row.split("").forEach((char, idx) => {
    currentGrid.columns[idx] = (currentGrid.columns[idx] ?? "").concat(char);
  });
}

grids.push(currentGrid);

let total = 0;

grids.forEach(({ columns, rows }, idx) => {
  const verticalReflectionLine = findIndexOfReflectionLine(rows);

  if (verticalReflectionLine) {
    total += verticalReflectionLine;
  } else {
    const horizontalReflectionLine = findIndexOfReflectionLine(columns);
    if (!horizontalReflectionLine) {
      console.log("Grid ", idx + 1, columns);
    }
    // console.log(horizontalReflectionLine * 100);
    total += horizontalReflectionLine * 100;
  }
});

console.log(total);
