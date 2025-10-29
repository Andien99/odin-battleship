const gameboard = document.getElementById("player-1");
function createCoordinateBtn(coordinate) {
  let coordinateBtn = document.createElement("button");
  coordinateBtn.setAttribute("class", "coordinateBtn");
  coordinateBtn.setAttribute("id", coordinate);
  gameboard.appendChild(coordinateBtn);
}

export { createCoordinateBtn };
