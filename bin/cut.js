#!/usr/bin/env node

import fs from "fs";
import { parseArgs, processInput } from "./index.js";


const args = process.argv.slice(2);

try {
  const { delimiter, fieldNumbers, filename } = parseArgs(args);

  const handleInput = (input) => {
    const result = processInput(input, delimiter, fieldNumbers);
    console.log(result);
  };

  if (!filename || filename === "-") {
    let data = "";

    process.stdin.setEncoding("utf-8");

    process.stdin.on("data", chunk => {
      data += chunk;
    });

    process.stdin.on("end", () => {
      handleInput(data);
    });

  } else {
    const fileContent = fs.readFileSync(filename, "utf-8");
    handleInput(fileContent);
  }

} catch (error) {
  console.error(error.message);
  process.exit(1);
}
