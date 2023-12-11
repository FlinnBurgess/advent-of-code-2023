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

class PipeSection {
  connectionMap: { [entry: string]: [number, number] } = {};
  coords: [number, number];
  constructor(symbol?: string, coords?: [number, number]) {
    const [x, y] = coords ?? [];
    if (symbol && x !== undefined && y !== undefined) {
      this.coords = [x, y];
      let firstEntryPoint: [number, number];
      let secondEntryPoint: [number, number];

      switch (symbol) {
        case "|":
          firstEntryPoint = [x, y + 1];
          secondEntryPoint = [x, y - 1];
          break;
        case "-":
          firstEntryPoint = [x + 1, y];
          secondEntryPoint = [x - 1, y];
          break;
        case "L":
          firstEntryPoint = [x, y - 1];
          secondEntryPoint = [x + 1, y];
          break;
        case "J":
          firstEntryPoint = [x, y - 1];
          secondEntryPoint = [x - 1, y];
          break;
        case "7":
          firstEntryPoint = [x - 1, y];
          secondEntryPoint = [x, y + 1];
          break;
        case "F":
          firstEntryPoint = [x + 1, y];
          secondEntryPoint = [x, y + 1];
          break;
        default:
          throw new Error(`Unrecognized pipe symbol: ${symbol}`);
      }
      this.setEntryPoints(firstEntryPoint, secondEntryPoint);
    }
  }

  setEntryPoints(
    firstEntryPoint: [number, number],
    secondEntryPoint: [number, number],
  ) {
    this.connectionMap[firstEntryPoint.join("")] = secondEntryPoint;
    this.connectionMap[secondEntryPoint.join("")] = firstEntryPoint;
  }

  setCoords(x: number, y: number) {
    this.coords = [x, y];
  }

  findConnection(entryPoint: [number, number]) {
    return this.connectionMap[entryPoint.join("")];
  }
}

const pipeMap: PipeSection[][] = [];
let startPosition: [number, number];
const loopCoords: string[] = [];

let currentRow = 0;
for await (const row of rl) {
  const mapRow: PipeSection[] = [];
  row.split("").forEach((symbol, column) => {
    const coords: [number, number] = [column, currentRow];
    if (symbol === ".") {
      mapRow.push(undefined);
    } else if (symbol === "S") {
      startPosition = coords;
      mapRow.push(undefined);
      loopCoords.push(coords.join(","));
    } else {
      mapRow.push(new PipeSection(symbol, coords));
    }
  });
  pipeMap.push(mapRow);
  currentRow += 1;
}

const startEntryPoints: [number, number][] = [];

for (let x of [startPosition[0] - 1, startPosition[0] + 1]) {
  const pipeSection = pipeMap[startPosition[1]][x];
  if (pipeSection !== undefined) {
    startEntryPoints.push([x, startPosition[1]]);
  }
}
for (let y of [startPosition[1] - 1, startPosition[1] + 1]) {
  const pipeSection = pipeMap[y][startPosition[0]];
  if (pipeSection !== undefined) {
    startEntryPoints.push([startPosition[0], y]);
  }
}

const startPipeSection = new PipeSection();
startPipeSection.setEntryPoints(startEntryPoints[0], startEntryPoints[1]);
startPipeSection.setCoords(startPosition[0], startPosition[1]);
pipeMap[startPosition[1]][startPosition[0]] = startPipeSection;

let steps = 1;
const firstPipeSectionCoords = Object.values(startPipeSection.connectionMap)[0];
let previousPipeSection = startPipeSection;
let currentPipeSection =
  pipeMap[firstPipeSectionCoords[1]][firstPipeSectionCoords[0]];

while (
  currentPipeSection.coords.join("") !== startPipeSection.coords.join("")
) {
  loopCoords.push(currentPipeSection.coords.join(","));
  const [nextX, nextY] = currentPipeSection.findConnection(
    previousPipeSection.coords,
  );
  previousPipeSection = currentPipeSection;
  currentPipeSection = pipeMap[nextY][nextX];
  steps += 1;
}

console.log(loopCoords);

console.log(steps / 2);
