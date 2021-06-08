'use strict';

const isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

function savingRandomNumber(){

const hiddenNumber = Math.floor(Math.random()*100);

function game() {

const userData = prompt('Угадай число от 1 до 100');

if(userData === null) {
  alert('Игра окончена');
  } else if(isNumber(userData) === false){
  alert('Введите число');
  game();
  } else if(hiddenNumber === +userData) {
  alert('Поздравляю, Вы угадали');
  } else if(hiddenNumber < +userData) {
  alert('Загаданное число меньше');
  game();
  } else  {
  alert('Загаданное число больше');
  game();
  } 
}
game();
}
savingRandomNumber();