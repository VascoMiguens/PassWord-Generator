// Assignment Code

var generateBtn = document.querySelector("#generate");
//Input Variables
//Numbers Array
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//Special characters array
var specialChars = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];
//Lowercase Characters Array
var lowerChars = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
//Uppercase Characters array
//The map will pick every element of the array one
//by one and will pass it as x to the function and
//turn it into uppercase
var upperChars = lowerChars.map(function (x) {
  return x.toUpperCase;
});

// Generate the password
function generatePassword() {
  //Prompt window for user to select the lenght of the password
  var lenght = window.prompt(
    "How long would you like your password to be?Choose between 8 and 128"
  );
  //If user didnt chose a value alert them to insert a value
  if (isNaN(lenght)) {
    alert("You need to insert a value");
    //if the value inserted was less than 8 or more than 128
    //prompt user to choose between that value
  } else if (lenght < 8 || lenght > 128) {
    window.prompt("Your password must be betwwen 8 and 128 characters");
  }

  //Object with all the user options
  //Set all options to false and password lenght to 0
  var ooptions = {
    numberofChars : 0,
    hasLowerChars : false,
    hasUpperChars : false,
    hasSpecialChars : false,
    hasNumbers : false,
  };
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
