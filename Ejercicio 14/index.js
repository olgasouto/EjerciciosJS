const users=[
    {username:'ppc90',age:30,premium:false},
    {username:'lu65',age:24,premium:true},
    {username:'maria3',age:36,premium:false},
    {username:'abc123',age:20,premium:false},
    {username:'sergio58',age:26,premium:true},
];
console.log('Lista inicial',users)

const usersPremium=users
  .filter(user => user.premium);
console.log('Usuarios Premium',usersPremium)

const user1=usersPremium[0]
const user2=usersPremium[1]
console.log('Soy lu65 premium',user1)
console.log('Soy sergio58 premium',user2)

const usersNoP=users
  .filter(user=>user.premium==false);
console.log('Usuarios No Premium',usersNoP)