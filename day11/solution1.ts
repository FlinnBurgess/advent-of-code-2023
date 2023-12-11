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

for await (const row of rl) {
  const galaxyRow = row.split("") as ("." | "#")[];
  galaxyMap.push(galaxyRow);
  if (galaxyRow.find((x) => x === "#") === undefined) {
    galaxyMap.push([...galaxyRow]);
  }
}

for (let column = galaxyMap[0].length - 1; column >= 0; column--) {
  let emptyColumn = true;
  for (let row of galaxyMap) {
    if (row[column] === "#") {
      emptyColumn = false;
      break;
    }
  }
  if (emptyColumn) {
    galaxyMap.forEach((row) => {
      row.splice(column, 0, ".");
    });
  }
}

const galaxyCoords: [number, number][] = [];

galaxyMap.forEach((row, x) => {
  row.forEach((column, y) => {
    if (column === "#") {
      galaxyCoords.push([x, y]);
    }
  });
});

let answer = 0;
let doLog = true;

while (galaxyCoords.length > 0) {
  const galaxy = galaxyCoords.shift();
  galaxyCoords.forEach((otherGalaxy) => {
    answer += Math.abs(galaxy[0] - otherGalaxy[0]);
    answer += Math.abs(galaxy[1] - otherGalaxy[1]);
  });
  doLog = false;
}

console.log(answer);
