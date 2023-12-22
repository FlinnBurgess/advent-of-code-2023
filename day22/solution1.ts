import * as fs from "node:fs";
import * as readline from "node:readline";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { convertLineToNumberArray } from "../utils";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.time();

let inputStream = fs.createReadStream(`${__dirname}/input.txt`);
let rl = readline.createInterface({
  input: inputStream,
  crlfDelay: Infinity,
});

type Brick = {
  identifier: number;
  xStart: number;
  xEnd: number;
  yStart: number;
  yEnd: number;
  zStart: number;
  zEnd: number;
};

const bricks: Brick[] = [];

let identifier = 1;

for await (const line of rl) {
  const [start, end] = line.split("~");
  const [xStart, yStart, zStart] = convertLineToNumberArray(start, ",");
  const [xEnd, yEnd, zEnd] = convertLineToNumberArray(end, ",");

  bricks.push({ xStart, yStart, zStart, yEnd, xEnd, zEnd, identifier });

  identifier++;
}

bricks.sort((a, b) => a.zStart - b.zStart);

const brickPositionMap: { [coords: string]: Brick } = {};

const findBricksSupportingBrick: (b: Brick) => Brick[] = (brick: Brick) => {
  const supportingBricks: Brick[] = [];

  if (brick.zStart > 1) {
    for (let x = brick.xStart; x <= brick.xEnd; x++) {
      for (let y = brick.yStart; y <= brick.yEnd; y++) {
        supportingBricks.push(
          brickPositionMap[[x, y, brick.zStart - 1].join(",")],
        );
      }
    }
  }

  return supportingBricks.filter((b) => b !== undefined);
};

const findBricksBeingSupportedByBrick: (_: Brick) => Brick[] = (brick) => {
  const supportedBricks: Brick[] = [];

  for (let x = brick.xStart; x <= brick.xEnd; x++) {
    for (let y = brick.yStart; y <= brick.yEnd; y++) {
      supportedBricks.push(brickPositionMap[[x, y, brick.zEnd + 1].join(",")]);
    }
  }

  return supportedBricks.filter((x) => x !== undefined);
};

bricks.forEach((brick) => {
  while (brick.zStart !== 1 && findBricksSupportingBrick(brick).length === 0) {
    brick.zStart -= 1;
    brick.zEnd -= 1;
  }
  for (let x = brick.xStart; x <= brick.xEnd; x++) {
    for (let y = brick.yStart; y <= brick.yEnd; y++) {
      for (let z = brick.zStart; z <= brick.zEnd; z++) {
        brickPositionMap[[x, y, z].join(",")] = brick;
      }
    }
  }
});

let bricksSafeToDisintegrate = 0;

bricks.forEach((brick) => {
  let canBeDisintegrated = true;

  const bricksItSupports = findBricksBeingSupportedByBrick(brick);

  bricksItSupports.forEach((supportedBrick) => {
    const bricksTheyAreSupportedBy = findBricksSupportingBrick(supportedBrick);
    if (
      bricksTheyAreSupportedBy.filter(
        ({ identifier }) => identifier !== brick.identifier,
      ).length === 0
    ) {
      canBeDisintegrated = false;
    }
  });

  if (canBeDisintegrated) {
    bricksSafeToDisintegrate++;
  }
});

console.log(bricksSafeToDisintegrate);
console.timeEnd();
