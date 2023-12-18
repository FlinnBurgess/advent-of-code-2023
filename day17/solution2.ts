import * as fs from "node:fs";
import * as readline from "node:readline";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { PriorityQueue } from "priority-queue-typed";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.time();

type Node = {
  x: number;
  y: number;
  costToReach: number;
  path: string;
};

const inputStream = fs.createReadStream(`${__dirname}/input.txt`);
const rl = readline.createInterface({
  input: inputStream,
  crlfDelay: Infinity,
});

const grid: number[][] = [];

for await (const row of rl) {
  grid.push(row.split("").map((s) => Number.parseInt(s)));
}

const xGoal = grid[0].length - 1;
const yGoal = grid.length - 1;

const queue = new PriorityQueue<Node>([], {
  comparator: (a, b) => {
    const aHeuristic = xGoal - a.x + (yGoal - a.y);
    const bHeuristic = xGoal - b.x + (yGoal - b.y);
    return a.costToReach + aHeuristic - (b.costToReach + bHeuristic);
  },
});
queue.add({ x: 0, y: 0, costToReach: 0, path: "" });

const costsSoFar: { [coords: string]: number } = { "0,0": 0 };

const getValidNeighbours = ({ x, y, path, costToReach }: Node) => {
  const validNeighbours: Node[] = [];

  if (path.endsWith("r") || path.endsWith("l")) {
    if (y > 3) {
      let newCostToReach = costToReach;
      for (let i = 1; i <= 4; i++) {
        newCostToReach += grid[y - i][x];
      }
      validNeighbours.push({
        x,
        y: y - 4,
        path: path.concat("uuuu"),
        costToReach: newCostToReach,
      });
    }

    if (y < grid.length - 4) {
      let newCostToReach = costToReach;
      for (let i = 1; i <= 4; i++) {
        newCostToReach += grid[y + i][x];
      }
      validNeighbours.push({
        x,
        y: y + 4,
        path: path.concat("dddd"),
        costToReach: newCostToReach,
      });
    }
  }

  if (path.endsWith("u") || path.endsWith("d")) {
    if (x > 3) {
      let newCostToReach = costToReach;
      for (let i = 1; i <= 4; i++) {
        newCostToReach += grid[y][x - i];
      }
      validNeighbours.push({
        x: x - 4,
        y,
        path: path.concat("llll"),
        costToReach: newCostToReach,
      });
    }

    if (x < grid[0].length - 4) {
      let newCostToReach = costToReach;
      for (let i = 1; i <= 4; i++) {
        newCostToReach += grid[y][x + i];
      }
      validNeighbours.push({
        x: x + 4,
        y,
        path: path.concat("rrrr"),
        costToReach: newCostToReach,
      });
    }
  }

  if (path.endsWith("r")) {
    if (!path.endsWith("r".repeat(10)) && x < grid[0].length - 1) {
      validNeighbours.push({
        x: x + 1,
        y: y,
        path: path.concat("r"),
        costToReach: costToReach + grid[y][x + 1],
      });
    }
  } else if (path.endsWith("l")) {
    if (!path.endsWith("l".repeat(10)) && x > 0) {
      validNeighbours.push({
        x: x - 1,
        y: y,
        path: path.concat("l"),
        costToReach: costToReach + grid[y][x - 1],
      });
    }
  } else if (path.endsWith("u")) {
    if (!path.endsWith("u".repeat(10)) && y > 0) {
      validNeighbours.push({
        x: x,
        y: y - 1,
        path: path.concat("u"),
        costToReach: costToReach + grid[y - 1][x],
      });
    }
  } else if (path.endsWith("d")) {
    if (!path.endsWith("d".repeat(10)) && y < grid.length - 1) {
      validNeighbours.push({
        x: x,
        y: y + 1,
        path: path.concat("d"),
        costToReach: costToReach + grid[y + 1][x],
      });
    }
  } else {
    let rCost = 0;
    let dCost = 0;
    for (let i = 1; i <= 4; i++) {
      rCost += grid[0][i];
      dCost += grid[i][0];
    }
    validNeighbours.push({
      x: 4,
      y: 0,
      path: "rrrr",
      costToReach: rCost,
    });
    validNeighbours.push({
      x: 0,
      y: 4,
      path: "dddd",
      costToReach: dCost,
    });
  }

  return validNeighbours;
};

const getKeySuffix = (path: string) => {
  const tail = path.match(/([u]+$|[d]+$|[l]+$|[r]+$)/)[0];
  return `${tail[0]}${tail.length}`;
};

while (!queue.isEmpty()) {
  const current = queue.poll();
  if (current.x === xGoal && current.y === yGoal) {
    console.log(
      "Solution found:",
      current.costToReach,
      "with path:",
      current.path,
    );
    break;
  }

  getValidNeighbours(current).forEach((next) => {
    const key = [next.x, next.y, getKeySuffix(next.path)].join(",");
    const costSoFar = costsSoFar[key];
    if (costSoFar === undefined || costSoFar < next.costToReach) {
      costsSoFar[key] = next.costToReach;
      queue.add(next);
    }
  });
}

console.timeEnd();
