import { processInput } from "./src/index.js";


test("extracts single field", () => {
  const input = "a,b,c\n1,2,3";
  const result = processInput(input, ",", [1]);

  expect(result).toBe("a\n1");
});
