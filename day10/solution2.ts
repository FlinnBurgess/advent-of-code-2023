import * as fs from "node:fs";
import * as readline from "node:readline";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { blob } from "stream/consumers";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const inputStream = fs.createReadStream(`${__dirname}/input.txt`);
const rl = readline.createInterface({
  input: inputStream,
  crlfDelay: Infinity,
});

const pipeMap: string[][] = [];

for await (const row of rl) {
  // TODO: MAKE SURE YOU'RE REPLACING THE S WITH CORRECT SYMBOL
  pipeMap.push(row.replace("S", "F").split(""));
}

let enclosedLocationsCount = 0;

let nonEnclosedSpacesFound: string[] = [];
let locationsSearched: string[] = [];
type Positioning = "Above" | "Below" | "Left" | "Right";
const positionings: Positioning[] = [];
const pipeLocationsMappedToDirectionsApproached: {
  [coords: string]: Positioning[];
} = {};

let coordsBeingSearched: string;

const searchLocation = (x: number, y: number) => {
  // console.log(positionings);
  if (x >= pipeMap[0].length || x < 0 || y < 0 || y >= pipeMap.length) {
    console.log(
      `reached the edge while searching for coords ${coordsBeingSearched}`,
    );
    positionings.pop();
    return true;
  }

  const coordString = `${x},${y}`;
  if (nonEnclosedSpacesFound.includes(coordString)) {
    positionings.pop();
    return true;
  }
  if (pipeMap[y][x] !== ".") {
    let directionsApproachedFrom =
      pipeLocationsMappedToDirectionsApproached[coordString];
    if (directionsApproachedFrom === undefined) {
      directionsApproachedFrom = [];
      pipeLocationsMappedToDirectionsApproached[coordString] =
        directionsApproachedFrom;
    }
    if (directionsApproachedFrom.includes(positionings.at(-1))) {
      return false;
    } else {
      directionsApproachedFrom.push(positionings.at(-1));
    }
  } else if (locationsSearched.includes(coordString)) {
    return false;
  }

  locationsSearched.push(coordString);

  if (
    searchRight(x, y) ||
    searchLeft(x, y) ||
    searchUp(x, y) ||
    searchDown(x, y)
  ) {
    if (pipeMap[y][x] === ".") {
      nonEnclosedSpacesFound.push(coordString);
    }
    positionings.pop();
    return true;
  }

  return false;
};

const searchRight = (x: number, y: number) => {
  if (
    ["|", "L", "J", "7", "F"].includes(pipeMap[y][x]) &&
    positionings.at(-1) === "Left"
  ) {
    return false;
  }

  switch (positionings.at(-1)) {
    case "Above":
      positionings.push("Above");
      break;
    case "Below":
      positionings.push("Below");
      break;
    default:
      positionings.push("Left");
  }

  return searchLocation(x + 1, y);
};
const searchLeft = (x: number, y: number) => {
  if (
    ["|", "L", "J", "7", "F"].includes(pipeMap[y][x]) &&
    positionings.at(-1) === "Right"
  ) {
    return false;
  }

  switch (positionings.at(-1)) {
    case "Above":
      positionings.push("Above");
      break;
    case "Below":
      positionings.push("Below");
      break;
    default:
      positionings.push("Right");
  }

  return searchLocation(x + 1, y);
};
const searchUp = (x: number, y: number) => {
  if (
    ["-", "7", "F", "L", "J"].includes(pipeMap[y][x]) &&
    positionings.at(-1) === "Below"
  ) {
    return false;
  }

  switch (positionings.at(-1)) {
    case "Left":
      positionings.push("Left");
      break;
    case "Right":
      positionings.push("Right");
      break;
    default:
      positionings.push("Below");
  }

  return searchLocation(x, y - 1);
};
const searchDown = (x: number, y: number) => {
  if (
    ["-", "7", "F", "L", "J"].includes(pipeMap[y][x]) &&
    positionings.at(-1) === "Above"
  ) {
    return false;
  }

  switch (positionings.at(-1)) {
    case "Left":
      positionings.push("Left");
      break;
    case "Right":
      positionings.push("Right");
      break;
    default:
      positionings.push("Above");
  }
  return searchLocation(x, y + 1);
};

pipeMap.forEach((row, y) => {
  row.forEach((_, x) => {
    if (pipeMap[y][x] === ".") {
      coordsBeingSearched = `${x},${y}`;
      console.log("searching ", coordsBeingSearched);
      if (!searchLocation(x, y)) {
        enclosedLocationsCount += 1;
      }
      // if (!nonEnclosedSpacesFound.includes(`${x},${y}`)) {
      //   enclosedLocationsCount += 1;
      // }
      console.log("searched: ", locationsSearched);
    }
    locationsSearched = [];
  });
});

console.log(nonEnclosedSpacesFound);
//
// console.log(enclosedLocationsCount);
