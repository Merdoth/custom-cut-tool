// This file handles the text processing logic.

export const processInput = (input, delimiter, fieldNumbers) => {
  const lines = input.split("\n");

  return lines
    .filter(line => line.length > 0)
    .map(line => {
      const columns = line.split(delimiter);

      return fieldNumbers
        .map(n => columns[n - 1])
        .join(delimiter);
    })
    .join("\n");
};
