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

const points: { x: number; y: number }[] = [];

let currentX = 0;
let currentY = 0;
let borderLength = 0;

const instructionMap = { "0": "R", "1": "D", "2": "L", "3": "U" };

for await (const row of rl) {
  const hex = row.split(" ")[2].replace("(#", "").replace(")", "");
  const count = Number.parseInt(hex.slice(0, 5), 16);
  const direction = instructionMap[hex.at(-1)];

  borderLength += count;

  switch (direction) {
    case "R":
      currentX += count;
      break;
    case "L":
      currentX -= count;
      break;
    case "U":
      currentY += count;
      break;
    case "D":
      currentY -= count;
      break;
  }

  points.push({ x: currentX, y: currentY });
}

let signedArea = 0;
points.forEach(({ x, y }, idx) => {
  let x2: number;
  let y2: number;

  if (idx === points.length - 1) {
    x2 = points[0].x;
    y2 = points[0].y;
  } else {
    x2 = points[idx + 1].x;
    y2 = points[idx + 1].y;
  }

  signedArea += x * y2 - x2 * y;
});

console.log(Math.abs(signedArea / 2) + borderLength / 2 + 1);

console.timeEnd();
