/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Words2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Words2/costumes/costume1.svg", {
        x: 35.158383684362775,
        y: -17.458252194566455
      })
    ];

    this.sounds = [new Sound("pop", "./Words2/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenbackdropswitchesto() {
    this.visible = true;
    this.effects.ghost = 0;
    for (let i = 0; i < 2; i++) {
      for (let i = 0; i < 30; i++) {
        this.effects.ghost += 3;
        yield;
      }
      for (let i = 0; i < 30; i++) {
        this.effects.ghost -= 3;
        yield;
      }
      yield;
    }
    for (let i = 0; i < 100; i++) {
      this.effects.ghost += 1;
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }
}
