const times=[60,75,79,80,55,59]
console.log('Datos iniciales',times)
console.log ('Resultado esperado es 68')

const resultadoSuma=times.reduce((accumulator,currentValue) => accumulator+currentValue,0);
console.log('El resultado de la suma es',resultadoSuma)

const media=resultadoSuma/times.length
console.log('La media es',media)
