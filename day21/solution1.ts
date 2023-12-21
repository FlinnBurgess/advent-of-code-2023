import * as fs from "node:fs";
import * as readline from "node:readline";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.time();

let inputStream = fs.createReadStream(`${__dirname}/input.txt`);
let rl = readline.createInterface({
  input: inputStream,
  crlfDelay: Infinity,
});

type Pulse = { type: "h" | "l"; emitter: string; target: string };

const modules: { [label: string]: FlipFlop | Conjunction } = {};
const pulseQueue: Pulse[] = [];
let highEmitted = 0;
let lowEmitted = 0;

class FlipFlop {
  label: string;
  connections: string[];
  state: "on" | "off" = "off";
  constructor(label: string, connections: string[]) {
    this.label = label;
    this.connections = connections;
  }

  receivePulse(pulse: Pulse) {
    if (pulse.type === "l") {
      if (this.state === "off") {
        this.state = "on";
        this.connections.forEach((con) => {
          pulseQueue.push({ emitter: this.label, target: con, type: "h" });
        });
      } else {
        this.state = "off";
        this.connections.forEach((con) => {
          pulseQueue.push({ emitter: this.label, target: con, type: "l" });
        });
      }
    }
  }
}

class Conjunction {
  label: string;
  inputPulses: { [label: string]: Pulse["type"] } = {};
  connections: string[];

  constructor(label: string, connections: string[]) {
    this.label = label;
    this.connections = connections;
  }

  registerInput(label: string) {
    this.inputPulses[label] = "l";
  }

  receivePulse(pulse: Pulse) {
    this.inputPulses[pulse.emitter] = pulse.type;
    if (
      Object.values(this.inputPulses).find((type) => type === "l") !== undefined
    ) {
      this.connections.forEach((con) => {
        pulseQueue.push({ emitter: this.label, target: con, type: "h" });
      });
    } else {
      this.connections.forEach((con) => {
        pulseQueue.push({ emitter: this.label, target: con, type: "l" });
      });
    }
  }
}

let initialTargets: string[];

const conjunctionModules: string[] = [];

for await (const row of rl) {
  const [moduleDetails, targetsStr] = row.split(" -> ");
  const targets = targetsStr.split(", ");
  const label = moduleDetails.slice(1);
  if (moduleDetails === "broadcaster") {
    initialTargets = targets;
  } else if (moduleDetails.startsWith("%")) {
    modules[label] = new FlipFlop(label, targets);
  } else {
    conjunctionModules.push(label);
    modules[label] = new Conjunction(label, targets);
  }
}

// loop over again to register the conjunction inputs
inputStream = fs.createReadStream(`${__dirname}/input.txt`);
rl = readline.createInterface({
  input: inputStream,
  crlfDelay: Infinity,
});
for await (const row of rl) {
  const [moduleDetails, targetsStr] = row.split(" -> ");
  const targets = targetsStr.split(", ");
  const label = moduleDetails.slice(1);

  targets.forEach((t) => {
    if (conjunctionModules.includes(t)) {
      (modules[t] as Conjunction).registerInput(
        moduleDetails === "broadcaster" ? "broadcaster" : label,
      );
    }
  });
}

let timesPushed = 0;

while (timesPushed < 1000) {
  timesPushed += 1;
  lowEmitted += 1;
  initialTargets.forEach((t) => {
    pulseQueue.push({ emitter: "broadcaster", type: "l", target: t });
  });
  while (pulseQueue.length > 0) {
    const nextPulse = pulseQueue.shift();
    if (nextPulse.type === "l") {
      lowEmitted += 1;
    } else {
      highEmitted += 1;
    }
    modules[nextPulse.target]?.receivePulse(nextPulse);
  }
}

console.log(highEmitted, "high emitted");
console.log(lowEmitted, "low emitted");

console.log(highEmitted * lowEmitted);
console.timeEnd();
