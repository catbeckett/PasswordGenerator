// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
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
// Function to prompt user for password options
function getPasswordOptions() {
  var passLength = parseInt(prompt("Enter the number of characters - At least 8 characters but no more than 128."));
  if (typeof passLength === "number" && passLength >= 8 && passLength <= 128) {
    var lowerCase = confirm("Lowercase characters?");
    var upperCase = confirm("Uppercase characters?");
    var numeric = confirm("Numeric characters?");
    var special = confirm("Special characters?");
    if (lowerCase || upperCase || numeric || special) {
      return {
        passLength: passLength,
        upperCase: upperCase, 
        lowerCase: lowerCase,
        numeric: numeric,
        special: special,
      };
}

return password.join('');
}

alert ("Please write a valid password.") ;
}
// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
function generatePassword(length) {
  var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  var password = "";

  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }

  return password;
}

var newPassword = generatePassword(8);
console.log(newPassword);
  
// Get references to the #generate element
var generateBtn = document.querySelector('#generate');
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  console.log (getPasswordOptions());
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);