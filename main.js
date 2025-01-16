export function findTraitor(parchmentCode) {
  const potentialTraitors = ["Linda", "Alexander", "Leanne", "Frankie"];

  // Loop through the list of traitors and check if their name exists as a substring in the code
  for (let name of potentialTraitors) {
    //Holding the name of each potential traitor as a variable
    if (parchmentCode.includes(name)) {
      //Checking if the name exists as a substring in the code
      return name;
      console.log(name);
    }
  }

  return "No traitor found";
}

q;
let parchmentCode =
  "hL2I@k4jjA7zD98n6L!L1mFhP!aVh3X4a8e9R92sYtkdZ#8Fi!P-87cr78ngL1i8n9d6aT3w7tX9L1";
