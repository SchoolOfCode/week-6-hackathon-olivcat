import { test, expect } from "vitest";

import { findTraitor } from ".main.js";

test("barebones test should pass");

/*Pseudocode for test 
Arrange - Store the array in a variable, store the string containing the name of the traitor in a variable.
Act - Function to search through the array and return the string containing the name of the traitor.
Assert - If the function returns a string from the array that matches the name of the traitor, the test should pass. If the function returns anything else, the test should fail.*/

test("Check if the traitor has been found", () => {
  const parchmentCode = [
    "X",
    "p",
    "l",
    "q",
    "d",
    "7",
    "T",
    "a",
    "b",
    " ",
    "c",
    "x",
    "t",
    "T",
    "y",
    "o",
    "u",
    "b",
    "i",
    "n",
    "r",
    "s",
    " ",
    "F",
    "a",
    "r",
    "m",
    "e",
    "r",
    " ",
    "L",
    "i",
    "n",
    "d",
    "a",
    "i",
    "w",
    "q",
    "p",
    "u",
    "R",
    "l",
    "o",
    "m",
    "e",
    "l",
    "x",
    "s",
    "n",
    " ",
    "R",
  ];
  const traitor = "Farmer Linda";
});
expect(findTraitor(parchmentCode)).toBe(traitor);
