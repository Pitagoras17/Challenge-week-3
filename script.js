// Assignment code here
// Definitions for options varables
var passUpper = ("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");
var passNumbers = (0,1,2,3,4,5,6,7,8,9);
var passSpecial = ("!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","}","[","]","`","~","?");

// Password generator function

function generatePassword() {
  characterCount = prompt("Password length", "Please select the length for your password between 8 and 128 characters");
  if (8 < characterCount < 128) {
    alert("Your password will be " + characterCount + " characters long.")
  } else if (8 > characterCount) {
    alert("Your password must be at least 8 characters")
  } else if (characterCount > 128) {
    alert("Your password must be no longer than 128 characters")
  } else if (characterCount !== passNumbers) {
    alert("Please enter numbers only")
  };
  characterUpper = confirm("Include uppercase characters?");
  if (characterUpper) {
    alert("Your password will also have uppercase characters")
  } else {
    alert("Your password will only have lowercase characters")
  }
  characterNumber = confirm("Include numerical characters?");
  if (characterNumber) {
    alert("Your password will also have numbers")
  } else {
    alert("Your password will not have numbers")
  }
  characterSpecial = confirm("Include special characters?");
  if (characterSpecial) {
    alert("Your password will also have special characters")
  } else {
    alert("Your password will not have special characters")
  }
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(event) {
  event.preventDefault();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);