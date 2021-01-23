const notas=[6,7,2,9,3,4,5,8,2]
console.log(notas)

//for clásico
let total=0
for (let i=0;i<9;i++){
    total+=notas[i];
}
console.log(total)

// for of
const notas1=[6,7,2,9,3,4,5,8,2]
let total1=0
for (let i of notas1) total1+=i
console.log(total1)
