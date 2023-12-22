export function convertLineToNumberArray(
  line: string,
  splitter: string | RegExp = /\s+/,
) {
  return line.split(splitter).map((num) => Number.parseInt(num));
}
