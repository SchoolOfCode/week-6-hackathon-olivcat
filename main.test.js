import { test, expect } from "vitest";

import { findTraitor } from "main.js";

test("Check to see which potential Traitor's name is in the code", () => {
  const potentialTraitors = ["Linda", "Alexander", "Leanne", "Frankie"];
  expect(findTraitor(potentialTraitors)).toBe("Linda");
});
