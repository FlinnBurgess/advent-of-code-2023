import * as fs from "node:fs";
import * as readline from "node:readline";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { convertLineToNumberArray } from "../utils";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let lowestLocationNumber = 0;

const inputStream = fs.createReadStream(`${__dirname}/input.txt`);
const rl = readline.createInterface({
  input: inputStream,
  crlfDelay: Infinity,
});

type ConversionMap = {
  destinationRangeStart: number;
  destinationRangeEnd: number;
  sourceRangeStart: number;
  sourceRangeEnd: number;
};

let seeds: number[] = [];
const conversionMaps: { [mapName: string]: ConversionMap[] } = {
  "seed-to-soil": [],
  "soil-to-fertilizer": [],
  "fertilizer-to-water": [],
  "water-to-light": [],
  "light-to-temperature": [],
  "temperature-to-humidity": [],
  "humidity-to-location": [],
};

let mapsCurrentlyBeingParsed: ConversionMap[];

for await (const line of rl) {
  if (line.startsWith("seeds:")) {
    seeds = convertLineToNumberArray(line.split(": ")[1]);
  } else if (line.includes("map:")) {
    mapsCurrentlyBeingParsed = conversionMaps[line.split(" ")[0]];
  } else if (line.trim().length > 0) {
    const [destinationRangeStart, sourceRangeStart, rangeLength] =
      convertLineToNumberArray(line);
    mapsCurrentlyBeingParsed.push({
      destinationRangeStart,
      destinationRangeEnd: destinationRangeStart + rangeLength - 1,
      sourceRangeStart,
      sourceRangeEnd: sourceRangeStart + rangeLength - 1,
    });
  }
}

const convertNumber = (source: number, maps: ConversionMap[]) => {
  const relevantMap = maps.find((map) => {
    return source >= map.sourceRangeStart && source <= map.sourceRangeEnd;
  });

  if (relevantMap === undefined) {
    return source;
  }

  return (
    source - relevantMap.sourceRangeStart + relevantMap.destinationRangeStart
  );
};

let intermediateNumbers: number[] = seeds;

Object.values(conversionMaps).forEach((map) => {
  intermediateNumbers = intermediateNumbers.map((num) =>
    convertNumber(num, map),
  );
});

console.log(intermediateNumbers);

console.log(Math.min(...intermediateNumbers));
