import * as fs from "node:fs";
import * as readline from "node:readline";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { match } from "assert";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const inputStream = fs.createReadStream(`${__dirname}/input.txt`);
const rl = readline.createInterface({
  input: inputStream,
  crlfDelay: Infinity,
});

let validConfigurations = 0;

let rowBeingProcessed: string;
let configCountForRow = 0;

const recursivelyLookForGroups = (
  row: string,
  groupSizes: number[],
  updated: string,
) => {
  if (groupSizes.length === 0) {
    if (row.indexOf("#") === -1) {
      const transformed = updated.concat(row).replaceAll("?", ".");
      transformed.split("").forEach((char, idx) => {
        if (char === "#") {
          if (!["#", "?"].includes(rowBeingProcessed[idx])) {
            console.log("solution doesnt match up for ", rowBeingProcessed);
          }
        }
      });
      configCountForRow += 1;
      validConfigurations += 1;
      console.log(
        updated.concat(row).replaceAll("?", "."),
        validConfigurations,
      );
    }
    return;
  }

  const groupSizesCopy = [...groupSizes];
  const groupSize = groupSizesCopy.shift();

  const splitByPreExisting = row.split("#".repeat(groupSize));

  const potentialGroupRegex = new RegExp(`(?=([#?]{${groupSize}}))`, "g");

  if (splitByPreExisting.length > 1) {
    const leftSide = splitByPreExisting[0];
    const rightSide = splitByPreExisting.slice(1).join("#".repeat(groupSize));
    if (
      leftSide.match(potentialGroupRegex) === null &&
      !rightSide.startsWith("#") &&
      !leftSide.includes("#")
    ) {
      const newUpdated = updated.concat(
        leftSide,
        "#".repeat(groupSize),
        rightSide.slice(0, 1),
      );
      // we already have a matching group with no alternatives
      recursivelyLookForGroups(
        // + 1 because we need a gap between the groups
        rightSide.slice(1),
        groupSizesCopy,
        newUpdated,
      );
      return;
    }
  }

  const viableGroups = [...row.matchAll(potentialGroupRegex)].filter(
    (match) => {
      return (
        !row.slice(0, match.index).includes("#") &&
        row[match.index + groupSize] !== "#"
      );
    },
  );

  if (viableGroups.length === 0) {
    return;
  }

  viableGroups.forEach((group) => {
    const newUpdated = updated.concat(
      row.slice(0, group.index),
      "#".repeat(groupSize),
      row.slice(group.index + groupSize, group.index + groupSize + 1),
    );
    recursivelyLookForGroups(
      // + 1 because we need a gap between the groups
      row.slice(group.index + group[1].length + 1),
      groupSizesCopy,
      newUpdated,
    );
  });
};

const counts = [];

for await (const row of rl) {
  const [springs, goal] = row.split(" ");
  rowBeingProcessed = springs;
  configCountForRow = 0;
  console.log("Matching for ", goal);
  console.log(springs);

  const groupSizes = goal.split(",").map((s) => Number.parseInt(s));

  recursivelyLookForGroups(springs, groupSizes, "");
  counts.push(configCountForRow);
}

// console.log(JSON.stringify(counts));

console.log(validConfigurations);
