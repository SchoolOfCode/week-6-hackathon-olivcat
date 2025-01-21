import { test, expect } from "vitest";

import { findTraitor } from "./main.js";

//Checking we get the expected result of "Linda"
test("Reveal which potential Traitor's name is in the code", () => {
  let parchmentCode = "hL2I@k4jjA7zD98n6L!L1mFhP!aVh3X4a8e9R92sYtkdZ#8Fi!P-87cr78ngL1i8n9d6aT3w7tX9L1";
  expect(findTraitor(parchmentCode)).toBe("Linda");
});

//add an error to show that the test will fail if another name is returned
test("Should throw an error if the incorrect name is returned", () => {
  let parchmentCode = "xLxixnxdxax";
  expect(() => findTraitor("Malcolm")).toThrow("No traitor found");
});

test("Reveal which potential Traitor's name is in the code if the letters are sequential.", () => {
  let parchmentCode = "xLxixnxdxax";
  expect(findTraitor(parchmentCode)).toBe("Linda");
});

// I'm leaving this test failing
test("Should throw an error if the letters are in the parchment, but not in the correct order", () => {
  let parchmentCode = "xaxdxnxixLx";
  expect(() => findTraitor(parchmentCode)).toThrow("No traitor found");
});

/*Other potential test cases
//No name returned
//Mutliple names are returned
//A random symbol is returned */
