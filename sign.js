
let inputEle = document.getElementById("inputEle")
let signInTextEle = document.getElementById("signInText")
function signIn() {
   let inputValue = inputEle.value 
   let verifyText = "Hi" + inputValue + "Verifying your account..."
   signInTextEle.textContent = verifyText;
}

// let inputElement = document.getElementById("inputElement");
// let signInTextElement = document.getElementById("signInText");
// function signIn() {
//   let inputValue = inputElement.value;
//   let verifyText = "Hi " + inputValue + ", verifying your account...";
//   signInTextElement.textContent = verifyText;
// }