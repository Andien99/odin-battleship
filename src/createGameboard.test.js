import { gameboard } from "./createGameboard";
import { ship } from "./createShip";
const board = new gameboard();
test("gameboard has a 10x10 grid space", () => {
  board.createGameboard();
  expect(board.grid.length) == 10;
  expect(board.grid[0].length) == 10;
  expect(board.grid[2].length) == 10;
  expect(board.grid[4].length) == 10;
  expect(board.grid[6].length) == 10;
  expect(board.grid[7].length) == 10;
  expect(board.grid[9].length) == 10;
});

test("specific points on the grid can be accessed", () => {
  const testCoordinate = board.find([3, "C"]);
  expect(testCoordinate.coordinate).toStrictEqual([3, "C"]);
});

test("players can place horizontal ships at specific coordinates", () => {
  const testShip = new ship(3, 0, false, "horizontal");
  board.placeShip(testShip, [2, "C"]);
  expect(board.grid[1][2].ship).toStrictEqual(testShip);
  expect(board.grid[1][3].ship).toStrictEqual(testShip);
  expect(board.grid[1][4].ship).toStrictEqual(testShip);
});

test("Error is thrown if ship placement is out of bounds", () => {
  const testShip = new ship(3, 0, false, "horizontal");

  expect(() => board.placeShip(testShip, [2, "I"])).toThrow(
    "This ship placement is out of bounds"
  );
});

test("players can place vertical ships at specific coordinates", () => {
  const testShip = new ship(3, 0, false, "vertical");
  board.placeShip(testShip, [5, "A"]);
  expect(board.grid[4][0].ship).toStrictEqual(testShip);
  expect(board.grid[5][0].ship).toStrictEqual(testShip);
  expect(board.grid[6][0].ship).toStrictEqual(testShip);
});

test("coordinates on the grid can recieve an attack if coordinate contains a ship", () => {
  const board = new gameboard();
  board.createGameboard();
  const testShip = new ship(3, 0, false, "horizontal");
  board.placeShip(testShip, [2, "C"]);
  board.recieveAttack([2, "C"]);
  expect(testShip.hitcount).toBe(1);
});

test("individual ships have a seperate hitcount", () => {
  const board = new gameboard();
  board.createGameboard();
  const testShip1 = new ship(3, 0, false, "vertical");
  const testShip2 = new ship(5, 0, false, "horizontal");
  board.placeShip(testShip1, [1, "A"]);
  board.placeShip(testShip2, [3, "C"]);
  board.recieveAttack([3, "C"]);
  board.recieveAttack([3, "D"]);
  board.recieveAttack([1, "A"]);
  expect(testShip1.hitcount).toBe(1);
  expect(testShip2.hitcount).toBe(2);
});

test("Error is thrown if coordinate has already been hit once", () => {
  board.recieveAttack([2, "D"]);
  expect(() => board.recieveAttack([2, "D"])).toThrow(
    "This coordinate has already been selected"
  );
});

test("Error is thrown if placement already contains ship", () => {
  const testShip1 = new ship(3, 0, false, "vertical");
  const testShip2 = new ship(2, 0, false, "horizontal");
  board.placeShip(testShip1, [7, "E"]);
  expect(() => board.placeShip(testShip2, [7, "E"])).toThrow();
});

test("Hitting multiple parts of the ship from grid increase its hitcount", () => {
  const testShip2 = new ship(4, 0, false, "horizontal");
  board.placeShip(testShip2, [3, "C"]);
  board.recieveAttack([3, "C"]);
  expect(testShip2.hitcount).toBe(1);
  board.recieveAttack([3, "D"]);
  expect(testShip2.hitcount).toBe(2);
  board.recieveAttack([3, "E"]);
  expect(testShip2.hitcount).toBe(3);
});

test("gameboard can keep track of missed attacks", () => {
  const board = new gameboard();
  board.createGameboard();
  expect(board.missedAttacks).toBe(0);
  board.recieveAttack([4, "D"]);
  expect(board.missedAttacks).toBe(1);
});

test("gameboard can report if a ship has sunk", () => {
  const board = new gameboard();
  board.createGameboard();
  const testShip2 = new ship(3, 0, false, "horizontal");
  board.placeShip(testShip2, [3, "C"]);
  board.recieveAttack([3, "C"]);
  board.recieveAttack([3, "D"]);
  expect(board.recieveAttack([3, "E"])).toBe("A ship has sunk!");
  expect(board.sunkedShips).toBe(1);
});

test(`gameboard can tell if all of a player's ship has sunk`, () => {});
