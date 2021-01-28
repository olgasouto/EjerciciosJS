function saveData () {
    alert('Se han guardado sus datos')
};
  

const inputName = document.querySelector(".name");
  
function changeColorFocus() {
  inputName.style.backgroundColor ='#fff600';
};
  
function changeColorNoFocus() {
 inputName.style.backgroundColor ='#9900FF';
};
  
const inputRandom = document.querySelector('.random');

function checkLetter(event){
   const currentLetter = event.which;
   if (currentLetter === 97 || currentLetter === 101 || currentLetter === 111 || currentLetter === 117) {
    inputRandom.style.color = '#a8323e';
   }else {
    inputRandom.style.color ='#32a836';
   }
};