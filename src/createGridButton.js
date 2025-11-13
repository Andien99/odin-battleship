import { createElement } from "./createElement";

function createCoordinateBtn(parent, coordinate, playerType = "") {
  // let coordinateBtn = document.createElement("button");
  // coordinateBtn.setAttribute("class", "coordinateBtn");
  // coordinateBtn.setAttribute("id", coordinate);
  // parent.appendChild(coordinateBtn);

  let coordinateBtn = createElement("button", {
    className: "coordinateBtn " + playerType,
    id: "coordinate-" + coordinate,
  });

  parent.appendChild(coordinateBtn);
}

export { createCoordinateBtn };
