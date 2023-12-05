export function convertLineToNumberArray(line: string) {
    return line.split(/\s+/).map(num => Number.parseInt(num));
}