/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 247.967041015625,
        y: 185.54428100585943
      }),
      new Costume("Level 1", "./Stage/costumes/Level 1.png", { x: 480, y: 359 })
    ];

    this.sounds = [new Sound("Bruh", "./Stage/sounds/Bruh.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];

    this.vars.deggree = 0;
    this.vars.stop = 2;

    this.watchers.deggree = new Watcher({
      label: "Deggree",
      style: "slider",
      visible: false,
      value: () => this.vars.deggree,
      setValue: value => {
        this.vars.deggree = value;
      },
      step: 1,
      min: -359,
      max: 0,
      x: 574,
      y: 174
    });
    this.watchers.stop = new Watcher({
      label: "Stop",
      style: "normal",
      visible: false,
      value: () => this.vars.stop,
      x: 245,
      y: 175
    });
  }

  *whenGreenFlagClicked() {
    this.costume = "backdrop1";
    while (true) {
      yield* this.playSoundUntilDone("Bruh");
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    yield* this.wait(10);
    this.costume = "Level 1";
  }
}
