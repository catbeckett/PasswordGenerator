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

// Validate that at least one character type is selected
if (lowerCase || upperCase || numeric || special) {
  return {
    passLength: passLength,
    lowerCase: lowerCase,
    upperCase: upperCase,
    numeric: numeric,
    special: special
  };
}
}

// If no valid options are selected, return null
return null;
}

// Function to generate password based on options
function generatePassword(options) {
  var charset = '';

 // Add selected character types to the charset
 if (options.lowerCase) charset += lowerCasedCharacters.join('');
 if (options.upperCase) charset += upperCasedCharacters.join('');
 if (options.numeric) charset += numericCharacters.join('');
 if (options.special) charset += specialCharacters.join('');

 var password = '';


// Generate password based on the selected options and length
for (var i = 0; i < options.passLength; i++) {
  var randomIndex = Math.floor(Math.random() * charset.length);
  password += charset.charAt(randomIndex);
}

return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');


// Write password to the #password textarea
function writePassword() {
  var options = getPasswordOptions();

// Check if options are selected
if (options) {
  var password = generatePassword(options);
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
} else {
  // Alert user to select valid options
  alert("Please select valid options for generating the password.");
}
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);