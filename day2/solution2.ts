import * as fs from "node:fs";
import * as readline from "node:readline";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const maxRed = 12;
const maxGreen = 13;
const maxBlue = 14;

type Result = { red: number; green: number; blue: number };

const parsedGames: {
  [id: number]: Result;
} = {};

let total = 0;

const inputStream = fs.createReadStream(`${__dirname}/input.txt`);
const rl = readline.createInterface({
  input: inputStream,
  crlfDelay: Infinity,
});

const addGamePowerToSum = (results: Result[]) => {
  let [redMultiplier, greenMultiplier, blueMultiplier] = [1, 1, 1];

  results.forEach((result) => {
    redMultiplier = Math.max(redMultiplier, result.red);
    greenMultiplier = Math.max(greenMultiplier, result.green);
    blueMultiplier = Math.max(blueMultiplier, result.blue);
  });

  const gamePower = redMultiplier * greenMultiplier * blueMultiplier;

  // console.log(redMultiplier, greenMultiplier, blueMultiplier, gamePower);

  total += gamePower;
};

const parseLine = (line: string) => {
  const gameId = line.match(/Game ([0-9]+)/)[1];
  const parsedResults: Result[] = [];

  const results = line.split(": ")[1];
  results.split(";").forEach((result) => {
    const parsedColours: Result = { red: 0, green: 0, blue: 0 };
    result.split(", ").forEach((colour) => {
      const [, count, col] = colour.match(/([0-9]+) (red|green|blue)/);
      if (count && col) {
        parsedColours[col] = Number.parseInt(count);
      }
    });
    parsedResults.push(parsedColours);
  });

  //   console.log(JSON.stringify(parsedResults));

  parsedGames[gameId] = parsedResults;

  addGamePowerToSum(parsedResults);
};

for await (const line of rl) {
  parseLine(line);
}

console.log(total);
