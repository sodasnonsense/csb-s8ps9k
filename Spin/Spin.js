/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Spin extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Spin/costumes/costume1.svg", {
        x: 19.74176025390625,
        y: 61.338179647922516
      }),
      new Costume("costume2", "./Spin/costumes/costume2.svg", {
        x: 19.74176025390625,
        y: 61.338179647922516
      }),
      new Costume("costume3", "./Spin/costumes/costume3.svg", {
        x: 19.74176025390625,
        y: 61.338179647922516
      }),
      new Costume("costume4", "./Spin/costumes/costume4.svg", {
        x: 19.74176025390625,
        y: 61.338179647922516
      }),
      new Costume("costume5", "./Spin/costumes/costume5.svg", {
        x: 19.74176025390625,
        y: 61.338179647922516
      }),
      new Costume("costume6", "./Spin/costumes/costume6.svg", {
        x: 19.74176025390625,
        y: 61.338179647922516
      }),
      new Costume("costume7", "./Spin/costumes/costume7.svg", {
        x: 19.74176,
        y: 61.338179999999994
      }),
      new Costume("G-wagon", "./Spin/costumes/G-wagon.svg", { x: 73.5, y: 36 }),
      new Costume("Rusty Nissan", "./Spin/costumes/Rusty Nissan.svg", {
        x: 26.846330239525457,
        y: 58.44192233120677
      })
    ];

    this.sounds = [new Sound("pop", "./Spin/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = true;
    while (true) {
      if (this.touching(Color.rgb(227, 6, 19))) {
        this.costume = "costume1";
      }
      if (this.touching(Color.rgb(150, 27, 129))) {
        this.costume = "costume2";
      }
      if (this.touching(Color.rgb(103, 35, 130))) {
        this.costume = "costume3";
      }
      if (this.touching(Color.rgb(53, 170, 225))) {
        this.costume = "costume4";
      }
      if (this.touching(Color.rgb(59, 170, 53))) {
        this.costume = "costume5";
      }
      if (this.touching(Color.rgb(252, 235, 14))) {
        this.costume = "costume6";
      }
      if (this.touching(Color.rgb(243, 146, 0))) {
        this.costume = "costume7";
      }
      yield;
    }
  }

  *whenbackdropswitchesto() {
    this.visible = false;
  }

  *whenGreenFlagClicked2() {
    while (true) {
      null;
      yield;
    }
  }
}
