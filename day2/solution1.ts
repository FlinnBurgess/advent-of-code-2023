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

const addGameIdToTotalIfElligible = (id: number, results: Result[]) => {
  const invalidResult = results.find((result) => {
    return (
      result.blue > maxBlue || result.green > maxGreen || result.red > maxRed
    );
  });

  if (invalidResult !== undefined) {
    // console.log(`failed (${id}): ${JSON.stringify(invalidResult)}`);
  } else {
    total += id;
  }
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

  addGameIdToTotalIfElligible(Number.parseInt(gameId), parsedResults);
};

for await (const line of rl) {
  parseLine(line);
}

console.log(total);
