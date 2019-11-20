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
var all = uppercase + lowercase + numerical + special
generatedPassword = "";
console.log(all);

for (i = 1; i < (parseInt(passwordLength) + 1); i++) {
chargen = all.charAt(Math.floor(Math.random() * all.length));
generatedPassword += chargen;
}

console.log(all.length);


$(document).ready(function() {


    $("#random-button").on("click", function() {

      generatedPassword 
      var targetDiv = document.getElementById("generated-password");
      targetDiv.textContent = generatedPassword;

      // ... and then dump the random number into our random-number div.
      $("#randombutton").text(generatedPassword);

    });

  });