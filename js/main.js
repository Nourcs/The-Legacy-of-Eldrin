let wWidth = window.innerWidth;
let wHeight = window.innerHeight;

let config = {
  type: Phaser.AUTO,
  width: wWidth,
  height: wHeight,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 }
    }
  },
  scene: [MenuScene, OptionsScene]
};

let game = new Phaser.Game(config);
