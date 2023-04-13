// Assignment code here
function generatePassword(length) {
  // list of characters to choose from
  var character = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*+_)({}|";
  // refers to the length of var character
  var characterLength = character.length;
  // Indicates where to start counting the index of var character from
  var counter = 0;
  //defines the end result
  var result = ""
  // As long as var counter is less than the lenght of var character
  while (counter < length) {
    result += character.charAt(Math.random() * characterLength);
    counter += 1;
  }
  return result;
}




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(12);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
