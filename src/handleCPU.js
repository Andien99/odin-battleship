import { player1 } from "./selectShip";

let availableMovesCPU = [];
let rowLocation = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
for (let i = 1; i < 11; i++) {
  for (let j = 0; j < 10; j++) {
    availableMovesCPU.push(i.toString() + rowLocation[j]);
  }
}

function attackPlayer() {
  let randomAttackLocation =
    availableMovesCPU[getRandomNumber(0, availableMovesCPU.length - 1)];
  let coordinateBtn = document.querySelector(
    "#coordinate-" + randomAttackLocation + ".player"
  );
  availableMovesCPU.splice(availableMovesCPU.indexOf(randomAttackLocation), 1);
  randomAttackLocation = [
    randomAttackLocation.slice(0, randomAttackLocation.length - 1),
    randomAttackLocation.charAt(randomAttackLocation.length - 1),
  ];
  player1.gameboard.handleAttack(randomAttackLocation, coordinateBtn);
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export { attackPlayer };
