import { FunctionComponent, useEffect } from "react";
import SquareGame from "games/SquareGame/SquareGame";
import Player, { BLUE, PURPLE } from "games/common/Player";

let squareGame: SquareGame | undefined;

const Game: FunctionComponent = () => {
  useEffect(() => {
    if (!squareGame) {
      squareGame = new SquareGame([new Player(BLUE), new Player(PURPLE)]);
    }
    if (document.getElementById("squareGame")?.children.length == 0) {
      document.getElementById("squareGame")?.appendChild(squareGame.getView());
    }
  });
  return <div id="squareGame"></div>;
};

export default Game;
