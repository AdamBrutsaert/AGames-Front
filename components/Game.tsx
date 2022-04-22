import { FunctionComponent, useEffect } from "react";
import { Application } from "pixi.js";

const application = new Application({
  width: 600,
  height: 600,
  backgroundColor: 0xff00ff,
});

const Game: FunctionComponent = () => {
  useEffect(() => {
    document.getElementById("game")?.appendChild(application.view);
  });
  return <div id="game"></div>;
};

export default Game;
