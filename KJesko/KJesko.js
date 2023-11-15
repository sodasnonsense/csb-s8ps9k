/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class KJesko extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("tempImageYSPgD3", "./KJesko/costumes/tempImageYSPgD3.png", {
        x: -191,
        y: 352
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenbackdropswitchesto() {
    this.visible = true;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenbackdropswitchesto2() {
    this.visible = true;
    yield* this.glide(1, 88, -23);
  }
}
