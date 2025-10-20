const { ship } = require("./createShip");
const { gameboard } = require("./createGameboard");
const newShip = new ship(4, 0, false);
const newgameboard = new gameboard(0, 0, 0, 0);
newgameboard.createGameboard();
const thisCoordinate = newgameboard.find([3, "A"]);
console.log(thisCoordinate.coordinate);
