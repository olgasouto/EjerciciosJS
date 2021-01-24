const numbers=[253, 8575, 1, 20, 562, 1233, 25, 27, 258, 254, 7485, 2683]
console.log('Lista inicial',numbers)


const parNumber=numbers.filter(number => number%2==0);
console.log('Lista de pares',parNumber);
const imparNumber=numbers.filter(number => number%2==!0);
console.log('Lista de impares',imparNumber);

