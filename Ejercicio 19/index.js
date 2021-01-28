document.querySelector(".save").addEventListener("click",saveData);

function saveData () {
    alert('Se han guardado sus datos')
};

const inputName=document.querySelector(".name")
inputName.addEventListener('focus',changeColorFocus);
function changeColorFocus (){
    inputName.style.backgroundColor= '#fff728';
};
inputName.addEventListener('focusout',changeColorNoFocus);
function changeColorNoFocus(){
    inputName.style.backgroundColor='#9900FF';
};
const inputRandom=document.querySelector(".random");

inputRandom.addEventListener('keypress',checkletter);
function checkletter(event){
    const currentLetter=event.which;
    if(currentLetter==97 || currentLetter==101 || currentLetter==105 || currentLetter==111 || currentLetter==117 ){
      inputRandom.style.color='#a8323e';
    } else {
      inputRandom.style.color='#32a836'
    }
};
