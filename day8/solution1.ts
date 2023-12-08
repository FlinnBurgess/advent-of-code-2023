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

let instructions: string[] = [];
const mappings: { [current: string]: { left: string; right: string } } = {};

for await (const line of rl) {
  if (line.trim() !== "") {
    if (line.includes("=")) {
      const [start, options] = line.split(" = ");
      const [left, right] = options
        .replace("(", "")
        .replace(")", "")
        .split(", ");
      mappings[start] = { left, right };
    } else {
      instructions = line.split("");
    }
  }
}

let currentLocation = "AAA";
let stepsTaken = 0;

while (currentLocation !== "ZZZ") {
  for (let i = 0; i < instructions.length && currentLocation !== "ZZZ"; i++) {
    const { left, right } = mappings[currentLocation];
    currentLocation = instructions[i] === "L" ? left : right;
    stepsTaken += 1;
  }
}

console.log(stepsTaken);
