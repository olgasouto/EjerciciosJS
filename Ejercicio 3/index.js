console.log('Parte 1:Array');
const data= ["hola", 2, 5, "adiós"]
console.log(data);

console.log('Parte 2:Comparar números')
const data1=data[1]
const data2=data[2]
const comp=data1<data2
console.log(data1)
console.log(data2)
console.log(data1,'es menor que', data2,comp);

console.groupCollapsed('Parte 3: Operaciones posibles')
const suma=data1+data2
const resta=data1-data2
const producto=data1*data2
const cociente=data2/data1
const resto=data2%data1

console.log('su suma es',suma);
console.log('su resta es',resta);
console.log('su producto es',producto);
console.log('su cociente es',cociente);
console.log('el resto de su cociente es',resto);