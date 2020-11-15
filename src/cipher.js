const cipher = {
  cipherText:() => {
    let data = document.getElementById("message").value.toUpperCase();
    let finalWord = "";

    for(let i=0; i<data.length; i++){
      let letter = data[i]; //la i entre corchetes, nos dice que mostremos el valor de la posición de la letra dentro del string.
      //console.log(letter); //Hasta aquí muestra lo que hay en cada posición del string, es decir, las letras POR SEPARADO.
      let letterAscii = letter.charCodeAt();
      //console.log(letterAscii); //Hasta aquí transforma las letras a su posición en ASCII, sin límites
      let displacementValue = parseInt(document.getElementById("displacement").value); //Le agregamos la función de parseInt para convertir a número el valor ingresado.
      let newLetterAscii = (letterAscii-65+displacementValue)%26+65;
      //console.log(newLetterAscii); //Hasta aquí le agrega el valor del desplazamiento y el valor de Ascii "avanza" a su nueva posición.
      //Agregamos un IF para establecer que el cifrado "respete" los espacios entre palabras o letras:
      if(letterAscii === 32){newLetterAscii = 32;} //Si la letra en Ascii es igualita a 32, mantenla y no le apliques la fórmula de avance.
      let newLetterValue = String.fromCharCode(newLetterAscii);
      //console.log(newLetterValue); //Hasta aquí convierte el nuevo valor de Ascii a una letra POR SEPARADO.
      //Ahora concatenamos las letras para formar una sola palabra:
      finalWord = finalWord.concat(newLetterValue);
      //A la variable finalWord (que actúa como contenedor) le entregamos el valor del elemento que va entre parentesis (lo que vamos a concatenar).
    }
    return finalWord; //Finalmente, la funcion nos "devuelve" el valor final de nuestra concatenación en el input 2.
  },

  decipherText:() => {
   let cipheredWord = document.getElementById("message").value.toUpperCase();
   let decipheredWord = "";
    
   for(let i=0; i<cipheredWord.length; i++){
      let toAscii = cipheredWord[i];
      //console.log(toAscii);
      let asciiValue = toAscii.charCodeAt();
      //console.log(asciiValue);
      let displacementNumber = parseInt(document.getElementById("displacement").value);
      let newAsciiValue = (asciiValue+65-displacementNumber)%26+65;
      //le RESTAMOS el desplazamiento (que se agregó al cifrar) y así devolvemos la letra a su posición inicial.
      //console.log(newAsciiValue);
      //Agregamos un IF para establecer que el cifrado "respete" los espacios entre palabras o letras:
      if(asciiValue === 32){newAsciiValue = 32;} //Si la letra en Ascii es igualita a 32, mantenla y no le apliques la fórmula de retroceso.
      let newLetter = String.fromCharCode(newAsciiValue);
      //console.log(newLetter);
      decipheredWord = decipheredWord.concat(newLetter);
    }
    return decipheredWord;
  }
};
export default cipher;