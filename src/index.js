import cipher from './cipher.js';
console.log(cipher);

//Funcion de boton 1, para ocultar la primera pantalla y mostrar la segunda:
function nextDisplay(){

    document.getElementById("welcomeDisplay").style.display = "none";
    document.getElementById("cipherDisplay").style.display = "block";
    }
    let next = document.getElementById("nextDisplayButton");
    next.addEventListener("click", nextDisplay);
  //------------------------------------------------------------------------------------------------------
  //Funcion de boton 2, para cifrar:
  function cipherFunction(){
    document.getElementById("message").value;
    document.getElementById("message2").value = cipher.cipherText();
    }
    let cipherButton = document.getElementById("cipher");
    cipherButton.addEventListener("click", cipherFunction);
  //-----------------------------------------------------------------------------------------------------
  //Funcion de boton 3, para descifrar:
  function decipherFunction(){
    document.getElementById("message").value;
    document.getElementById("message2").value = cipher.decipherText();
    }
    let decipherButton = document.getElementById("decipher");
    decipherButton.addEventListener("click", decipherFunction);
  //-----------------------------------------------------------------------------------------------------
  // Funcion de botón 4, para restablecer los valores y borrar el texto de los inputs de mensajes:
  function cleanTextArea(){
    document.getElementById('message').value = '';
    document.getElementById('message2').value = '';
    }
    let clean = document.getElementById("cleanTextAreaButton");
    clean.addEventListener("click", cleanTextArea);