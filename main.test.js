import { test, expect } from "vitest";

import { findTraitor } from "main.js";

//Checking we get the expected result of "Linda"
test("Reveal which potential Traitor's name is in the code", () => {
  const potentialTraitors = ["Linda", "Alexander", "Leanne", "Frankie"];
  expect(findTraitor(potentialTraitors)).toBe("Linda");
});

//add an error to show that the test will fail if another name is returned
test("Should throw an error if the incorrect name is returned", () => {
  expect(() => findTraitor("Alexander")).toThrow("No traitor found");
});

//Does the passing test return the Traitors name?

/*Other potential test cases
//No name returned
//Mutliple names are returned
//A random symbol is returned */
