import * as fs from "node:fs";
import * as readline from "node:readline";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { convertLineToNumberArray } from "../utils";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let lowestLocationNumber = Infinity;

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

let seeds: [number, number][] = [];
const conversionMaps: { [mapName: string]: ConversionMap[] } = {
  "seed-to-soil": [],
  "soil-to-fertilizer": [],
  "fertilizer-to-water": [],
  "water-to-light": [],
  "light-to-temperature": [],
  "temperature-to-humidity": [],
  "humidity-to-location": [],
};

let mapsCurrentlyBeingParsed: ConversionMap[] = [];

for await (const line of rl) {
  if (line.startsWith("seeds:")) {
    const unpairedSeeds = convertLineToNumberArray(line.split(": ")[1]);
    while (unpairedSeeds.length >= 2) {
      seeds.push([unpairedSeeds.shift(), unpairedSeeds.shift()]);
    }
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

seeds.forEach(([startSeed, seedRange]) => {
  console.log("Starting seed batch");
  for (let seed = startSeed; seed < startSeed + seedRange; seed++) {
    let convertedNumber = seed;

    Object.values(conversionMaps).forEach((map) => {
      convertedNumber = convertNumber(convertedNumber, map);
    });

    lowestLocationNumber = Math.min(lowestLocationNumber, convertedNumber);
  }
});

console.log(lowestLocationNumber);
