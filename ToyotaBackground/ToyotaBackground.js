/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class ToyotaBackground extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "798ace6925fd0e802eb4a96d953b4765",
        "./ToyotaBackground/costumes/798ace6925fd0e802eb4a96d953b4765.png",
        { x: -202, y: -130 }
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
    yield* this.glide(1, 19, 21);
  }
}
