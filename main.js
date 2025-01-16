/* - What are the goals of our challenge?
- What scenarios can we provide to test 
if people have reached those goals?
- What is our problem to solve?
- Arrange, Act, Assert 
- Pseudocode */

/*Pseudocode for function 
Look through the given code and find the strings that contain names
From the names, decide who you think is the traitor
Select this string and store it in a variable
Write a function that searches through the array of code until it finds the string you have selected. 
Returns this string, which should contain name of the traitor. 




//What scenarios can we provide to test if people have reached those goals?
Assert - If the function returns a string from the array that matches the name of the traitor, the test should pass
If the function returns anything else, the test should fail. 

*/

//The Instructions
/* Last night, one of the faithfuls met their fate. But before they were killed, they left behind a clue as to who the murdererous traitor might be. 
//Someone has left a scroll of parchment outside your door with some mysterious code written on it 
//The faithfuls have identified four potential traitors Detective Cross, Farmer Linda, Reverend Forsyte and  Professor Nightshade. 
//Hint: The murderer left some muddy footprints outside the door so think about who this could be. 
//Write a function to iterate through the code and find the name of the traitor. 

//The Plan to solve 
//Use Chat GPT to create a block of code as an array, containing random letters, words and symbols with the four potential traitor names hidden inside. 
//Write a function that returns the name of the traitor.
//The function should use a method that iterates over the array

/* const array = ['apple', 'banana', 'cherry', 'date'];
const target = 'banana';

function findString(array, target) {
  return array.find(item => item === target);
}

console.log(findString(array, target)); // 'banana'*/
