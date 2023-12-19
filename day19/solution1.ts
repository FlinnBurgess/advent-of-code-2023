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

type Part = {
  x: number;
  m: number;
  a: number;
  s: number;
};

type Comparator = {
  attr: string;
  gt: boolean;
  value: number;
  destination: string;
};

const acceptedParts: Part[] = [];
const rejectedParts: Part[] = [];
const parts: Part[] = [];

const workflows: {
  [name: string]: { comparators: Comparator[]; defaultDestination: string };
} = {};

let parsingWorkflows = true;

for await (const row of rl) {
  if (row.trim() === "") {
    parsingWorkflows = false;
    continue;
  }

  if (parsingWorkflows) {
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
  } else {
    parts.push(
      JSON.parse(
        row
          .replace("x", '"x"')
          .replace("m", '"m"')
          .replace("a", '"a"')
          .replace("s", '"s"')
          .replaceAll("=", ":"),
      ),
    );
  }
}

parts.forEach((part) => {
  console.log(JSON.stringify(part));
  let currentWorkflow: string | undefined = "in";
  while (!["A", "R"].includes(currentWorkflow)) {
    const { comparators, defaultDestination } = workflows[currentWorkflow];
    let nextWorkflow: string;
    for (let { attr, gt, value, destination } of comparators) {
      const partValue = part[attr];
      if ((gt && partValue > value) || (!gt && partValue < value)) {
        nextWorkflow = destination;
        break;
      }
    }
    currentWorkflow = nextWorkflow ?? defaultDestination;
  }

  if (currentWorkflow === "A") {
    acceptedParts.push(part);
  } else {
    rejectedParts.push(part);
  }
});

let total = 0;

acceptedParts.forEach(({ x, m, a, s }) => {
  total += x + m + a + s;
});

console.log(total);
console.timeEnd();
