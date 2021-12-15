"use strict";

const isNumber = function (value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
};

let getNumber = function () {
  let n = Math.floor(Math.random() * 100 + 1);

  let testNumber = function () {
    let userNumber = prompt("Угадай число от 1 до 100.");

    if (userNumber == null) {
      alert("Игра окончена");
    } else if (!isNumber(userNumber)) {
      alert("Введи число!");
      testNumber();
    } else if (userNumber > n) {
      alert("Загаданное число меньше");
      testNumber();
    } else if (userNumber < n) {
      alert("Загаданное число больше");
      testNumber();
    } else if (userNumber == n) {
      let correctAnswer = confirm(
        "Поздравляю, Вы угадали!!! Хотели бы сыграть еще?"
      );
      if (correctAnswer) {
        getNumber();
      }
    }
  };

  testNumber();
};

getNumber();
