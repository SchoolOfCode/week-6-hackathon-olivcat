/\* - What are the goals of our challenge?

- What scenarios can we provide to test
  if people have reached those goals?
- What is our problem to solve?
- Arrange, Act, Assert
- Pseudocode \*/

/\*Pseudocode for function
Look through the given code and find the strings that contain names
From the names, decide who you think is the traitor
Select this string and store it in a variable
Write a function that searches through the array of code until it finds the string you have selected.
Returns this string, which should contain name of the traitor.

//What scenarios can we provide to test if people have reached those goals?
Assert - If the function returns a string from the array that matches the name of the traitor, the test should pass
If the function returns anything else, the test should fail.

\*/

//The Instructions
/\* Last night, one of the faithfuls met their fate. But before they were killed, they left behind a clue as to who the murdererous traitor might be.
//Someone has left a scroll of parchment outside your door with some mysterious code written on it
//Search the code to find the name of the potential traitor
//Here is a list of all the potential traitors to help you - "Linda", "Alexander", "Leanne", "Frankie"
//Write a function to decipher the code and find the name of the traitor.

//The Plan to solve
//Use Chat GPT to create a block of code as an array, containing random letters, words and symbols with the four potential traitor names hidden inside.
//Write a function that returns the name of the traitor.
//The function should use a method that iterates over the array

/_Pseudocode for test Arrange - Store the code from the parchment in a variable, store and array of the names of the potential traitors in a variable.
Act - Write a function to search through the code and check if the one of the potential traitors's names is returned.
Assert - The test should pass if it returns the name 'Linda', otherwise the test should fail ._/
