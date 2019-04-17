let wWidth = window.innerWidth;
let wHeight = window.innerHeight;

class Contrast extends Phaser.Scene {
  constructor() {
    super({ key: "Contrast", active: true });
  }

  preoload() {}

  create() {
    let contrast = retrieveData().contrast;

    let graphics = this.add.graphics({
      fillStyle: { color: 0x000000, alpha: contrast }
    });
    let rect = new Phaser.Geom.Rectangle(0, 0, wWidth, wHeight);
    graphics.fillRectShape(rect);
  }
}

let config = {
  type: Phaser.AUTO,
  width: wWidth,
  height: wHeight,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      debug: true
    }
  },
  scene: [
    // MenuScene,
    // SPScene,
    // NewGameScene,
    // MPScene,
    // OptionsScene,
    // SkinsScene,
    // CreditsScene,
    // Contrast,
    // EscapeScene,
    // LevelOne,
    // LevelTwo,
    LevelThree
  ]
};

let game = new Phaser.Game(config);
