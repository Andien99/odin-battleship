function createCoordinateBtn(parent, coordinate) {
  let coordinateBtn = document.createElement("button");
  coordinateBtn.setAttribute("class", "coordinateBtn");
  coordinateBtn.setAttribute("id", coordinate);
  parent.appendChild(coordinateBtn);
}

export { createCoordinateBtn };
