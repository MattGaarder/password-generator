// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  "\\",
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];
// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var special = "";
var numeric = "";
var lowerCase = "";
var upperCase = "";
var characterAmount = 0;

function getPasswordOptions() {
  var characterAmount = parseInt(prompt("How many characters do you want in your password?"));
  var special = confirm("Would you like special characters in your password?");
  var numeric = confirm("Would you like numbers in your password?");
  var lowerCase = confirm("Would you like lower-case characters in your password?");
  var upperCase = confirm("Would you like upper-case characters in your password?");
  console.log(characterAmount);
  console.log(special);
  console.log(numeric);
  console.log(lowerCase);
  console.log(upperCase);
  return {
  characterAmount: characterAmount,
  special: special,
  numeric: numeric,
  lowerCase: lowerCase,
  upperCase: upperCase
  };
}

getPasswordOptions();

//note to self that it might be worth setting some restrictions based on this, so that if the characters is above or below the restriction an error message is returned to the user.

//the following is just the funtion to get a random character from an array, we will use this later to generate the password based on the user selected options.
//remember that arr is just a placeholder at this point and will replaced by the appropriate array when the function is invoked later.

function getRandom(arr) {
  character = Math.floor(arr.length * Math.random())
  character = arr[character];
  return character;
}

//this is now the function that will take the user input collected earlier and begin to generate the password. I don't think that at this point there is a need to specify the arrays being selected.

function generatePassword() {
  var passwordOptions = getPasswordOptions();
  console.log(passwordOptions);
}

generatePassword();

console.log("Hello World!")







/*
below is code that has been majorly tampered with. Above is code that is starting from scratch hopefully with less confusion. 
*/


// function getRandom(char) {
//   char = Math.floor(special.length * Math.random())
// }

// confirm with user their desired password options. If special === true, add special characters, if numberic === false, do not add numbers to password and so on
// prompt user for how many characters in password. Store this unit for later, to find out how many times we iterate through our arrays when generating the password.
// use special = Math.floor(special.length * Math.random()); or a variation of this to get a random character out of our arrays.
// Create a function for this so that it can be applied to each array without having to repeat code
// Create an object that has these arrays in them, and create the function so that it can apply to the object, to get a random array.
// Trigger this function equal to the amount of times prompted to the user.
// use .push() to add these random characters to an empty array
// Return this array to the user as the generated password 

// Questions: When would be appropriate to use objects and when would be appropriate to use an array? 
// When would it be appropriate to use key value pairs, or the .values or .map methods on our object? e.g. blackjack cards key-value pairs, or having an object of array like franco's
// blackjack: why is my code not working + why does else {switch (card > 7 || card = ["K","Q"...] etc.)}      
// is it always necessary to 'intialise' the variable before using it in the code?
// is it necessary to have a different variable for each card dealt, is there a better way of doing this? 

// Function to prompt user for password options
// function getPasswordOptions() {
//   var characterQuantity = prompt("How characters do you want?");
//   console.log(typeof characterQuantity)
//   if (parseInt(characterQuantity) && characterQuantity < 128 && characterQuantity > 8){
//     console.log("You've successfully selected your character quanitty options")
//   } else{
//     alert("You must select a valid character Quantity as a number Ex: 10")
//     return getPasswordOptions()
//   }
//   var passwordArr = [];

  //interact with the user to know what characterQuanitty is
  //what the passwordARrs will look like
  //I can write an if statement to check if everything was okay and if it doesn't I'll just 

//   return {
//     passwordLength: characterQuantity,
//     passwordBaseArr: passwordArr
//   }
// }

// Function for getting a random element from an array

// function getRandom(arr) {

// }

// Function to generate password with user input
// function generatePassword() {
//   console.log("Generating password")
//   var passwordOptions = getPasswordOptions()
//   console.log(passwordOptions.passwordBaseArr)
//   if(passwordOptions.passwordBaseArr === []){
//     console.log("it's empty")
//   }
//   var finalPass = ""

  //do stuff to my generatedPassword variable
//   return finalPass
// }

// Get references to the #generate element
// var generateBtn = document.querySelector('#generate');

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword()
//   console.log(password)
//   var passwordText = document.querySelector('#password');

//   passwordText.value = password;
// }

// Add event listener to generate button
// generateBtn.addEventListener('click', writePassword);