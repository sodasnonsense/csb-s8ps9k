/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class GWagonDriving extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./GWagonDriving/costumes/costume1.png", {
        x: 147,
        y: 72
      })
    ];

    this.sounds = [new Sound("pop", "./GWagonDriving/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenbackdropswitchesto() {
    this.direction = 90;
    this.goto(-201, 24);
    this.visible = true;
  }

  *whenbackdropswitchesto2() {
    while (true) {
      if (this.keyPressed("up arrow")) {
        this.move(5);
      }
      if (this.keyPressed("down arrow")) {
        this.move(-5);
      }
      if (this.keyPressed("right arrow")) {
        this.direction += 4;
      }
      if (this.keyPressed("left arrow")) {
        this.direction -= 4;
      }
      yield;
    }
  }

  *whenbackdropswitchesto3() {
    while (true) {
      if (this.touching(Color.rgb(189, 155, 57))) {
        this.direction = 90;
        this.goto(-201, 24);
      }
      yield;
    }
  }

  *whenbackdropswitchesto4() {
    while (true) {
      if (this.touching(Color.rgb(225, 135, 69))) {
        this.direction = 90;
        this.goto(-201, 24);
      }
      yield;
    }
  }

  *whenbackdropswitchesto5() {
    while (true) {
      if (this.touching(Color.rgb(155, 105, 46))) {
        this.direction = 90;
        this.goto(-201, 24);
      }
      yield;
    }
  }

  *whenbackdropswitchesto6() {
    while (true) {
      if (this.touching(Color.rgb(88, 112, 151))) {
        this.direction = 90;
        this.goto(-201, 24);
      }
      yield;
    }
  }

  *whenbackdropswitchesto7() {
    while (true) {
      if (this.touching(Color.rgb(108, 253, 170))) {
        this.direction = 90;
        this.goto(-201, 24);
      }
      yield;
    }
  }

  *whenbackdropswitchesto8() {
    while (true) {
      if (this.touching(Color.rgb(160, 156, 144))) {
        this.direction = 90;
        this.goto(-201, 24);
      }
      yield;
    }
  }

  *whenbackdropswitchesto9() {
    while (true) {
      if (this.touching(Color.rgb(6, 17, 20))) {
        this.direction = 90;
        this.goto(-201, 24);
      }
      yield;
    }
  }

  *whenbackdropswitchesto10() {
    while (true) {
      if (this.touching(Color.rgb(49, 96, 166))) {
        this.direction = 90;
        this.goto(-201, 24);
      }
      yield;
    }
  }

  *whenbackdropswitchesto11() {
    while (true) {
      if (this.touching(Color.rgb(255, 0, 247))) {
        0;
      }
      yield;
    }
  }
}
