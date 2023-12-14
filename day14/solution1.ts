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

const columns: string[] = [];

for await (const row of rl) {
  row.split("").forEach((symbol, idx) => {
    columns[idx] = (columns[idx] ?? "").concat(symbol);
  });
}

let total = 0;

columns.forEach((column) => {
  const tiltedColumn = column
    .split("#")
    .map((columnSection) => {
      return columnSection
        .split("")
        .sort((char1, char2) => (char1 === "O" ? -1 : 1))
        .join("");
    })
    .join("#");

  for (let i = 0; i < tiltedColumn.length; i++) {
    if (tiltedColumn[i] === "O") {
      total += tiltedColumn.length - i;
    }
  }
});

console.log(total);

console.timeEnd();
