import { SquareGameOptions } from "./SquareGame";
import { Container, Graphics, InteractionEvent } from "pixi.js";

type Lines = (number | undefined)[];
type Cells = (number | undefined)[];

class SquareGameGrid extends Container {
  private options: SquareGameOptions;
  private lines: { vertical: Lines[]; horizontal: Lines[] };
  private cells: Cells[];
  private stageWidth: number;
  private stageHeight: number;

  private graphics: Graphics = new Graphics();
  private hoverGraphics: Graphics = new Graphics();

  constructor(
    stageWidth: number,
    stageHeight: number,
    options: SquareGameOptions
  ) {
    super();

    this.options = options;
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;

    this.cells = Array(this.options.rows).fill(
      Array(this.options.columns).fill(undefined)
    );
    this.lines = {
      vertical: Array(this.options.rows).fill(
        Array(this.options.columns - 1).fill(undefined)
      ),
      horizontal: Array(this.options.rows - 1).fill(
        Array(this.options.columns).fill(undefined)
      ),
    };

    this.addChild(this.graphics);
    this.addChild(this.hoverGraphics);

    this.interactive = true;
    this.on("mousemove", this.onMouseMove);
  }

  private drawVerticalLine(
    g: Graphics,
    color: number,
    row: number,
    column: number
  ) {
    g.beginFill(color);
    g.drawRect(
      (column + 1) * this.options.cell_size +
        column * this.options.line_thickness,
      row * (this.options.cell_size + this.options.line_thickness),
      this.options.line_thickness,
      this.options.cell_size
    );
  }

  private drawHorizontalLine(
    g: Graphics,
    color: number,
    row: number,
    column: number
  ) {
    g.beginFill(color);
    g.drawRect(
      column * (this.options.cell_size + this.options.line_thickness),
      (row + 1) * this.options.cell_size + row * this.options.line_thickness,
      this.options.cell_size,
      this.options.line_thickness
    );
  }

  private onMouseMove(event: InteractionEvent) {
    const { x, y } = event.data.getLocalPosition(this);
    this.hoverGraphics.clear();

    // Out of bounds
    if (x < 0 || x > this.stageWidth || y < 0 || y > this.stageHeight) return;

    // The cell where the pointer is
    const cellX = Math.trunc(
      x / (this.options.cell_size + this.options.line_thickness)
    );
    const cellY = Math.trunc(
      y / (this.options.cell_size + this.options.line_thickness)
    );

    // Distance to previous cell
    let prevX =
      x - cellX * (this.options.cell_size + this.options.line_thickness);
    let prevY =
      y - cellY * (this.options.cell_size + this.options.line_thickness);

    // Distance to next cell
    let nextX =
      (cellX + 1) * (this.options.cell_size + this.options.line_thickness) - x;
    let nextY =
      (cellY + 1) * (this.options.cell_size + this.options.line_thickness) - y;

    // If it is a side cell, it makes sure its border side is not selected
    if (cellX == 0) prevX = nextX + 1;
    if (cellX == this.options.columns - 1) nextX = prevX + 1;
    if (cellY == 0) prevY = nextY + 1;
    if (cellY == this.options.rows - 1) nextY = prevY + 1;

    const min = Math.min(prevX, prevY, nextX, nextY);

    if (min > 20) return;

    if (min == prevX) {
      this.drawVerticalLine(this.hoverGraphics, 0xcccccc, cellY, cellX - 1);
    } else if (min == nextX) {
      this.drawVerticalLine(this.hoverGraphics, 0xcccccc, cellY, cellX);
    } else if (min == prevY) {
      this.drawHorizontalLine(this.hoverGraphics, 0xcccccc, cellY - 1, cellX);
    } else {
      this.drawHorizontalLine(this.hoverGraphics, 0xcccccc, cellY, cellX);
    }
  }
}

export default SquareGameGrid;
