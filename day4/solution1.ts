import * as fs from "node:fs";
import * as readline from "node:readline";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let total = 0;

const inputStream = fs.createReadStream(`${__dirname}/input.txt`);
const rl = readline.createInterface({
  input: inputStream,
  crlfDelay: Infinity,
});

const addPointsToTotal = (cardDetails: string) => {
  const matchingNumbers = [];
  let cardPoints = 0;
  const [winningNumbers, myNumbers] = cardDetails
    .split(": ")[1]
    .trim()
    .split(" | ")
    .map((numbers) => {
      return numbers.split(/\s+/).map((number) => Number.parseInt(number));
    });

  console.log(winningNumbers);

  myNumbers.forEach((number) => {
    if (winningNumbers.includes(number)) {
      matchingNumbers.push(number);
      cardPoints = cardPoints === 0 ? 1 : cardPoints * 2;
    }
  });

  console.log(matchingNumbers);

  total += cardPoints;
};

for await (const line of rl) {
  addPointsToTotal(line);
}

console.log(total);
