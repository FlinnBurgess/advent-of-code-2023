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
const cameFrom: { [coords: string]: string } = {};

const getValidNeighbours = ({ x, y, path, costToReach }: Node) => {
  const validNeighbours: Node[] = [];

  if (path.endsWith("r")) {
    if (y > 0) {
      validNeighbours.push({
        x,
        y: y - 1,
        path: path.concat("u"),
        costToReach: costToReach + grid[y - 1][x],
      });
    }

    if (y < grid.length - 1) {
      validNeighbours.push({
        x,
        y: y + 1,
        path: path.concat("d"),
        costToReach: costToReach + grid[y + 1][x],
      });
    }

    if (!path.endsWith("rrr") && x < grid[0].length - 1) {
      validNeighbours.push({
        x: x + 1,
        y: y,
        path: path.concat("r"),
        costToReach: costToReach + grid[y][x + 1],
      });
    }
  } else if (path.endsWith("l")) {
    if (y > 0) {
      validNeighbours.push({
        x,
        y: y - 1,
        path: path.concat("u"),
        costToReach: costToReach + grid[y - 1][x],
      });
    }

    if (y < grid.length - 1) {
      validNeighbours.push({
        x,
        y: y + 1,
        path: path.concat("d"),
        costToReach: costToReach + grid[y + 1][x],
      });
    }

    if (!path.endsWith("lll") && x > 0) {
      validNeighbours.push({
        x: x - 1,
        y: y,
        path: path.concat("l"),
        costToReach: costToReach + grid[y][x - 1],
      });
    }
  } else if (path.endsWith("u")) {
    if (x > 0) {
      validNeighbours.push({
        x: x - 1,
        y,
        path: path.concat("l"),
        costToReach: costToReach + grid[y][x - 1],
      });
    }

    if (x < grid[0].length - 1) {
      validNeighbours.push({
        x: x + 1,
        y,
        path: path.concat("r"),
        costToReach: costToReach + grid[y][x + 1],
      });
    }

    if (!path.endsWith("uuu") && y > 0) {
      validNeighbours.push({
        x: x,
        y: y - 1,
        path: path.concat("u"),
        costToReach: costToReach + grid[y - 1][x],
      });
    }
  } else if (path.endsWith("d")) {
    if (x > 0) {
      validNeighbours.push({
        x: x - 1,
        y,
        path: path.concat("l"),
        costToReach: costToReach + grid[y][x - 1],
      });
    }

    if (x < grid[0].length - 1) {
      validNeighbours.push({
        x: x + 1,
        y,
        path: path.concat("r"),
        costToReach: costToReach + grid[y][x + 1],
      });
    }

    if (!path.endsWith("ddd") && y < grid.length - 1) {
      validNeighbours.push({
        x: x,
        y: y + 1,
        path: path.concat("d"),
        costToReach: costToReach + grid[y + 1][x],
      });
    }
  } else {
    validNeighbours.push({
      x: 1,
      y: 0,
      path: "r",
      costToReach: costToReach + grid[0][1],
    });
    validNeighbours.push({
      x: 0,
      y: 1,
      path: "d",
      costToReach: costToReach + grid[1][0],
    });
  }

  return validNeighbours;
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
    const costSoFar = costsSoFar[[next.x, next.y].join(",")];
    if (costSoFar === undefined || costSoFar < next.costToReach) {
      costsSoFar[[next.x, next.y].join(",")] = next.costToReach;
      queue.add(next);
      cameFrom[[next.x, next.y].join(",")] = [current.x, current.y].join(",");
    }
  });
}
