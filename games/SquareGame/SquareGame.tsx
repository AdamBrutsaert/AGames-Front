import Player from "games/common/Player";
import { Application, InteractionEvent, Point } from "pixi.js";
import SquareGameGrid from "./SquareGameGrid";

export type SquareGameOptions = {
  rows: number;
  columns: number;
  cell_size: number;
  line_thickness: number;
};

class SquareGame {
  private players: Player[];
  private app: Application;

  constructor(
    players: Player[],
    options: SquareGameOptions = {
      rows: 5,
      columns: 5,
      cell_size: 100,
      line_thickness: 4,
    }
  ) {
    this.players = players;

    const width =
      options.columns * options.cell_size +
      (options.columns - 1) * options.line_thickness;
    const height =
      options.rows * options.cell_size +
      (options.rows - 1) * options.line_thickness;

    this.app = new Application({
      width: width,
      height: height,
      backgroundColor: 0x272b2f,
    });
    this.app.stage.interactive = true;
    this.app.stage.addChild(new SquareGameGrid(width, height, options));
  }

  getView(): HTMLCanvasElement {
    return this.app.view;
  }
}

export default SquareGame;
