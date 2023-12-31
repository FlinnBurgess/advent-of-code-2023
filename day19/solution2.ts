import * as fs from "node:fs";
import * as readline from "node:readline";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.time();

const inputStream = fs.createReadStream(`${__dirname}/input.txt`);
const rl = readline.createInterface({
  input: inputStream,
  crlfDelay: Infinity,
});

const workflows: {
  [name: string]: { comparators: Comparator[]; defaultDestination: string };
} = {};

type Comparator = {
  attr: string;
  gt: boolean;
  value: number;
  destination: string;
};

for await (const row of rl) {
  if (row.trim() === "") {
    break;
  }

  const [name, rest] = row.split("{");
  const workflowSteps = rest.replace("}", "").split(",");
  const defaultNextWorkflow = workflowSteps.pop();
  const comparators: Comparator[] = [];
  workflowSteps.forEach((step) => {
    const [comparison, destination] = step.split(":");
    if (comparison.includes("<")) {
      const [attr, value] = comparison.split("<");
      comparators.push({
        gt: false,
        value: Number.parseInt(value),
        destination,
        attr,
      });
    } else {
      const [attr, value] = comparison.split(">");
      comparators.push({
        gt: true,
        value: Number.parseInt(value),
        destination,
        attr,
      });
    }
  });

  workflows[name] = { comparators, defaultDestination: defaultNextWorkflow };
}

let total = 0;
let rejected = 0;

const oneTo4k: number[] = [];
for (let i = 1; i <= 4000; i++) {
  oneTo4k.push(i);
}

type AvailableValues = {
  x: number[];
  m: number[];
  a: number[];
  s: number[];
};

const determineCombinationsForPath = (
  workflowName: string,
  availableValues: AvailableValues,
) => {
  if (workflowName === "A") {
    total +=
      availableValues.x.length *
      availableValues.m.length *
      availableValues.a.length *
      availableValues.s.length;
    return;
  }
  if (workflowName === "R") {
    rejected +=
      availableValues.x.length *
      availableValues.m.length *
      availableValues.a.length *
      availableValues.s.length;
    return;
  }
  let clone = JSON.parse(JSON.stringify(availableValues)) as AvailableValues;
  const workflow = workflows[workflowName];
  workflow.comparators.forEach(({ attr, destination, gt, value }) => {
    const cloneclone = JSON.parse(JSON.stringify(clone));
    if (gt) {
      cloneclone[attr] = cloneclone[attr].filter((v) => v > value);
      clone[attr] = clone[attr].filter((v) => v <= value);
    } else {
      cloneclone[attr] = cloneclone[attr].filter((v) => v < value);
      clone[attr] = clone[attr].filter((v) => v >= value);
    }
    determineCombinationsForPath(destination, cloneclone);
  });
  determineCombinationsForPath(workflow.defaultDestination, clone);
};

determineCombinationsForPath("in", {
  x: [...oneTo4k],
  m: [...oneTo4k],
  a: [...oneTo4k],
  s: [...oneTo4k],
});

console.log(total);
console.log(rejected);
console.log(total + rejected);
console.timeEnd();
