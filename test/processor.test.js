import { processInput } from "../src/index.js";

import test from "node:test";
import assert from "node:assert";



test("extracts single field", () => {
  const input = "a,b,c\n1,2,3";
  const result = processInput(input, ",", [1]);

  assert.strictEqual(result, "a\n1");
});
