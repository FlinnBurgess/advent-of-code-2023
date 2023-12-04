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

type CardDetails = {
  winningNumbers: number[];
  myNumbers: number[];
  cardCount: number;
};

const scratchCardDetails: CardDetails[] = [];

for await (const line of rl) {
  const [winningNumbers, myNumbers] = line
    .split(": ")[1]
    .trim()
    .split(" | ")
    .map((numbers) => {
      return numbers.split(/\s+/).map((number) => Number.parseInt(number));
    });

  scratchCardDetails.push({ winningNumbers, myNumbers, cardCount: 1 });
}

scratchCardDetails.forEach((details, cardNumber) => {
  const numberOfMatches = details.myNumbers.filter((number) =>
    details.winningNumbers.includes(number),
  ).length;

  for (let i = 1; i <= numberOfMatches; i++) {
    if (cardNumber + i < scratchCardDetails.length) {
      scratchCardDetails[cardNumber + i].cardCount += details.cardCount;
    }
  }
});

scratchCardDetails.forEach(({ cardCount }) => (total += cardCount));

console.log(total);
