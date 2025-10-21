import { ship } from "./createShip";

test("ship class can create a ship of specific parameters", () => {
  const test = new ship(4, 0, false);
  expect(test.length).toBe(4);
  expect(test.hitcount).toBe(0);
  expect(test.sunk).toBe(false);
});

test("hit() will increase ship hitcount", () => {
  const test = new ship(4, 0, false);
  test.hit();
  expect(test.hitcount).toBe(1);
});

test("ship will sink if hitcount exceeds length", () => {
  const test = new ship(2, 0, false);
  test.hit();
  test.hit();
  test.hit();
  test.hit();
  test.isSunk();
  expect(test.sunk).toBe(true);
});

test("ship orientation will be horizontal by default", () => {
  const test = new ship(2, 0, false, "horizontal");
  expect(test.orientation).toBe("horizontal");
});

test("ship orientation can be oriented vertically", () => {
  const test = new ship(2, 2, false, "vertical");
  expect(test.orientation).toBe("vertical");
});
