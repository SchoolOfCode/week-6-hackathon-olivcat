import { test, expect } from "vitest";

import { findTraitor } from "main.js";

test("Reveal which potential Traitor's name is in the code", () => {
  const potentialTraitors = ["Linda", "Alexander", "Leanne", "Frankie"];
  expect(findTraitor(potentialTraitors)).toBe("Linda");
});

//add an error to show that the test will fail if another name is returned
test("Should throw an error if the incorrect name is entered", () => {
  expect(() => findTraitor("Alexander")).toThrow("Alexander is not a Traitor");
});

//Other test cases
//No name returned
//Mutliple names are returned
//A random symbol is returned
