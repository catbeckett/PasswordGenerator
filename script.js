// Arrays of characters to be included in the password
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCasedCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');
var upperCasedCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

/// Function to prompt user for password options
function getPasswordOptions() {
  var passLength = parseInt(prompt("Enter the number of characters - At least 8 characters but no more than 128."));

  // Validate password length
  if (typeof passLength === "number" && passLength >= 8 && passLength <= 128) {
    var lowerCase = confirm("Include lowercase characters?");
    var upperCase = confirm("Include uppercase characters?");
    var numeric = confirm("Include numeric characters?");
    var special = confirm("Include special characters?");

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