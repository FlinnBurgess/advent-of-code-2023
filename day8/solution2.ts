import * as fs from "node:fs";
import * as readline from "node:readline";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const inputStream = fs.createReadStream(`${__dirname}/input.txt`);
const rl = readline.createInterface({
  input: inputStream,
  crlfDelay: Infinity,
});

let instructions: string[] = [];
const mappings: { [current: string]: { left: string; right: string } } = {};

for await (const line of rl) {
  if (line.trim() !== "") {
    if (line.includes("=")) {
      const [start, options] = line.split(" = ");
      const [left, right] = options
        .replace("(", "")
        .replace(")", "")
        .split(", ");
      mappings[start] = { left, right };
    } else {
      instructions = line.split("");
    }
  }
}

const locationsMappedToPossibleEndPositions: { [location: string]: number[] } =
  {};

const locationsMappedToFullLoopPositions: { [location: string]: string } = {};

Object.keys(mappings).forEach((location) => {
  const possibleEndPositions: number[] = [];
  let nextLocation: string = location;
  for (let i = 0; i < instructions.length; i++) {
    const { left, right } = mappings[nextLocation];
    nextLocation = instructions[i] === "L" ? left : right;
    if (nextLocation.endsWith("Z")) {
      possibleEndPositions.push(i + 1);
    }
    if (i === instructions.length - 1) {
      locationsMappedToFullLoopPositions[location] = nextLocation;
    }
  }
  if (possibleEndPositions.length) {
    locationsMappedToPossibleEndPositions[location] = possibleEndPositions;
  }
});

console.log(
  Object.keys(locationsMappedToPossibleEndPositions)
    .map((key) => [key, locationsMappedToPossibleEndPositions[key]])
    .filter(([, x]) => x.length > 0),
);

let currentLocations = Object.keys(mappings).filter((location) =>
  location.endsWith("A"),
);

console.log(currentLocations);

const locationsLength = currentLocations.length;

let stepsTaken = 0;
let solutionFound = false;

while (!solutionFound) {
  const relevantPaths = currentLocations
    .map((location) => locationsMappedToPossibleEndPositions[location])
    .filter((location) => !!location);

  if (relevantPaths.length === locationsLength) {
    const combined = relevantPaths.reduce(
      (prev, current) => [...current, ...prev],
      [],
    );

    const commonEndPoint = relevantPaths[0].find((endPoint) => {
      return combined.filter((x) => x === endPoint).length === locationsLength;
    });

    if (commonEndPoint !== undefined) {
      stepsTaken += commonEndPoint;
      solutionFound = true;
    }
  }

  if (!solutionFound) {
    currentLocations = currentLocations.map(
      (currentLocation) => locationsMappedToFullLoopPositions[currentLocation],
    );
    stepsTaken += instructions.length;
  }
}

console.log(stepsTaken);
