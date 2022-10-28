// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
var userInput = window.prompt("How long do you want your password to be?")  
var passwordLength = parseInt(userInput)

if (isNaN(userInput)) {
  window.alert("That's not a number!")
  return
} 

if (passwordLength < 8 || passwordLength > 128) {
  window.alert("Password length must be between 8 and 128 characters")
}

var userWantsNumbers = window.confirm("Would you like to include numbers in your password")
var userWantsSymbols = window.confirm("Would you like to include symbols in your password")
var userWantsLowercase = window.confirm("Would you like to include lowercase in your password")
var userWantsUppercase = window.confirm("Would you like to include uppercase in your password")

var numberList= ["0","1","2","3","4","5","6","7","8","9"]
var symbolList= ["!","@","#","$","%","^","&","*"]
var lowercaseList=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var uppercaseList = []

var optionsCart = []

for (var i = 0; i < lowercaseList.length; i++) {
  uppercaseList[i] = lowercaseList[i].toUpperCase()
}

if (userWantsNumbers === true){
  optionsCart.push(numberList)
}

if (userWantsSymbols === true){
  optionsCart.push(symbolList)
}
if (userWantsLowercase === true){
  optionsCart.push(uppercaseList)
}
if (userWantsUppercase === true){
  optionsCart.push(uppercaseList)
}

console.log(optionsCart)
}
//console.log(userInput)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
