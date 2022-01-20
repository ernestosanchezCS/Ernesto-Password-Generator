var length = new Number;
var lowercase = new Boolean;
var uppercase = new Boolean;
var numeric = new Boolean;
var specialChar = new Boolean;

// Assignment Code
var generateBtn = document.querySelector("#generate");

function getTypes() {
    //ask if user wants
    //-lowercase
    lowercase = confirm("Do you want lowercase characters included?");
    // sets lowercase to true if click ok and false if cancel

    //-uppercase
    uppercase = confirm("Do you want uppercase characters included?");

    //-numeric
    numeric = confirm("Do you want numeric characters included?");

    //-special characters
    specialChar = confirm("Do you want special characters included?");

    //ensuring we have at least one character type
    if ((lowercase) || (uppercase) || (numeric) || (specialChar)) {
        return;
    }
    else {
        //restart getting types if didnt select one at least
        let messageError = alert("You must select at least one character type! Try Again")
        getTypes();
    }
}

function getLength() {

    //asks for user input for password length
    length = prompt("Enter Length of Password \n Possible Lengths are 8-128 Characters");

    //ensuring acceptable input or re-prompt
    if ((length >= 8) || (length <= 128)) {
        return length;
    }
    else {
        getLength();
    }

}

function generatePassword() {

    //this function returns the password
    length = getLength();
    //now we have the length stored in length

    //gets password criteria
    getTypes();
    //now we have the length and types ready to make our password

    //using math.random and math.floor we will randomly pick 
    //characters from our combined chosen char sets 
    //we reset the password and possible characters first
    var password = "";
    var possibleChar = "";

    //go and add more character type sets to possible characters variable
    if (lowercase) {
        possibleChar += "abcdefghijklmnopqrstuvwxyz";
    }
    if (uppercase) {
        possibleChar += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (numeric) {
        possibleChar += "0123456789";
    }
    if (specialChar) {
        //couldnt add double quotations because it would close my string
        //omitted it for now
        possibleChar += " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    }
    console.log(possibleChar);

    for (var i = 0; i < length; i++) {
        //now we pick from our possible character list we made at random
        password += possibleChar.charAt(Math.floor(Math.random() *
            possibleChar.length));
    }

    return password;

    // function makeid(length) {
    //     var result = '';
    //     var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    //     var charactersLength = characters.length;
    //     for (var i = 0; i < length; i++) {
    //         result += characters.charAt(Math.floor(Math.random() *
    //             charactersLength));
    //     }
    //     return result;
    // }

    // console.log(makeid(5));

}

// Write password to the #password input
function writePassword() {
    //user clicked generate password here 
    //now we ask length of wanted password
    //save that into password length
    var password = generatePassword();

    //selecting the text area element so we can then update value 
    var passwordText = document.querySelector("#password");

    //make text area value the password
    passwordText.value = password;

    //Below tests previous password to make sure length is right 
    //i had set it at 100 and it is confirmed by console log
    // var testone = "fOQSDwixnY&_mmt%`lPmq}d;zwWo|Pp%=.:8*A:y[?w:.rzQM]<eLW'vT')WducQvmIA({dM#h#ZJAo&,$(+[_%)8u}-< i07d';"
    // console.log(testone.length);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
