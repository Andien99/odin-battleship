const { ship } = require("./createShip");
const { gameboard } = require("./createGameboard");
const newShip = new ship(3, 0, false, "horizontal");
const newgameboard = new gameboard(0, 0, 0, 0);
newgameboard.createGameboard();
const thisCoordinate = newgameboard.find([3, "A"]);
console.log(thisCoordinate.coordinate);

newgameboard.placeShip(newShip, [2, "C"]);
