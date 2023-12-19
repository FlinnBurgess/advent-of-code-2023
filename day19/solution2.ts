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

type Limits = {
  x: { max: number; min: number };
  m: { max: number; min: number };
  a: { max: number; min: number };
  s: { max: number; min: number };
};

const pathLimits: Limits[] = [];

const determineMaxesAndMinsForPath = (workflowName: string, limits: Limits) => {
  if (workflowName === "A") {
    pathLimits.push(limits);
    return;
  }
  if (workflowName === "R") {
    return;
  }
  const workflow = workflows[workflowName];
  workflow.comparators.forEach(({ attr, destination, gt, value }) => {
    const limitsClone = JSON.parse(JSON.stringify(limits));
    if (gt) {
      limitsClone[attr].min = Math.max(value + 1, limitsClone[attr].min);
    } else {
      limitsClone[attr].max = Math.min(value - 1, limitsClone[attr].max);
    }
    determineMaxesAndMinsForPath(destination, limitsClone);
  });
  determineMaxesAndMinsForPath(workflow.defaultDestination, limits);
};

determineMaxesAndMinsForPath("in", {
  x: { max: 4000, min: 1 },
  m: { max: 4000, min: 1 },
  a: { max: 4000, min: 1 },
  s: { max: 4000, min: 1 },
});

const seen: { x: number[]; m: number[]; a: number[]; s: number[] }[] = [];

while (pathLimits.length > 0) {
  const { x, m, a, s } = pathLimits.pop();
  let xValues: number[] = [];
  let mValues: number[] = [];
  let aValues: number[] = [];
  let sValues: number[] = [];

  for (let xVal = x.min; xVal <= x.max; xVal++) {
    xValues.push(xVal);
  }
  for (let mVal = m.min; mVal <= m.max; mVal++) {
    mValues.push(mVal);
  }
  for (let aVal = a.min; aVal <= a.max; aVal++) {
    aValues.push(aVal);
  }
  for (let sVal = s.min; sVal <= s.max; sVal++) {
    sValues.push(sVal);
  }

  let xUnique = xValues;
  let mUnique = mValues;
  let aUnique = aValues;
  let sUnique = sValues;

  seen.forEach(({ x: xSeen, m: mSeen, a: aSeen, s: sSeen }) => {
    xUnique = xUnique.filter((xVal) => !xSeen.includes(xVal));
    mUnique = mUnique.filter((mVal) => !mSeen.includes(mVal));
    aUnique = aUnique.filter((aVal) => !aSeen.includes(aVal));
    sUnique = sUnique.filter((sVal) => !sSeen.includes(sVal));
  });

  total += xUnique.length * mValues.length * aValues.length * sValues.length;
  total +=
    mUnique.length *
    (xValues.length - xUnique.length) *
    aValues.length *
    sValues.length;
  total +=
    aUnique.length *
    (xValues.length - xUnique.length) *
    (mValues.length - mUnique.length) *
    sValues.length;
  total +=
    sUnique.length *
    (xValues.length - xUnique.length) *
    (mValues.length - mUnique.length) *
    (aValues.length - aUnique.length);

  seen.push({ x: xValues, m: mValues, a: aValues, s: sValues });
}

console.log(total);
console.timeEnd();
