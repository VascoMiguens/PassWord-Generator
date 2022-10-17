// Assignment Code
// Get references to the #generate element
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
  return x.toUpperCase();
});

//Prompt user to make a choice and the boolean(True or false) return will be inserted into a variable
function promptChoice(choice) {
  var response = prompt("Do you want to include " + choice + "? {Y/N}");
  while (response !== "Y".toLowerCase() && response !== "N".toLowerCase()) {
    response = prompt("Response must be Y or N. Please try again");
  }

  if (response === "Y".toLowerCase()) {
    return true;
  } else {
    return false;
  }
}

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

  //Prompt user to choose password characteristics
  var hasLowerChars = promptChoice("lowercase characters");
  var hasUpperChars = promptChoice("uppercase characters");
  var hasSpecialChars = promptChoice("special characters");
  var hasNumbers = promptChoice("numbers");

  //Checks if the user has selected any type of character
  while (!hasLowerChars && !hasUpperChars && !hasSpecialChars && !hasNumbers) {
    alert("You must select at least on character type. Please try again!");
    //if user hasnt selected an option prompt user to make a choice
    hasLowerChars = promptChoice("lowercase charachters");
    hasUpperChars = promptChoice("uppercase characters");
    hasSpecialChars = promptChoice("special characters");
    hasNumbers = promptChoice("numbers");
  }
  //
  //insert user options into array
  var char = [];
  //password string
  var password = "";
  //if option is true insert array into empty array
  if (hasLowerChars) {
    //add lowercase characters to the char array
    char.push(...lowerChars);
    //add a lowercase character to the password array to ensure the password meets the requirements
    password += lowerChars[Math.floor(Math.random() * lowerChars.length)];
  }
  if (hasUpperChars) {
    //add uppercase characters to the char array
    char.push(...upperChars);
    //add a uppercase character to the password array to ensure the password meets the requirements
    password += upperChars[Math.floor(Math.random() * upperChars.length)];
  }
  if (hasSpecialChars) {
    //add special characters to the char array
    char.push(...specialChars);
    //add a lowercase character to the password array to ensure the password meets the requirements
    password += specialChars[Math.floor(Math.random() * specialChars.length)];
  }
  if (hasNumbers) {
    //add numbers to the char array
    char.push(...numbers);
    //add a lowercase character to the password array to ensure the password meets the requirements
    password += numbers[Math.floor(Math.random() * numbers.length)];
  }
  console.log(password.length);
  console.log(lenght - password.length);

  //select random character out of user's choices array
  for (i = password.length; i < lenght; i++) {
    password += char[Math.floor(Math.random() * char.length)];
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
