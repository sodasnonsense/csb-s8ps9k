/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class BoatTailBackground extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "tempImage1HpoAs",
        "./BoatTailBackground/costumes/tempImage1HpoAs.png",
        { x: -74, y: -13 }
      )
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenbackdropswitchesto() {
    this.visible = true;
    yield* this.glide(1, -62, -42);
  }
}
