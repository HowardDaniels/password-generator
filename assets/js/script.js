var passwordLength = prompt("How many characters should be in your password (it must be between 8 and 128 characters inclusive)?");
while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Please enter a valid password length. Passwords must be between 8 and 128 characters inclusive."); 
}
var specialCharacters = confirm("Would you like your password to include special characters?");
var numbers = confirm("Would you like your password to include numbers (digits 0-9)?");
var cases = confirm("Would you like your password to include both upper- and lowercase letters?");
if (cases == false) {
    var whichcase = confirm("Would you like letters to be all lowercase (if not, letters will be all uppercase)?");
}

var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numerical = "0123456789";
var special = "~`!@#$%^&*()-_+=[]{}|:;'<>,.?/";
var all = uppercase + lowercase + numerical + special;
var nospecialcharacters = uppercase + lowercase + numerical;
var nonumbers = uppercase + lowercase + special;
var nolowercase = uppercase + numerical + special;
var nouppercase = lowercase + numerical + special;
var onlyletters = lowercase + uppercase;
var numbersandlowercase = lowercase + numerical;
var specialandlowercase = lowercase + special;
var numbersanduppercase = uppercase + numerical;
var specialanduppercase = uppercase + special;
generatedPassword = "";

if ((specialCharacters == true) && (numbers == true) && (cases == true)) {

for (i = 1; i < (parseInt(passwordLength) + 1); i++) {
chargen = all.charAt(Math.floor(Math.random() * all.length));
generatedPassword += chargen;
}
}

else if ((specialCharacters == false) && (numbers == true) && (cases == true)) {

for (i = 1; i < (parseInt(passwordLength) + 1); i++) {
chargen = nospecialcharacters.charAt(Math.floor(Math.random() * nospecialcharacters.length));
generatedPassword += chargen;
}
}

else if ((specialCharacters == true) && (numbers == false) && (cases == true)) {

for (i = 1; i < (parseInt(passwordLength) + 1); i++) {
chargen = nonumbers.charAt(Math.floor(Math.random() * nonumbers.length));
generatedPassword += chargen;
}
}

else if ((specialCharacters == true) && (numbers == true) && (cases == false) && (whichcase == true)) {

for (i = 1; i < (parseInt(passwordLength) + 1); i++) {
chargen = nouppercase.charAt(Math.floor(Math.random() * nouppercase.length));
generatedPassword += chargen;
}
}

else if ((specialCharacters == true) && (numbers == true) && (cases == false) && (whichcase == false)) {

for (i = 1; i < (parseInt(passwordLength) + 1); i++) {
chargen = nolowercase.charAt(Math.floor(Math.random() * nolowercase.length));
generatedPassword += chargen;
}
}

else if ((specialCharacters == false) && (numbers == false) && (cases == true)) {

for (i = 1; i < (parseInt(passwordLength) + 1); i++) {
chargen = onlyletters.charAt(Math.floor(Math.random() * onlyletters.length));
generatedPassword += chargen;
}
}

else if ((specialCharacters == false) && (numbers == true) && (cases == false) && (whichcase == true)) {

for (i = 1; i < (parseInt(passwordLength) + 1); i++) {
chargen = numbersandlowercase.charAt(Math.floor(Math.random() * numbersandlowercase.length));
generatedPassword += chargen;
}
}

else if ((specialCharacters == false) && (numbers == true) && (cases == false) && (whichcase == false)) {

  for (i = 1; i < (parseInt(passwordLength) + 1); i++) {
  chargen = numbersanduppercase.charAt(Math.floor(Math.random() * numbersanduppercase.length));
  generatedPassword += chargen;
  }
  }
  
else if ((specialCharacters == true) && (numbers == false) && (cases == false) && (whichcase == true)) {

for (i = 1; i < (parseInt(passwordLength) + 1); i++) {
chargen = specialandlowercase.charAt(Math.floor(Math.random() * specialandlowercase.length));
generatedPassword += chargen;
}
}

else if ((specialCharacters == true) && (numbers == false) && (cases == false) && (whichcase == false)) {

  for (i = 1; i < (parseInt(passwordLength) + 1); i++) {
  chargen = specialanduppercase.charAt(Math.floor(Math.random() * specialanduppercase.length));
  generatedPassword += chargen;
  }
  }

else if ((specialCharacters == false) && (numbers == false) && (cases == false) && (whichcase == true)) {

  for (i = 1; i < (parseInt(passwordLength) + 1); i++) {
    chargen = lowercase.charAt(Math.floor(Math.random() * lowercase.length));
    generatedPassword += chargen;
}
}

else if ((specialCharacters == false) && (numbers == false) && (cases == false) && (whichcase == false)) {

  for (i = 1; i < (parseInt(passwordLength) + 1); i++) {
  chargen = uppercase.charAt(Math.floor(Math.random() * uppercase.length));
  generatedPassword += chargen;
  }
  }

$(document).ready(function() {


    $("#random-button").on("click", function() {

      generatedPassword 
      var targetDiv = document.getElementById("generated-password");
      targetDiv.textContent = generatedPassword;

      $("#randombutton").text(generatedPassword);

    });

  });

function copyPassword() {
      
  const el = document.createElement('textarea');
  el.value = generatedPassword;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};