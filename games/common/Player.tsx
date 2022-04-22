export type Color = number;
export type ColorList = { [intensity: number]: Color };

export const PURPLE = {
  500: 0x9b59b6,
  700: 0x8e44ad,
};

export const BLUE = {
  500: 0x3498db,
  700: 0x2980b9,
};

export default class Player {
  colorList: ColorList;

  constructor(colorList: ColorList) {
    this.colorList = colorList;
  }

  getColor(intensity: number): Color {
    return this.colorList[intensity];
  }
}
