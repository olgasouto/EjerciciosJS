const element = document.getElementById('huey'); 
const element2 = document.getElementsByName('drone');
const element3 = document.getElementsByTagName('input');
const element4 = document.getElementsByClassName('label-input');
const element5 = document.querySelectorAll('.label-input');
const element6 = document.querySelectorAll('#louie');
const element7 = document.querySelector('.label-input');
const element8 = document.getElementById('huey').parentNode;
const element9 = document.getElementById('first-option').childNodes

//crear el nodo tipo Element
const parrafo=document.createElement('p');
//crear el nodo tipo text
const contenido=document.createTextNode('Este es un nuevo párrafo');
//Añadir el nodo text como hijo del nodo element
parrafo.appendChild(contenido);
//Añadir el nodo Element como hijo de la página
document.body.appendChild(parrafo);

