// Assignment code here
// Arrays full of character types
var lowerCaseLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCaseLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var nums = [0,1,2,3,4,5,6,7,8,9];
var specialCharacters = ['!','@','#','$','%','&','*','?','/','+','<','>','~',';','_','{','}','^'];
var types = [];

//Generates password using user selected criteria and user selected length
function generatePassword(){
  var length = window.prompt("Enter a password length between 8 and 128 characters.");
  if(length < 8 || length > 128){
    window.alert("Password must be between 8 and 128 characters."); //Error message if length is less then 8 or more then 128
    return;
  }

  //Confirm boxes for all accepted character types
  var lowerCase = confirm("Click 'okay' to include lower case letters.");
  var upperCase = confirm("Click 'okay' to include upper case letters.");
  var numbers = confirm("Click 'okay' to include numbers.");
  var special = confirm("Click 'okay' to include special characters.");
  
  //Pushes all confirmed options to "types array"
  if(lowerCase === true){
    types.push(lowerCaseLetters);
  }
  if(upperCase === true){
    types.push(upperCaseLetters);
  }
  if(numbers === true){
    types.push(nums);
  }
  if(special === true){
    types.push(specialCharacters);
  }
  console.log(types);

  if(lowerCase === false && upperCase === false && numbers === false && special === false){
    window.alert("Password must contain at least 1 character type"); //Error message if no character types are selected
    return;
  }

  var result = [];

  //Selects a random type of character, then selects a random element from that character specific array
  for(var i=0; i < length; i++){
    var x = types[Math.floor(Math.random()*types.length)];
    result.push(x[Math.floor(Math.random()*x.length)]);
  }

  console.log(x);
  console.log(result);
  types = []; //Resets types array for the next generate button press

  return result.join("");
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
