class scoreboard {
  constructor() {
    this.player1ship = null;
    this.player2ship = null;
    this.createScoreboard();
  }

  createScoreboard() {
    const mainContent = document.getElementById("main-content");
    const middleContainer = document.createElement("div");
    const scoreboardContent = document.createElement("div");
    const scoreboardTitle = document.createElement("div");
    mainContent.appendChild(middleContainer);
    middleContainer.appendChild(scoreboardContent);
    scoreboardContent.appendChild(scoreboardTitle);
    for (let i = 0; i < 4; i++) {
      let shipContainer = document.createElement("div");
      shipContainer.classList.add("ship-container");
      scoreboardContent.appendChild(shipContainer);
    }
    scoreboardContent.classList.add("scoreboard-content");
    scoreboardTitle.classList.add("scoreboard-title");
    middleContainer.setAttribute("id", "middle-container");
    scoreboardTitle.textContent = "P2 Ships";
    this.createMovementLog(middleContainer);
  }

  createMovementLog(parent) {
    const movementLog = document.createElement("div");
    parent.appendChild(movementLog);
    movementLog.classList.add("movement-log");
  }
}

export { scoreboard };
