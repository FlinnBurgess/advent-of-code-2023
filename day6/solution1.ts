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

const timesToDistances: [number, number][] = [];

let times: number[] = [];
let distances: number[] = [];

for await (const line of rl) {
  if (line.startsWith("Time:")) {
    times = convertLineToNumberArray(line.split(/Time:\s+/)[1]);
  } else if (line.startsWith("Distance:")) {
    distances = convertLineToNumberArray(line.split(/Distance:\s+/)[1]);
  }
}

times.forEach((time, idx) => {
  timesToDistances.push([time, distances[idx]]);
});

let answer = 1;

timesToDistances.forEach(([time, distance]) => {
  let viableTimeCount = 0;

  for (let timeHeld = 1; timeHeld < time; timeHeld++) {
    const timeLeftToTravel = time - timeHeld;
    if (timeLeftToTravel * timeHeld > distance) {
      viableTimeCount += 1;
    }
  }

  answer *= viableTimeCount;
});

console.log(answer);
