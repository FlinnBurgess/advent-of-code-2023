import * as fs from "node:fs";
import * as readline from "node:readline";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const nonDigitNumbers = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

const findFirstAndLastNonDigitNumber = function (line: string) {
  let lowestIdx = Infinity;
  let firstNumberFound;

  let highestIdx = -1;
  let lastNumberFound;

  Object.keys(nonDigitNumbers).forEach((numberString) => {
    const firstIdx = line.indexOf(numberString);
    if (firstIdx !== -1 && firstIdx < lowestIdx) {
      lowestIdx = firstIdx;
      firstNumberFound = nonDigitNumbers[numberString];
    }

    const lastIdx = line.lastIndexOf(numberString);
    if (lastIdx > highestIdx) {
      highestIdx = lastIdx;
      lastNumberFound = nonDigitNumbers[numberString];
    }
  });

  return {
    first: firstNumberFound && { number: firstNumberFound, idx: lowestIdx },
    last: lastNumberFound && { number: lastNumberFound, idx: highestIdx },
  };
};

const combineFirstAndLastDigit = function (line: string): number {
  const nonDigitNumberPositions = findFirstAndLastNonDigitNumber(line);
  const digitNumberPositions: {
    first?: { number: number; idx: number };
    last?: { number: number; idx: number };
  } = {};

  line.split("").forEach((char, idx) => {
    if (char.match(/[0-9]/) !== null) {
      const position = { number: Number.parseInt(char), idx };
      if (!digitNumberPositions.first) {
        digitNumberPositions.first = position;
      }

      digitNumberPositions.last = position;
    }
  });

  const firstDigit =
    (nonDigitNumberPositions.first?.idx ?? Infinity) <
    (digitNumberPositions.first?.idx ?? Infinity)
      ? nonDigitNumberPositions.first.number
      : digitNumberPositions.first.number;

  const lastDigit =
    (nonDigitNumberPositions.last?.idx ?? -1) >
    (digitNumberPositions.last?.idx ?? -1)
      ? nonDigitNumberPositions.last.number
      : digitNumberPositions.last.number;

  return Number.parseInt(`${firstDigit}${lastDigit}`);
};

const inputStream = fs.createReadStream(`${__dirname}/input.txt`);
const rl = readline.createInterface({
  input: inputStream,
  crlfDelay: Infinity,
});

let total = 0;

for await (const line of rl) {
  total += combineFirstAndLastDigit(line);
}

console.log(total);
