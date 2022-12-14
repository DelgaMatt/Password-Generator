// Assignment code here
var generateBtn = document.querySelector("#generate");
var characterlength = 8;
var choiceArray = [];

var specialCharArray = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '{', '}', '?', '/', '<', '>'];
var lowerCaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numberArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");
  
  if(correctPrompts) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  } else {
    passwordtest.value = "";
  }
}

function generatePassword() {
  var password = "";
  for (var i = 0; i < characterlength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArray.length)
    password = password + choiceArray[randomIndex];
  }
  return password;
}

function getPrompts() {
  choiceArray = [];
  characterlength = prompt("How many characters do you want your password to be? (8-128 characters)"); 

  if (isNaN(characterlength) || characterlength < 8 || characterlength > 128) {
    alert("Character length has to be a number, 8 - 128 digits. Please try again.");
    return false;
    // return stops the function if the criteria above is met.
  }

  if(confirm("Would you like to include lowercase letters in your password?")) {
    choiceArray = choiceArray.concat(lowerCaseArray);
  }

  if(confirm("Would you like to include uppercase letters in your password?")) {
    choiceArray = choiceArray.concat(upperCaseArray);
  }

  if(confirm("Would you like to include special characters in your password?")) {
    choiceArray = choiceArray.concat(specialCharArray);
  }

  if(confirm("Would you like to include numbers in your password?")) {
    choiceArray = choiceArray.concat(numberArray);
  }

return true;
}