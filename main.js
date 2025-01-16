export function findTraitor(parchmentCode) {
  const potentialTraitors = ["Linda", "Alexander", "Leanne", "Frankie"];

  // Loop through the list of traitors and check if their name exists as a substring in the code
  for (let name of potentialTraitors) {
    if (parchmentCode.includes(name)) {
      return name;
    }
  }

  return "No traitor found";
}

let parchmentCode =
  "hL2I@k4jjA7zD98n6L!L1mFhP!aVh3X4a8e9R92sYtkdZ#8Fi!P-87cr78ngL1i8n9d6aT3w7tX9L1";
