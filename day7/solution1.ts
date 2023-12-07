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

const sets: { [setType: string]: [string, number][] } = {
  highCard: [],
  onePair: [],
  twoPair: [],
  threeOfAKind: [],
  fullHouse: [],
  fourOfAKind: [],
  fiveOfAKind: [],
};

const cardStrengths = {
  "2": 1,
  "3": 2,
  "4": 3,
  "5": 4,
  "6": 5,
  "7": 6,
  "8": 7,
  "9": 8,
  T: 9,
  J: 10,
  Q: 11,
  K: 12,
  A: 13,
};

function unique(value, index, array) {
  return array.indexOf(value) === index;
}

for await (const line of rl) {
  const [handString, bidString] = line.split(/\s+/);
  const bid = Number.parseInt(bidString);
  const cards = handString.split("");

  const cardCounts = cards
    .filter(unique)
    .map((card) => cards.filter((c) => c === card).length)
    .sort()
    .join(" ");

  switch (cardCounts) {
    case "5":
      sets.fiveOfAKind.push([handString, bid]);
      break;
    case "1 4":
      sets.fourOfAKind.push([handString, bid]);
      break;
    case "2 3":
      sets.fullHouse.push([handString, bid]);
      break;
    case "1 1 3":
      sets.threeOfAKind.push([handString, bid]);
      break;
    case "1 2 2":
      sets.twoPair.push([handString, bid]);
      break;
    case "1 1 1 2":
      sets.onePair.push([handString, bid]);
      break;
    default:
      sets.highCard.push([handString, bid]);
  }
}

Object.values(sets).forEach((set) =>
  set.sort(([hand1], [hand2]) => {
    let sort = 0;
    for (let i = 0; i < 5 && sort === 0; i++) {
      sort = cardStrengths[hand1[i]] - cardStrengths[hand2[i]];
    }
    return sort;
  }),
);

const flat = Object.values(sets).reduce(
  (prev, current) => [...prev, ...current],
  [],
);

let answer = 0;

flat.forEach(([, bid], idx) => {
  answer += bid * (idx + 1);
});

console.log(answer);
