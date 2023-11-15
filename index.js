import {
  Project,
  Sprite
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Wheel from "./Wheel/Wheel.js";
import Spin from "./Spin/Spin.js";
import Words from "./Words/Words.js";
import GWagonDriving from "./GWagonDriving/GWagonDriving.js";
import BackgroundCar from "./BackgroundCar/BackgroundCar.js";
import UrusBackgroundCar from "./UrusBackgroundCar/UrusBackgroundCar.js";
import Words2 from "./Words2/Words2.js";
import BoatTailBackground from "./BoatTailBackground/BoatTailBackground.js";
import KJesko from "./KJesko/KJesko.js";
import KJeskoBackground from "./KJeskoBackground/KJeskoBackground.js";
import ToyotaBackground from "./ToyotaBackground/ToyotaBackground.js";
import RustyCarBackground from "./RustyCarBackground/RustyCarBackground.js";
import GWagonBackground from "./GWagonBackground/GWagonBackground.js";
import Image from "./Image/Image.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Wheel: new Wheel({
    x: -6,
    y: 10,
    direction: 109,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 13
  }),
  Spin: new Spin({
    x: -5.000650036151267,
    y: 113.0015709206989,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 3,
    size: 100,
    visible: true,
    layerOrder: 14
  }),
  Words: new Words({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 2
  }),
  GWagonDriving: new GWagonDriving({
    x: -105.88684636268907,
    y: -5.113903856119894,
    direction: 86,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 6
  }),
  BackgroundCar: new BackgroundCar({
    x: 305,
    y: -156,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 4
  }),
  UrusBackgroundCar: new UrusBackgroundCar({
    x: 35,
    y: 29,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 3
  }),
  Words2: new Words2({
    x: 17.862158980344045,
    y: 52.6688862372519,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 1
  }),
  BoatTailBackground: new BoatTailBackground({
    x: -62,
    y: -42,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 5
  }),
  KJesko: new KJesko({
    x: 88,
    y: -23,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 7
  }),
  KJeskoBackground: new KJeskoBackground({
    x: -185,
    y: -216,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 8
  }),
  ToyotaBackground: new ToyotaBackground({
    x: 19,
    y: 21,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 9
  }),
  RustyCarBackground: new RustyCarBackground({
    x: 77,
    y: -22,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 10
  }),
  GWagonBackground: new GWagonBackground({
    x: 155,
    y: 4,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 11
  }),
  Image: new Image({
    x: -4,
    y: 32,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 12
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
