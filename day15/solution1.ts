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

let total = 0;

for await (const row of rl) {
  row.split(",").forEach((step) => {
    let interimTotal = 0;
    step.split("").forEach((char) => {
      interimTotal += char.charCodeAt(0);
      interimTotal *= 17;
      interimTotal = interimTotal % 256;
    });
    total += interimTotal;
  });
}

console.log(total);
