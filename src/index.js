const { ship } = require("./createShip");
const { gameboard } = require("./createGameboard");
const board = new gameboard();
board.createGameboard();
const testShip1 = new ship(3, 0, false, "vertical");
const testShip2 = new ship(2, 0, false, "horizontal");
board.recieveAttack([1, "A"]);
board.placeShip(testShip1, [7, "E"]);
