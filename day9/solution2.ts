import * as fs from "node:fs";
import * as readline from "node:readline";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { convertLineToNumberArray } from "../utils";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const inputStream = fs.createReadStream(`${__dirname}/input.txt`);
const rl = readline.createInterface({
  input: inputStream,
  crlfDelay: Infinity,
});

let answer = 0;

const mapToDifferences = (numbers: number[]) => {
  const differences: number[] = [];
  for (let i = 1; i < numbers.length; i++) {
    differences.push(numbers[i] - numbers[i - 1]);
  }
  return differences;
};

const findPreviousInSequence = (numbers: number[]) => {
  if (numbers.find((num) => num !== 0) === undefined) {
    return 0;
  }

  return numbers[0] - findPreviousInSequence(mapToDifferences(numbers));
};

for await (const line of rl) {
  const numbers = convertLineToNumberArray(line);
  answer += findPreviousInSequence(numbers);
}

console.log(answer);
