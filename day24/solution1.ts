import * as fs from "node:fs";
import * as readline from "node:readline";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { convertLineToNumberArray } from "../utils";
import { checkIntersection } from "line-intersect";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.time();

let inputStream = fs.createReadStream(`${__dirname}/input.txt`);
let rl = readline.createInterface({
  input: inputStream,
  crlfDelay: Infinity,
});

type HailStone = {
  px: number;
  py: number;
  vx: number;
  vy: number;
  id: number;
};

const hailStones: HailStone[] = [];
let id = 0;

for await (const line of rl) {
  const [pos, vel] = line.split(" @ ");
  const [px, py] = convertLineToNumberArray(pos, ", ");
  const [vx, vy] = convertLineToNumberArray(vel, ", ");
  hailStones.push({ px, py, vy, vx, id });
  id++;
}

const alreadyDone: string[] = [];
let total = 0;

const searchMin = 200000000000000;
const searchMax = 400000000000000;

const findEndsOfLineSegment = ({ px, py, vx, vy }: HailStone) => {
  // y = mx - (m * px) + py
  const m = vy / vx;
  const getYForX = (x: number) => m * x - m * px + py;

  if (vx < 0) {
    return [searchMin, getYForX(searchMin), px, py];
  }

  return [px, py, searchMax, getYForX(searchMax)];
};

hailStones.forEach((stone) => {
  let { px: px1, py: py1, vx: vx1, vy: vy1, id: id1 } = stone;
  hailStones.forEach((otherStone) => {
    let { px: px2, py: py2, vx: vx2, vy: vy2, id: id2 } = otherStone;
    const pairId = [id1, id2].sort().join(",");
    if (!alreadyDone.includes(pairId)) {
      alreadyDone.push(pairId);
      const [firstXStart, firstYStart, firstXEnd, firstYEnd] =
        findEndsOfLineSegment(stone);
      const [secondXStart, secondYStart, secondXEnd, secondYEnd] =
        findEndsOfLineSegment(otherStone);
      const result = checkIntersection(
        firstXStart,
        firstYStart,
        firstXEnd,
        firstYEnd,
        secondXStart,
        secondYStart,
        secondXEnd,
        secondYEnd,
      );
      if (result.type === "intersecting") {
        if (result.point.y >= searchMin && result.point.y <= searchMax) {
          if (result.point.x >= searchMin && result.point.x <= searchMax) {
            total++;
          }
        }
      }
    }
  });
});

console.log(total);

console.timeEnd();
