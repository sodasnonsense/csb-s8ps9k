/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Wheel extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Colors", "./Wheel/costumes/Colors.svg", {
        x: 119.25,
        y: 119
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "space" },
        this.whenKeySpacePressed
      ),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "space" },
        this.whenKeySpacePressed2
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = true;
    this.direction = this.random(359, 90);
    this.stage.watchers.stop.visible = false;
    this.stage.watchers.deggree.visible = false;
    this.stage.vars.deggree = 20;
    this.stage.vars.stop = 1;
  }

  *whenKeySpacePressed() {
    while (!(this.toNumber(this.stage.vars.stop) === 2)) {
      this.direction += this.toNumber(this.stage.vars.deggree);
      yield;
    }
  }

  *whenKeySpacePressed2() {
    this.stage.vars.stop = 1;
    this.stage.vars.deggree = 20;
    for (let i = 0; i < 20; i++) {
      this.stage.vars.deggree++;
      yield;
    }
    this.stage.vars.deggree = 20;
    yield* this.wait(3);
    while (!(this.toNumber(this.stage.vars.deggree) === 0)) {
      this.stage.vars.deggree--;
      yield;
    }
    this.stage.vars.stop = 2;
  }

  *whenbackdropswitchesto() {
    this.visible = false;
  }
}
