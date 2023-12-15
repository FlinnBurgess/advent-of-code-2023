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

type Lens = {
  label: string;
  focalLength: number;
};

const lensBoxes: Lens[][] = [];

for (let i = 0; i < 256; i++) {
  lensBoxes.push([]);
}

const getHash = (input: string) => {
  let hash = 0;
  input.split("").forEach((char) => {
    hash += char.charCodeAt(0);
    hash *= 17;
    hash = hash % 256;
  });
  return hash;
};

for await (const row of rl) {
  row.split(",").forEach((step) => {
    if (step.includes("-")) {
      const label = step.split("-")[0];
      const box = lensBoxes[getHash(label)];
      const existingLabelPosition = box.findIndex(
        (lens) => lens.label === label,
      );
      if (existingLabelPosition > -1) {
        box.splice(existingLabelPosition, 1);
      }
    } else {
      const [label, focalLengthStr] = step.split("=");
      const focalLength = Number.parseInt(focalLengthStr);
      const newLens: Lens = { focalLength, label };
      const box = lensBoxes[getHash(label)];
      const existingLabelPosition = box.findIndex(
        (lens) => lens.label === label,
      );
      if (existingLabelPosition > -1) {
        box.splice(existingLabelPosition, 1, newLens);
      } else {
        box.push(newLens);
      }
    }
  });
}

lensBoxes.forEach((box, boxNumber) => {
  box.forEach((lens, lensIdx) => {
    total += (boxNumber + 1) * (lensIdx + 1) * lens.focalLength;
  });
});

console.log(total);
