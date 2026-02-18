
export const parseArgs = (args) => {
  let delimiter = "\t";
  let fields = null;
  let filename = null;

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];

    if (arg.startsWith("-f")) {
      fields = arg.replace("-f", "");
    } else if (arg === "-d") {
      delimiter = args[i + 1];
      i++;
    } else {
      filename = arg;
    }
  }

  if (!fields) {
    throw new Error("Missing -f option");
  }

  const fieldNumbers = fields
    .split(/[, ]+/)
    .map(n => parseInt(n, 10));

  return { delimiter, fieldNumbers, filename };
};
