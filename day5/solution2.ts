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

let sourceRanges: [number, number][] = [];
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
    const seeds = convertLineToNumberArray(line.split(": ")[1]);
    while (seeds.length >= 2) {
      const [startSeed, seedRange] = [seeds.shift(), seeds.shift()];
      sourceRanges.push([startSeed, startSeed + seedRange - 1]);
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

Object.values(conversionMaps).forEach((maps) => {
  maps.sort((map1, map2) => map1.sourceRangeStart - map2.sourceRangeStart);
});
function findNewRanges(
  rangeStart: number,
  rangeEnd: number,
  maps: ConversionMap[],
): [number, number][] {
  const newRanges: [number, number][] = [];

  let nextRangeStart = rangeStart;

  if (
    maps.findIndex(
      (map) =>
        (rangeStart >= map.sourceRangeStart &&
          rangeStart <= map.sourceRangeEnd) ||
        (rangeEnd >= map.sourceRangeStart && rangeEnd <= map.sourceRangeEnd),
    ) === -1
  ) {
    return [[rangeStart, rangeEnd]];
  }

  for (const {
    sourceRangeStart,
    sourceRangeEnd,
    destinationRangeStart,
  } of maps) {
    // console.log(rangeStart, rangeEnd);
    if (
      nextRangeStart >= sourceRangeStart &&
      nextRangeStart <= sourceRangeEnd
    ) {
      if (sourceRangeStart > nextRangeStart) {
        newRanges.push([nextRangeStart, sourceRangeStart - 1]);
        nextRangeStart = sourceRangeStart;
      }
      if (sourceRangeEnd >= rangeEnd) {
        newRanges.push([
          nextRangeStart - sourceRangeStart + destinationRangeStart,
          rangeEnd - sourceRangeStart + destinationRangeStart,
        ]);
        break;
      } else {
        newRanges.push([
          nextRangeStart - sourceRangeStart + destinationRangeStart,
          sourceRangeEnd - sourceRangeStart + destinationRangeStart,
        ]);
        nextRangeStart = sourceRangeEnd + 1;
      }
    } else if (rangeEnd <= sourceRangeEnd && rangeEnd >= sourceRangeStart) {
      if (nextRangeStart < sourceRangeStart) {
        newRanges.push([nextRangeStart, sourceRangeStart - 1]);
        nextRangeStart = sourceRangeStart;
      }

      newRanges.push([
        nextRangeStart - sourceRangeStart + destinationRangeStart,
        rangeEnd - sourceRangeStart + destinationRangeStart,
      ]);

      break;
    } else {
      newRanges.push([nextRangeStart, rangeEnd]);
    }
  }

  // console.log(newRanges);

  return [...new Set(newRanges)];
}

let intermediateRanges: [number, number][] = sourceRanges;

Object.entries(conversionMaps).forEach(([name, map]) => {
  console.log(
    `Processing ${name}, ${intermediateRanges.length} intermediate ranges to process`,
  );
  let newRanges: [number, number][] = [];
  intermediateRanges.forEach(([rangeStart, rangeEnd]) => {
    newRanges = [...newRanges, ...findNewRanges(rangeStart, rangeEnd, map)];
  });
  intermediateRanges = newRanges;
});

intermediateRanges
  .sort((r1, r2) => r1[0] - r2[0])
  .filter(([startSeed]) => startSeed !== 0);

console.log(intermediateRanges);
