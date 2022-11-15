'use strict';

const selectElement = document.querySelector('.js-select');
const btn = document.querySelector('.js-btn');
const textElement = document.querySelector('.js-text');
const puntuacElement = document.querySelector('.js-puntuaciones');
const boardElement = document.querySelector('.js-board');
const btnNewGame = document.querySelector('.js_new_game');

const kindRace = {
  race1: 1,
  race2: 2,
  race3: 3,
  race4: 4,
  race5: 5,
};
const evilRace = {
  race1: 2,
  race2: 2,
  race3: 2,
  race4: 3,
  race5: 5,
};

let player = 0;
let pc = 0;
let moves = 0;

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function assignRace() {
  const randonNumber = getRandomNumber(5);
  let strengthEvil = 0;
  if (randonNumber === 1) {
    strengthEvil = evilRace.race1;
  } else if (randonNumber === 2) {
    strengthEvil = evilRace.race2;
  } else if (randonNumber === 3) {
    strengthEvil = evilRace.race3;
  } else if (randonNumber === 4) {
    strengthEvil = evilRace.race4;
  } else {
    strengthEvil = evilRace.race5;
  }
  return strengthEvil;
}

function kindRaceValue() {
  const selectValue = selectElement.value;
  let strengthKind = '';
  if (selectValue === 'Pelosos con fuerza') {
    strengthKind = kindRace.race1;
  } else if (selectValue === 'Sureños buenos con fuerza') {
    strengthKind = kindRace.race2;
  } else if (selectValue === 'Enanos con fuerza') {
    strengthKind = kindRace.race3;
  } else if (selectValue === 'Númenóreanos con fuerza') {
    strengthKind = kindRace.race4;
  } else {
    strengthKind = kindRace.race5;
  }
  return strengthKind;
}
function battle() {
  const kind = kindRaceValue();
  const evil = assignRace();
  if (kind > evil) {
    textElement.innerHTML = `Ha ganado el Éjercito del Bien! Enhorabuena`;
    player++;
  } else if (kind < evil) {
    textElement.innerHTML = `Ha ganado el Éjercito del Mal! Vuelve a intentarlo`;
    pc++;
  } else if (kind === evil) {
    textElement.innerHTML = `Empate`;
  }
  boardElement.innerHTML = `Jugador:${player}  Ordenador:${pc}`;
}



function counter() {
  moves++;
  if (moves === 10){
    btn.classList.add('collapse');
    btnNewGame.classList.remove('collapse');
  } 
  if (player > pc) {
    textElement.innerHTML = 'Has ganado el juego!';
  } else if (player < pc) {
    textElement.innerHTML = 'El ordenador ha ganado el juego!';
  } else {
    textElement.innerHTML = 'Empate!';
  }
  
}

function newGame(event){
    event.preventDefault();
    btn.classList.remove('collapse');
    btnNewGame.classList.add('collapse');
    pc = 0;
    player = 0;
    moves = 0;
    boardElement.innerHTML = `Jugador:${player}  Ordenador:${pc}`;
    textElement.innerHTML = 'Comienza la batalla!';
}

function handleClick(event) {
  event.preventDefault();
  battle();
  counter();
}

btn.addEventListener('click', handleClick);
btnNewGame.addEventListener(('click'), newGame);
