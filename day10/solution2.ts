import * as fs from "node:fs";
import * as readline from "node:readline";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const inputStream = fs.createReadStream(`${__dirname}/input.txt`);
const rl = readline.createInterface({
  input: inputStream,
  crlfDelay: Infinity,
});

const pipeMap: string[][] = [];

for await (const row of rl) {
  // TODO: MAKE SURE YOU'RE REPLACING THE S WITH CORRECT SYMBOL
  pipeMap.push(row.replace("S", "F").split(""));
}

const validTiles = ["6,6", "7,4", "8,4", "9,4", "7,5", "8,5", "14,3", "14,6"];

let enclosedLocationsCount = 0;

let nonEnclosedSpacesFound: string[] = [];
let locationsSearched: string[] = [];
type Positioning = {
  vertical: "Above" | "Below";
  horizontal: "Left" | "Right";
};
const pipeLocationsMappedToDirectionsApproached: {
  [coords: string]: string[];
} = {};

let coordsBeingSearched: string;

const debugCoords = "3,2";

const searchLocation = (
  x: number,
  y: number,
  positioning: Positioning,
  searchPath: string,
) => {
  if (x >= pipeMap[0].length || x < 0 || y < 0 || y >= pipeMap.length) {
    if (coordsBeingSearched === debugCoords) {
      console.log(`Found a path to the outside: `, searchPath);
    }
    return true;
  }

  const coordString = `${x},${y}`;
  if (nonEnclosedSpacesFound.includes(coordString)) {
    if (coordsBeingSearched === debugCoords) {
      console.log(
        `Found a previously identified non enclosed space (${coordString}): `,
        searchPath,
      );
    }
    return true;
  }
  if (pipeMap[y][x] !== ".") {
    let directionsApproachedFrom =
      pipeLocationsMappedToDirectionsApproached[coordString];
    if (directionsApproachedFrom === undefined) {
      directionsApproachedFrom = [];
      pipeLocationsMappedToDirectionsApproached[coordString] =
        directionsApproachedFrom;
    }
    if (
      directionsApproachedFrom.includes(
        `${positioning.vertical}${positioning.horizontal}`,
      )
    ) {
      if (coordsBeingSearched === debugCoords) {
        console.log(
          `${coordString} already searched from heading ${positioning.horizontal} ${positioning.vertical}, path: ${searchPath}`,
        );
      }
      return false;
    } else {
      directionsApproachedFrom.push(
        `${positioning.vertical}${positioning.horizontal}`,
      );
    }
  } else if (locationsSearched.includes(coordString)) {
    if (coordsBeingSearched === debugCoords) {
      console.log(`${coordString} already searched, path: ${searchPath}`);
    }
    return false;
  }

  locationsSearched.push(coordString);

  if (
    searchRight(x, y, positioning, searchPath) ||
    searchLeft(x, y, positioning, searchPath) ||
    searchUp(x, y, positioning, searchPath) ||
    searchDown(x, y, positioning, searchPath)
  ) {
    if (pipeMap[y][x] === ".") {
      nonEnclosedSpacesFound.push(coordString);
    }
    return true;
  }

  return false;
};

