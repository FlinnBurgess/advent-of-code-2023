import * as fs from "node:fs";
import * as readline from "node:readline";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { loopCoords } from "./loopCoords.json";

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
  pipeMap.push(row.replace("S", "-").split(""));
}

let enclosedLocationsCount = 0;

let nonEnclosedSpacesFound: string[] = [];
let locationsSearched: string[] = [];
type Positioning = {
  vertical: "Above" | "Below";
  horizontal: "Left" | "Right";
};
const pipeLocationsMappedToDirectionsApproached: {
  [coords: string]: string[];
} = {};

const searchLocation = (x: number, y: number, positioning: Positioning) => {
  if (x >= pipeMap[0].length || x < 0 || y < 0 || y >= pipeMap.length) {
    return true;
  }

  const coordString = `${x},${y}`;
  if (nonEnclosedSpacesFound.includes(coordString)) {
    return true;
  }
  if (loopCoords.includes(coordString)) {
    let directionsApproachedFrom =
      pipeLocationsMappedToDirectionsApproached[coordString];
    if (directionsApproachedFrom === undefined) {
      directionsApproachedFrom = [];
      pipeLocationsMappedToDirectionsApproached[coordString] =
        directionsApproachedFrom;
    }
    if (
      directionsApproachedFrom.includes(
        `${positioning.vertical}${positioning.horizontal}`,
      )
    ) {
      return false;
    } else {
      directionsApproachedFrom.push(
        `${positioning.vertical}${positioning.horizontal}`,
      );
    }
  } else if (locationsSearched.includes(coordString)) {
    return false;
  }

  locationsSearched.push(coordString);

  if (
    searchRight(x, y, positioning) ||
    searchLeft(x, y, positioning) ||
    searchUp(x, y, positioning) ||
    searchDown(x, y, positioning)
  ) {
    if (pipeMap[y][x] === ".") {
      nonEnclosedSpacesFound.push(coordString);
    }
    return true;
  }

  return false;
};

const searchRight = (x: number, y: number, positioning: Positioning) => {
  const symbol = pipeMap[y][x];
  if (symbol === "|" && positioning.horizontal === "Left") {
    return false;
  }

  if (
    symbol === "7" &&
    positioning.vertical === "Below" &&
    positioning.horizontal === "Left"
  ) {
    return false;
  }

  if (
    symbol === "J" &&
    positioning.vertical === "Above" &&
    positioning.horizontal === "Left"
  ) {
    return false;
  }

  if (symbol === "F" && positioning.horizontal === "Left") {
    return searchLocation(x + 1, y, { vertical: "Above", horizontal: "Left" });
  }

  if (symbol === "L" && positioning.horizontal === "Left") {
    return searchLocation(x + 1, y, { vertical: "Below", horizontal: "Left" });
  }

  return searchLocation(x + 1, y, { ...positioning, horizontal: "Left" });
};
const searchLeft = (x: number, y: number, positioning: Positioning) => {
  const symbol = pipeMap[y][x];
  if (symbol === "|" && positioning.horizontal === "Right") {
    return false;
  }

  if (
    symbol === "F" &&
    positioning.vertical === "Below" &&
    positioning.horizontal === "Right"
  ) {
    return false;
  }

  if (
    symbol === "L" &&
    positioning.vertical === "Above" &&
    positioning.horizontal === "Right"
  ) {
    return false;
  }

  if (symbol === "7" && positioning.horizontal === "Right") {
    return searchLocation(x - 1, y, { vertical: "Above", horizontal: "Right" });
  }

  if (symbol === "J" && positioning.horizontal === "Right") {
    return searchLocation(x - 1, y, { vertical: "Below", horizontal: "Right" });
  }

  return searchLocation(x - 1, y, { ...positioning, horizontal: "Right" });
};
const searchUp = (x: number, y: number, positioning: Positioning) => {
  const symbol = pipeMap[y][x];
  if (symbol === "-" && positioning.vertical === "Below") {
    return false;
  }

  if (
    symbol === "7" &&
    positioning.vertical === "Below" &&
    positioning.horizontal === "Left"
  ) {
    return false;
  }

  if (
    symbol === "F" &&
    positioning.vertical === "Below" &&
    positioning.horizontal === "Right"
  ) {
    return false;
  }

  if (symbol === "L" && positioning.vertical === "Below") {
    return searchLocation(x, y - 1, { horizontal: "Left", vertical: "Below" });
  }

  if (symbol === "J" && positioning.vertical === "Below") {
    return searchLocation(x, y - 1, { horizontal: "Right", vertical: "Below" });
  }

  return searchLocation(x, y - 1, { ...positioning, vertical: "Below" });
};
const searchDown = (x: number, y: number, positioning: Positioning) => {
  const symbol = pipeMap[y][x];
  if (symbol === "-" && positioning.vertical === "Above") {
    return false;
  }

  if (
    symbol === "L" &&
    positioning.vertical === "Above" &&
    positioning.horizontal === "Right"
  ) {
    return false;
  }

  if (
    symbol === "J" &&
    positioning.vertical === "Above" &&
    positioning.horizontal === "Left"
  ) {
    return false;
  }

  if (symbol === "7" && positioning.vertical === "Above") {
    return searchLocation(x, y + 1, { horizontal: "Right", vertical: "Above" });
  }

  if (symbol === "F" && positioning.vertical === "Above") {
    return searchLocation(x, y + 1, { horizontal: "Left", vertical: "Above" });
  }

  return searchLocation(x, y + 1, { ...positioning, vertical: "Above" });
};

pipeMap.forEach((row, y) => {
  row.forEach((_, x) => {
    if (!loopCoords.includes(`${x},${y}`)) {
      if (!searchLocation(x, y, { horizontal: "Left", vertical: "Below" })) {
        enclosedLocationsCount += 1;
      }
    }
    locationsSearched = [];
  });
});

console.log(enclosedLocationsCount);
