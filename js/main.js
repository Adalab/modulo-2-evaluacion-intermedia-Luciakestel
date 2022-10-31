"use strict";

const selectElement = document.querySelector('.js-select');
const btn = document.querySelector('.js-btn');
const textElement = document.querySelector('.js-text');
const puntuacElement = document.querySelector('.js-puntuaciones');
const boardElement = document.querySelector('.js-board');

const RazaBondadosa = {
    raza1 : 1,
    raza2 : 2,
    raza3 : 3,
    raza4 : 4,
    raza5 : 5
};
const RazaMalvada = {
    raza1 : 2,
    raza2 : 2,
    raza3 : 2,
    raza4 : 3,
    raza5 : 5,
    raza6 : 0
};

function getRandomNumber(max){
    return Math.ceil(Math.random() * max);
}

function asignaRaza() {
    const randonNumber = getRandomNumber(6);
    // console.log(randonNumber);
    let fuerzaMalvada = '';
    if (randonNumber === 1){
        fuerzaMalvada = RazaMalvada.raza1
    } else if (randonNumber === 2){
        fuerzaMalvada = RazaMalvada.raza2
    } else if (randonNumber === 3){
        fuerzaMalvada = RazaMalvada.raza3
    }else if (randonNumber === 4){
        fuerzaMalvada = RazaMalvada.raza4
    } else if (randonNumber === 5) {
        fuerzaMalvada = RazaMalvada.raza5
    } else {
        fuerzaMalvada = RazaMalvada.raza6
    }
    return fuerzaMalvada;
}

function RazaBondadosaValor() {
    const selectValue = selectElement.value;
   let fuerzaBuena =  '';
   if (selectValue === 'Pelosos con fuerza'){
    fuerzaBuena = RazaBondadosa.raza1
} else if (selectValue === 'Sureños buenos con fuerza'){
    fuerzaBuena = RazaBondadosa.raza2
} else if (selectValue === 'Enanos con fuerza'){
    fuerzaBuena = RazaBondadosa.raza3
}else if (selectValue === 'Númenóreanos con fuerza'){
    fuerzaBuena = RazaBondadosa.raza4
} else{
    fuerzaBuena = RazaBondadosa.raza5
} 
return fuerzaBuena;
}
function batalla(){
    const bondadosos = RazaBondadosaValor();
    const malvados = asignaRaza();
    if (bondadosos > malvados) {
        textElement.innerHTML = `Ha ganado el Éjercito del Bien! Enhorabuena`;
    } else if (bondadosos < malvados) {
        textElement.innerHTML = `Ha ganado el Éjercito del Mal! Vuelve a intentarlo`;
    } else if (bondadosos === malvados) {
        textElement.innerHTML = `Empate`;
    }
}

let jugador = 0;
let ordenador = 0;

function contador(){
    const bondadosos = RazaBondadosaValor();
    const malvados = asignaRaza();
        if (bondadosos > malvados){
            jugador++;
         } else if (bondadosos < malvados){
            ordenador++;
    } else {
        jugador;
        ordenador;
    }
  boardElement.innerHTML = `Jugador:${jugador}  Ordenador:${ordenador}`;
}


function handleClick(event) {
event.preventDefault();
batalla();
contador();
}

btn.addEventListener('click', handleClick);

