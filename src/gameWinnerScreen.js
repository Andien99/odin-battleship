import { createElement } from "./createElement";
import { player1, player2 } from "./selectShipMenu";

class announceWinner {
  constructor(gameboardOwner) {
    this.gameboardOwner = gameboardOwner;
    this.initialise();
  }

  initialise() {
    this.renderScreen();
    this.addEventListner();
  }

  renderScreen() {
    document.querySelector(".turn-screen").style.height = 0 + "%";
    const mainContainer = document.getElementById("winner-screen");
    const winnerTitle = createElement("p", {
      id: "winner-title",
      textContent: this.gameboardOwner + " loses!",
    });
    const restartBtn = createElement("button", {
      className: "restart-btn",
      textContent: "Restart?",
    });
    mainContainer.append(winnerTitle, restartBtn);
  }

  addEventListner() {
    const restartBtn = document.querySelector(".restart-btn");
    const winnerScreen = document.getElementById("winner-screen");
    const selectGamemode = document.getElementById("gamemode");
    restartBtn.addEventListener("click", () => {
      const mainContainer = document.getElementById("main-content");
      while (mainContainer.firstElementChild) {
        mainContainer.firstElementChild.remove();
      }
      while (winnerScreen.firstElementChild) {
        winnerScreen.firstElementChild.remove();
      }
      document
        .getElementById("main-content")
        .appendChild(createElement("div", { className: "turn-screen" }));
      winnerScreen.classList.replace("open", "closed");
      selectGamemode.classList.replace("closed", "open");
    });
  }
}

export { announceWinner };
