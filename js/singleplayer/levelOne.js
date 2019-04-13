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
    this.load.spritesheet("Eldrin", "././assets/sprites/EldrinWalking.png", {
      frameWidth: 30,
      frameHeight: 49,
      // startFrame: startFrame,
      // endFrame: endFrame,
      // margin: margin,
      spacing: 34
    });
  }

  create() {
    camera = this.cameras.main;
    camera.setViewport(0, 0, window.innerWidth, window.innerHeight);
    this.add.tileSprite(0, 0, 3000, 1500, "MainMap").setOrigin(0, 0);

    this.physics.world.setBounds(0, 0, 3000, 1500);
    player = this.physics.add.sprite(0, 0, "Eldrin");
    player.setCollideWorldBounds(true);
    camera.startFollow(player);
    camera.setBounds(0, 0, 3000, 1500);

    this.anims.create({
      key: "up",
      frames: this.anims.generateFrameNumbers("Eldrin", { start: 0, end: 8 }),
      frameRate: 15,
      repeat: -1
    });
    this.anims.create({
      key: "left",
      frames: this.anims.generateFrameNumbers("Eldrin", { start: 9, end: 17 }),
      frameRate: 10,
      repeat: -1
    });
    this.anims.create({
      key: "down",
      frames: this.anims.generateFrameNumbers("Eldrin", { start: 18, end: 26 }),
      frameRate: 15,
      repeat: -1
    });
    this.anims.create({
      key: "right",
      frames: this.anims.generateFrameNumbers("Eldrin", { start: 27, end: 35 }),
      frameRate: 10,
      repeat: -1
    });
  }

  update() {
    cursors = this.input.keyboard.createCursorKeys();

    player.setVelocityY(0);
    player.setVelocityX(0);

    if (cursors.left.isDown) {
      player.setVelocityX(-100);
      player.anims.play("left", true);
    } else if (cursors.right.isDown) {
      player.setVelocityX(100);
      player.anims.play("right", true);
    } else if (cursors.up.isDown) {
      player.anims.play("up", true);
      player.setVelocityY(-100);
    } else if (cursors.down.isDown) {
      player.anims.play("down", true);
      player.setVelocityY(100);
    } else {
      player.anims.stop();
    }

    // player.anims.play("up");
  }
}
