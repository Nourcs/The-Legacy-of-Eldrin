var player;
var cursors;
let world;
let camera;

class LevelOne extends Phaser.Scene {
  constructor() {
    super({ key: "LevelOne", active: true });
    this.playerX = 0;
    this.playerY = 0;
    this.player;
  }
  preload() {
    this.load.image("MainMap", "././assets/game/background/mainmap.png");
    this.load.image("Eldrin", "././assets/skins/eldrin.png");
  }

  create() {
    camera = this.cameras.main;
    camera.setViewport(0, 0, window.innerWidth, window.innerHeight);
    this.add.tileSprite(0, 0, 1920, 1920, "MainMap").setOrigin(0, 0);
    this.physics.world.setBounds(0, 0, 1920, 1920);
    player = this.physics.add.image(750, 807, "Eldrin").setScale(0.75);
    player.setCollideWorldBounds(true);
    camera.startFollow(player);
    camera.setBounds(0, 0, 1920, 1920);
  }

  update() {
    cursors = this.input.keyboard.createCursorKeys();

    player.setVelocityY(0);
    player.setVelocityX(0);

    if (cursors.left.isDown) {
      player.setVelocityX(-260);
    } else if (cursors.right.isDown) {
      player.setVelocityX(260);
    }
    if (cursors.up.isDown) {
      player.setVelocityY(-260);
    } else if (cursors.down.isDown) {
      player.setVelocityY(260);
    }
  }
}
