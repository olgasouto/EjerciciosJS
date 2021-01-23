const letrasDNI= ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z',
'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
console.log(letrasDNI);

var numDNI=32831438
console.log(numDNI)
const letraDNI='L'
console.log(letraDNI)
const divisor=23

var numDNI = prompt("Por favor introduzca su DNI solo le diremos la letra si es L ")
if (numDNI<0 || numDNI>99999999) {
    alert('El número introducido no es válido');
};  
var resultadoLetra=numDNI%divisor
var letraelegida= letrasDNI[resultadoLetra]
console.log(letraelegida)

if(numDNI=true && letraelegida=='L') {
    alert('su letra es L');
}







