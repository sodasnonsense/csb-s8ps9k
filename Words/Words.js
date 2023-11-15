/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Words extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Words/costumes/costume1.svg", {
        x: 241.1659824726102,
        y: -130.4582494775865
      })
    ];

    this.sounds = [new Sound("pop", "./Words/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
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
}
