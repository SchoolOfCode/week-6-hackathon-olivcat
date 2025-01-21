import { test, expect } from "vitest";

import { findTraitor } from "./main.js";

//Checking we get the expected result of "Linda"
test("Reveal which potential Traitor's name is in the code", () => {
  // const potentialTraitors = ["Linda", "Alexander", "Leanne", "Frankie"];
  // expect(findTraitor(potentialTraitors)).toBe("Linda");
  // let parchmentCode = "hL2I@k4jjA7zD98n6L!L1mFhP!aVh3X4a8e9R92sYtkdZ#8Fi!P-87cr78ngL1i8n9d6aT3w7tX9L1";
  let parchmentCode = "hL2I@k4jjA7zD98n6L!L1mFhP!aVh3X4a8e9R92sYtkdZ#8Fi!P-87cr78ngL1i8n9d6aT3w7tX9L1Linda";
  // let parchmentCode = "Linda";
  expect(findTraitor(parchmentCode)).toBe("Linda");
});

//add an error to show that the test will fail if another name is returned
test("Should throw an error if the incorrect name is returned", () => {
  // expect(() => findTraitor("Alexander")).toThrow("No traitor found");
  expect(() => findTraitor("Malcolm")).toThrow("No traitor found");
});

/*Other potential test cases
//No name returned
//Mutliple names are returned
//A random symbol is returned */
