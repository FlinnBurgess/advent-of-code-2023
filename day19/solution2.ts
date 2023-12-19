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

let widestLimits: Limits = {
  x: { max: 4000, min: 1 },
  m: { max: 4000, min: 1 },
  a: { max: 4000, min: 1 },
  s: { max: 4000, min: 1 },
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

const attributeValuesSeen = {
  x: new Set<number>(),
  m: new Set<number>(),
  a: new Set<number>(),
  s: new Set<number>(),
};

while (pathLimits.length > 0) {
  const { x, m, a, s } = pathLimits.pop();
  let xSeenBefore = 0;
  let mSeenBefore = 0;
  let aSeenBefore = 0;
  let sSeenBefore = 0;

  for (let xVal = x.min; xVal <= x.max; xVal++) {
    if (attributeValuesSeen.x.has(xVal)) {
      xSeenBefore += 1;
    } else {
      attributeValuesSeen.x.add(xVal);
    }
  }
  for (let mVal = m.min; mVal <= m.max; mVal++) {
    if (attributeValuesSeen.m.has(mVal)) {
      mSeenBefore += 1;
    } else {
      attributeValuesSeen.m.add(mVal);
    }
  }
  for (let aVal = a.min; aVal <= a.max; aVal++) {
    if (attributeValuesSeen.a.has(aVal)) {
      aSeenBefore += 1;
    } else {
      attributeValuesSeen.a.add(aVal);
    }
  }
  for (let sVal = s.min; sVal <= s.max; sVal++) {
    if (attributeValuesSeen.s.has(sVal)) {
      sSeenBefore += 1;
    } else {
      attributeValuesSeen.s.add(sVal);
    }
  }

  const possibleX = x.max - x.min + 1;
  const possibleM = m.max - m.min + 1;
  const possibleA = a.max - a.min + 1;
  const possibleS = s.max - s.min + 1;

  total +=
    possibleX * possibleM * possibleA * possibleS -
    xSeenBefore * mSeenBefore * aSeenBefore * sSeenBefore;
}

console.log(total);
console.timeEnd();
