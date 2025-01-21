export function findTraitor(parchmentCode) {
  const potentialTraitors = ["Linda", "Alexander", "Leanne", "Frankie"];
  // Loop through the list of traitors and check if their name exists as a substring in the code
  for (let name of potentialTraitors) {
    //Holding the name of each potential traitor as a variable
    if (nameInParchemt(name, parchmentCode)) {
      //Checking if the name exists as a substring in the code
      // console.log(`Parchement code ${parchmentCode} does include ${name}`);
      return name;
    }
    // console.log(`Parchement code ${parchmentCode} does NOT include ${name}`);
  }
  // console.log('Not Found - throwing Error');
  throw new Error("No traitor found");
}

// Checks if each letter of the name exists in the parchment
function nameInParchemt(name, parchmentCode) {
  for (var oneLetter of name) {
    if (!parchmentCode.includes(oneLetter)) {
      return false;
    }
  }
  return true;
}
