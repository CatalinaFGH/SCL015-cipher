import cipher from './cipher.js';

//Variables globales para cambiar las pantallas:
const welcomePage = document.getElementById("welcomeDisplay");
const cipherPage = document.getElementById("cipherDisplay");
const decipherPage = document.getElementById("decipherDisplay");

//Función para ir a la pantalla de cifrado
const toCipherPage = document.getElementById("nextDisplayCipherButton");
      toCipherPage.addEventListener("click", () => {
        welcomePage.style.display = "none";
        cipherPage.style.display = "block";
});

//Función para ir a la pantalla de descifrado
const toDecipherPage = document.getElementById("nextDisplayDecipherButton");
      toDecipherPage.addEventListener("click", () => {
        welcomePage.style.display = "none";
        decipherPage.style.display = "block";
});

//Función para volver a la pantalla de inicio desde la página de cifrado
const returnButton = document.getElementById("returnButton");
      returnButton.addEventListener("click", () => {
        cipherPage.style.display = "none";
        welcomePage.style.display = "block";  
});

//Función para volver a la pantalla de inicio desde la página de descifrado
const returnButton2 = document.getElementById("returnButton2");
      returnButton2.addEventListener("click", () => {
        decipherPage.style.display = "none";
        welcomePage.style.display = "block";  
});

//Función para borrar el contenido del input de cifrado
const cleanValues = () => {
const cleanCipherInput = document.getElementById("messageToCipher").value = "";
const cleanFinalMessageInput = document.getElementById("cipheredMessage").innerHTML ="";
const cleanDisplacementInput = document.getElementById("displacement").value = "";
}
const cleanInputValues = document.getElementById("cleanTextAreaButton");
      cleanInputValues.addEventListener("click", cleanValues);

//Función para borrar el contenido del input de cifrado de otra forma
// const cleanInputValues = document.getElementById("cleanTextAreaButton");
//       cleanInputValues.addEventListener("click", () => {

//       const cleanCipherInput = document.getElementById("messageToCipher").value = "";
//       const cleanFinalMessageInput = document.getElementById("cipheredMessage").innerHTML ="";
//       const cleanDisplacementInput = document.getElementById("displacement").value = "";
//       });

//Función para borrar el contenido del input de descifrado
// const cleanValues2 = () => {
// const cipherInputValue2 = document.getElementById("messageToDecipher").value = "";
// const cleanTheFinalMessageInput = document.getElementById("decipheredMessage").innerHTML ="";
// const cleanDisplacementInput2 = document.getElementById("displacement2").value = "";
// }
// const cleanDecipherInputValue = document.getElementById("cleanTextAreaButton2");
//       cleanDecipherInputValue.addEventListener("click", cleanValues2);

//Función para borrar el contenido del input de descifrado de otra forma
const cleanInputValues2 = document.getElementById("cleanTextAreaButton2");
      cleanInputValues2.addEventListener("click", () => {

      const cleanDecipherInput = document.getElementById("messageToDecipher").value = "";
      const cleanTheFinalMessageInput = document.getElementById("decipheredMessage").innerHTML ="";
      const cleanDisplacementInput2 = document.getElementById("displacement2").value = "";
      });



//Función para tomar el valor del input de cifrado y ejecutar la función importada de cifrar
const theCipherButton = document.getElementById("cipherButton");
      theCipherButton.addEventListener("click", () => {
//Le agregamos la función de parseInt para convertir a número entero el valor ingresado.
let displacementValue = parseInt(document.getElementById("displacement").value);

let data = document.getElementById("messageToCipher").value.toUpperCase();

let finalMessage = cipher.cipherText(displacementValue, data);

let finalMessageInput = document.getElementById("cipheredMessage").innerHTML = finalMessage;

});


//Función para tomar el valor del input de descifrado y ejecutar la función importada de descifrar
const theDecipherButton = document.getElementById("decipherButton");
      theDecipherButton.addEventListener("click", () => {

let displacementNumber = parseInt(document.getElementById("displacement2").value);

let cipheredWord = document.getElementById("messageToDecipher").value.toUpperCase();

let theFinalMessage = cipher.decipherText(displacementNumber, cipheredWord);
console.log(theFinalMessage);

let theFinalMessageInput = document.getElementById("decipheredMessage").innerHTML = theFinalMessage;

});