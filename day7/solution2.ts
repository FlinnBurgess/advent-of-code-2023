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
  J: 0,
  "2": 1,
  "3": 2,
  "4": 3,
  "5": 4,
  "6": 5,
  "7": 6,
  "8": 7,
  "9": 8,
  T: 9,
  Q: 10,
  K: 11,
  A: 12,
};

function unique(value, index, array) {
  return array.indexOf(value) === index;
}

for await (const line of rl) {
  const [handString, bidString] = line.split(/\s+/);
  const bid = Number.parseInt(bidString);
  const cards = handString.split("");

  const cardCounts: [string, number][] = cards.filter(unique).map((card) => {
    const cardCount = cards.filter((c) => c === card).length;
    return [card, cardCount];
  });

  cardCounts.sort(([, count1], [, count2]) => count2 - count1);

  const jokerIdx = cardCounts.findIndex(([card]) => card === "J");

  if (jokerIdx !== -1 && cardCounts.length > 1) {
    if (jokerIdx > 0) {
      cardCounts[0][1] += cardCounts[jokerIdx][1];
    } else {
      cardCounts[1][1] += cardCounts[jokerIdx][1];
    }

    cardCounts.splice(jokerIdx, 1);
  }

  switch (cardCounts.map(([, count]) => count).join(" ")) {
    case "5":
      sets.fiveOfAKind.push([handString, bid]);
      break;
    case "4 1":
      sets.fourOfAKind.push([handString, bid]);
      break;
    case "3 2":
      sets.fullHouse.push([handString, bid]);
      break;
    case "3 1 1":
      sets.threeOfAKind.push([handString, bid]);
      break;
    case "2 2 1":
      sets.twoPair.push([handString, bid]);
      break;
    case "2 1 1 1":
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
