// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
   var password = generatePassword();
   var passwordText = document.querySelector("#password");

   passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Shom's work from here -------------------------------------------------------------

function generatePassword() {
   var length = promptPassWordLength();
   var isLowercase = promptLowerCase();
   var isUpperCase = promptUpperCase();
   var isSpecialCharacter = promptSpecialCharacter();
   var isNumeric = promptNumeric();

   var password = "";

   alphabetLowerCase = "abcdefghijklmnopqrstuvwxyz";
   alphabetUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   numericals = "0123456789";
   specialCharacter = `\`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`;
   allPossiblePwd = alphabetLowerCase + alphabetUpperCase + numericals + specialCharacter;

   if (!isLowercase && !isUpperCase && !isSpecialCharacter && !isNumeric) {
      window.alert("You Must Select One ");
      generatePassword();
   }

   console.log("Password length is: " + length);
   var i = 0;

   while (i < length) {
      if (isLowercase && i === 0) {
         password = password + alphabetLowerCase.charAt(Math.floor(Math.random() * alphabetLowerCase.length));
      } else if (isUpperCase && i === 1) {
         password = password + alphabetUpperCase.charAt(Math.floor(Math.random() * alphabetUpperCase.length));
      } else if (isNumeric && i === 2) {
         password = password + numericals.charAt(Math.floor(Math.random() * numericals.length));
      } else if (isNumeric && i === 3) {
         password = password + specialCharacter.charAt(Math.floor(Math.random() * specialCharacter.length));
      } else {
         password = password + allPossiblePwd.charAt(Math.floor(Math.random() * allPossiblePwd.length));
      }
      i++;
   }
   console.log("password is " + password);
}

// WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters  ---------

function promptPassWordLength() {
   var getLength = window.prompt("Choose password length between 8 to 128 characters");
   getLength = parseInt(getLength); //int = integer
   if (getLength < 8 || getLength > 128 || !getLength) {
      window.alert("Please enter lenghth between 8 to 128");
      promptPassWordLength();
   } else {
      newLength = getLength;
   }
   return newLength;
}

// Charactor Type.............................

function promptLowerCase() {
   var getLowerCase = confirm("Do you want lowercase?");

   return getLowerCase;
}

function promptUpperCase() {
   var getUpperCase = confirm("Do you want Upper case?");

   return getUpperCase;
}

function promptSpecialCharacter() {
   var getSpecialCharater = confirm("Do you want special characters?");

   return getSpecialCharater;
}

function promptNumeric() {
   var getNumeric = confirm("Do you want Numerical?");

   return getNumeric;
}
