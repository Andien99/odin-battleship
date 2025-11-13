import { player1 } from "./selectShip";

function attackPlayer() {
  let randomAttackLocation = getRandomCoordinate().join("");
  let coordinateBtn = document.querySelector(
    "#coordinate-" + randomAttackLocation + ".player"
  );
  player1.gameboard.handleAttack(randomAttackLocation, coordinateBtn);
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomCoordinate() {
  let randomY = getRandomNumber(1, 9);

  let randomX = getIndexofLetter(getRandomNumber(0, 9));
  let newCoordinate = [randomY, randomX];
  return newCoordinate;
}

function getIndexofLetter(index) {
  let rowLocation = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  return rowLocation[index];
}

export { attackPlayer };
