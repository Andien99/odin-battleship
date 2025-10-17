const { gameboard } = require("./createGameboard");

test("gameboard has a 10x10 grid space", () => {
  const board = new gameboard();
  board.createGameboard();
  expect(board.grid.length) == 10;
  expect(board.grid[0].length) == 10;
  expect(board.grid[2].length) == 10;
  expect(board.grid[4].length) == 10;
  expect(board.grid[6].length) == 10;
  expect(board.grid[7].length) == 10;
  expect(board.grid[9].length) == 10;
});
