const words=['Enviromental','Systems','Research','Institute']
console.log('Palabras a medir',words)
console.log('Resultado esperado es Enviromental con 12 letras')

var wordsLong=words.map(contarletras)
function contarletras(wordsCont) {
    return wordsCont.length;
}
console.log('El número de letras es',wordsLong)


var resultado=words[0]
console.log('La palabra más larga es',resultado)