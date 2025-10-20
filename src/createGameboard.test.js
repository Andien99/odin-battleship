import { gameboard } from "./createGameboard";
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