const searchRight = (
  x: number,
  y: number,
  positioning: Positioning,
  searchPath: string,
) => {
  const symbol = pipeMap[y][x];
  if (symbol === "|" && positioning.horizontal === "Left") {
    if (coordsBeingSearched === debugCoords) {
      console.log(`cant move right, path: ${searchPath}`);
    }
    return false;
  }

  if (
    symbol === "7" &&
    positioning.vertical === "Below" &&
    positioning.horizontal === "Left"
  ) {
    if (coordsBeingSearched === debugCoords) {
      console.log(`cant move right, path: ${searchPath}`);
    }
    return false;
  }

  if (
    symbol === "J" &&
    positioning.vertical === "Above" &&
    positioning.horizontal === "Left"
  ) {
    if (coordsBeingSearched === debugCoords) {
      console.log(`cant move right, path: ${searchPath}`);
    }
    return false;
  }

  if (symbol === "F" && positioning.horizontal === "Left") {
    return searchLocation(
      x + 1,
      y,
      { vertical: "Above", horizontal: "Left" },
      searchPath.concat(
        ` -> Right (${JSON.stringify({ ...positioning, horizontal: "Left" })})`,
      ),
    );
  }

  if (symbol === "L" && positioning.horizontal === "Left") {
    return searchLocation(
      x + 1,
      y,
      { vertical: "Below", horizontal: "Left" },
      searchPath.concat(
        ` -> Right (${JSON.stringify({ ...positioning, horizontal: "Left" })})`,
      ),
    );
  }

  return searchLocation(
    x + 1,
    y,
    { ...positioning, horizontal: "Left" },
    searchPath.concat(
      ` -> Right (${JSON.stringify({ ...positioning, horizontal: "Left" })})`,
    ),
  );
};
const searchLeft = (
  x: number,
  y: number,
  positioning: Positioning,
  searchPath: string,
) => {
  const symbol = pipeMap[y][x];
  if (symbol === "|" && positioning.horizontal === "Right") {
    if (coordsBeingSearched === debugCoords) {
      console.log(`cant move left, path: ${searchPath}`);
    }
    return false;
  }

  if (
    symbol === "F" &&
    positioning.vertical === "Below" &&
    positioning.horizontal === "Right"
  ) {
    if (coordsBeingSearched === debugCoords) {
      console.log(`cant move left, path: ${searchPath}`);
    }
    return false;
  }

  if (
    symbol === "L" &&
    positioning.vertical === "Above" &&
    positioning.horizontal === "Right"
  ) {
    if (coordsBeingSearched === debugCoords) {
      console.log(`cant move left, path: ${searchPath}`);
    }
    return false;
  }

  if (symbol === "7" && positioning.horizontal === "Right") {
    return searchLocation(
      x - 1,
      y,
      { vertical: "Above", horizontal: "Right" },
      searchPath.concat(
        ` -> Left (${JSON.stringify({ ...positioning, horizontal: "Right" })})`,
      ),
    );
  }

  if (symbol === "J" && positioning.horizontal === "Right") {
    return searchLocation(
      x - 1,
      y,
      { vertical: "Below", horizontal: "Right" },
      searchPath.concat(
        ` -> Left (${JSON.stringify({ ...positioning, horizontal: "Right" })})`,
      ),
    );
  }

  return searchLocation(
    x - 1,
    y,
    { ...positioning, horizontal: "Right" },
    searchPath.concat(
      ` -> Left (${JSON.stringify({ ...positioning, horizontal: "Right" })})`,
    ),
  );
};
const searchUp = (
  x: number,
  y: number,
  positioning: Positioning,
  searchPath: string,
) => {
  const symbol = pipeMap[y][x];
  if (symbol === "-" && positioning.vertical === "Below") {
    if (coordsBeingSearched === debugCoords) {
      console.log(`cant move up, path: ${searchPath}`);
    }
    return false;
  }

  if (
    symbol === "7" &&
    positioning.vertical === "Below" &&
    positioning.horizontal === "Left"
  ) {
    if (coordsBeingSearched === debugCoords) {
      console.log(`cant move up, path: ${searchPath}`);
    }
    return false;
  }

  if (
    symbol === "F" &&
    positioning.vertical === "Below" &&
    positioning.horizontal === "Right"
  ) {
    if (coordsBeingSearched === debugCoords) {
      console.log(`cant move up, path: ${searchPath}`);
    }
    return false;
  }

  if (symbol === "L" && positioning.vertical === "Below") {
    return searchLocation(
      x,
      y - 1,
      { horizontal: "Left", vertical: "Below" },
      searchPath.concat(
        ` -> Up (${JSON.stringify({ ...positioning, vertical: "Below" })})`,
      ),
    );
  }

  if (symbol === "J" && positioning.vertical === "Below") {
    return searchLocation(
      x,
      y - 1,
      { horizontal: "Right", vertical: "Below" },
      searchPath.concat(
        ` -> Up (${JSON.stringify({ ...positioning, vertical: "Below" })})`,
      ),
    );
  }

  return searchLocation(
    x,
    y - 1,
    { ...positioning, vertical: "Below" },
    searchPath.concat(
      ` -> Up (${JSON.stringify({ ...positioning, vertical: "Below" })})`,
    ),
  );
};
const searchDown = (
  x: number,
  y: number,
  positioning: Positioning,
  searchPath: string,
) => {
  const symbol = pipeMap[y][x];
  if (symbol === "-" && positioning.vertical === "Above") {
    if (coordsBeingSearched === debugCoords) {
      console.log(`cant move down, path: ${searchPath}`);
    }
    return false;
  }

  if (
    symbol === "L" &&
    positioning.vertical === "Above" &&
    positioning.horizontal === "Right"
  ) {
    if (coordsBeingSearched === debugCoords) {
      console.log(`cant move down, path: ${searchPath}`);
    }
    return false;
  }

  if (
    symbol === "J" &&
    positioning.vertical === "Above" &&
    positioning.horizontal === "Left"
  ) {
    if (coordsBeingSearched === debugCoords) {
      console.log(`cant move down, path: ${searchPath}`);
    }
    return false;
  }

  if (symbol === "7" && positioning.vertical === "Above") {
    return searchLocation(
      x,
      y + 1,
      { horizontal: "Right", vertical: "Above" },
      searchPath.concat(
        ` -> Down (${JSON.stringify({ ...positioning, vertical: "Above" })})`,
      ),
    );
  }

  if (symbol === "F" && positioning.vertical === "Above") {
    return searchLocation(
      x,
      y + 1,
      { horizontal: "Left", vertical: "Above" },
      searchPath.concat(
        ` -> Down (${JSON.stringify({ ...positioning, vertical: "Above" })})`,
      ),
    );
  }

  return searchLocation(
    x,
    y + 1,
    { ...positioning, vertical: "Above" },
    searchPath.concat(
      ` -> Down (${JSON.stringify({ ...positioning, vertical: "Above" })})`,
    ),
  );
};

pipeMap.forEach((row, y) => {
  row.forEach((_, x) => {
    if (pipeMap[y][x] === ".") {
      coordsBeingSearched = `${x},${y}`;
      if (
        !searchLocation(x, y, { horizontal: "Left", vertical: "Below" }, "")
      ) {
        if (!validTiles.includes(coordsBeingSearched)) {
          console.log("identified ", coordsBeingSearched, " as a valid tile");
        }
        enclosedLocationsCount += 1;
      }
    }
  });
});

console.log(enclosedLocationsCount);
