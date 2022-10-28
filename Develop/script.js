// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
if (!max) {
  max = min
  min = 0
}  
var rand = Math.random()
return Math.floor(min*(1 - rand) + rand*max)
}

function getRandomItem(list) {
  return list[randomInt(list.length)]
}

function generatePassword() {

// this is the loop for the generate button.  
// window.prompt refrences the whole list 
while (true) {
  var userInput = window.prompt("How long do you want your password to be?")  
  // user exited the prompt
  if (userInput === null) {
    // Does not print null
    return ''
  }
  // parseInt takes any string and tries to turn it into a number value
  var passwordLength = parseInt(userInput)
  if (isNaN(passwordLength)) {
    window.alert("That's not a number!")
  } else if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Invalid password length. Length should be between 8 and 128 characters")
    } else {
      break
    }
}

// window.confirm displays a dialog with a message that the user either confirms or cancels
var userWantsNumbers = window.confirm("Would you like to include numbers in your password")
var userWantsSymbols = window.confirm("Would you like to include symbols in your password")
var userWantsLowercase = window.confirm("Would you like to include lowercase in your password")
var userWantsUppercase = window.confirm("Would you like to include uppercase in your password")

var numberList= ["0","1","2","3","4","5","6","7","8","9"]
var symbolList= ["!","@","#","$","%","^","&","*"]
var lowercaseList=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var uppercaseList = []

// bucket consisting of numberlist, symbollist, lowercaselist, and uppercase list 
var passwordOptions = []
// using touppercase to convert lowercase list instead of typing it all out 
for (var i = 0; i < lowercaseList.length; i++) {
  uppercaseList[i] = lowercaseList[i].toUpperCase()
}

if (userWantsNumbers === true){
  passwordOptions.push(numberList)
}

if (userWantsSymbols === true){
  passwordOptions.push(symbolList)
}
if (userWantsLowercase === true){
  passwordOptions.push(uppercaseList)
}
if (userWantsUppercase === true){
  passwordOptions.push(uppercaseList)
}
if (passwordOptions.length === 0){
passwordOptions.push(lowercaseList)  
}


var generatedPassword = ""

for (var i = 0; i < passwordLength; i++){
  var randomList = getRandomItem(passwordOptions)
  var randomChar = getRandomItem(randomList)
  // puts the string in one line
  generatedPassword += randomChar
}
// returns password instead of using console.log and only seeing it in the console
return generatedPassword
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
