var frase=prompt('Escribe algo');
var resultado=checkLetters(frase);

function checkLetters(frase) {
    if (frase == frase.toUpperCase()) {
        console.log("Toda la frase está escrita en mayúsculas")
    }
    else if (frase == frase.toLowerCase()) {
         console.log("Toda la frase está escrita en minúsculas")
    }
    else {
        console.log("La frase tiene mayúsculas y minúsculas")
    }
    return resultado;
}