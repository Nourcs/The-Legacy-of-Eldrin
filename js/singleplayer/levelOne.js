var player;
var cursors;
let world;
let camera;
var keyObj;
let healthTxt;
let scoreTxt;
let playerX = 2000;
let playerY = 1100;
let score = 0;
let health = 100;
let footsteps;
let coins;

class LevelOne extends Phaser.Scene {
  constructor() {
    super({ key: "LevelOne", active: false });
    this.player;
  }
  preload() {
    this.load.image("Grass", "././assets/game/background/Grass.png");
    this.load.spritesheet("Eldrin", "././assets/sprites/EldrinWalking.png", {
      frameWidth: 29,
      frameHeight: 44,

      spacing: 28.5
    });

    this.load.image("Tree", "././assets/game/background/Tree.png");
    this.load.image("Tree1", "././assets/game/background/Tree1.png");
    this.load.image("Tree2", "././assets/game/background/Tree2.png");
    this.load.image("Tree3", "././assets/game/background/Tree3.png");
    this.load.image("Tree4", "././assets/game/background/Tree4.png");
    this.load.image("House", "././assets/game/background/House.png");
    this.load.image("House1", "././assets/game/background/House1.png");
    this.load.image("House2", "././assets/game/background/House2.png");
    this.load.image("House3", "././assets/game/background/House3.png");
    this.load.image("House4", "././assets/game/background/House4.png");
    this.load.image("House5", "././assets/game/background/House5.png");
    this.load.image("House6", "././assets/game/background/House6.png");
    this.load.image("Fence", "././assets/game/background/Fence.png");
    this.load.image("Fence1", "././assets/game/background/Fence1.png");
    this.load.image("Fence2", "././assets/game/background/Fence2.png");
    this.load.image("Fence3", "././assets/game/background/Fence3.png");
    this.load.image("Fence4", "././assets/game/background/Fence4.png");
    this.load.image("Fence5", "././assets/game/background/Fence5.png");
    this.load.image("Bushes", "././assets/game/background/Bushes.png");
    this.load.image("Bushes1", "././assets/game/background/Bushes1.png");
    this.load.image("RedTree", "././assets/game/background/RedTree.png");
    this.load.image("item", "././assets/game/background/item.png");

    this.load.image("WaterLeft", "././assets/game/background/WaterLeft.png");
    for (let i = 1; i < 4; i++) {
      this.load.image(
        `monster${i}`,
        `././assets/game/background/Monster${i}.png`
      );
    }
    this.load.image(
      "WaterBottom",
      "././assets/game/background/WaterBottom.png"
    );

    this.load.audio(
      "soundeffect1",
      "././assets/game/background/SoundEffect1.wav"
    );
    this.load.audio("Footsteps", "././assets/game/background/Footsteps.wav");
    this.load.audio("Coins", "././assets/game/background/Coins.wav");
  }

  create() {
    settings = retrieveData();
    settings.continue.levelOne = true;
    settings.continue.levelTwo = false;
    settings.continue.playerX = playerX;
    settings.continue.playerY = playerY;
    settings.continue.score = score;
    settings.continue.health = health;
    localStorage.setItem("settings", JSON.stringify(settings));
    if (newGamer) {
      console.log("New GMETr");
      playerX = 2000;
      playerY = 1100;
      score = 0;
      health = 100;
    } else if (continuer) {
      console.log("Continerer");
      playerX = settings.continue.playerX;
      playerY = settings.continue.playerY;
      score = settings.continue.score;
      health = settings.continue.health;
    }
    let soundEffectOne = this.sound.add("soundeffect1");
    footsteps = this.sound.add("Footsteps");
    coins = this.sound.add("Coins");

    footsteps.play({
      volume: 0.5,
      loop: true
    });
    soundEffectOne.play({
      volume: 1,
      loop: true
    });
    camera = this.cameras.main;
    camera.setViewport(0, 0, window.innerWidth, window.innerHeight);
    this.add.tileSprite(0, 0, 3000, 1500, "Grass").setOrigin(0, 0);

    let water = this.physics.add.staticGroup();
    let trees = this.physics.add.staticGroup();
    let hiddenItems = [];
    water
      .create(0, 0, "WaterLeft")
      .setOrigin(0, 0)
      .refreshBody();
    water
      .create(213, 1318, "WaterBottom")
      .setOrigin(0, 0)
      .refreshBody();
    trees
      .create(2855, 0, "Tree")
      .setOrigin(0, 0)
      .refreshBody();
    trees
      .create(1172, 0, "Tree1")
      .setOrigin(0, 0)
      .refreshBody();
    trees
      .create(1172, 311, "Tree2")
      .setOrigin(0, 0)
      .refreshBody();
    trees
      .create(2283, 1153, "Fence1")
      .setOrigin(0, 0)
      .refreshBody();
    trees
      .create(2260, 772, "Fence")
      .setOrigin(0, 0)
      .refreshBody();
    trees
      .create(2676, 772, "Fence")
      .setOrigin(0, 0)
      .refreshBody();
    trees
      .create(2260, 772, "Fence3")
      .setOrigin(0, 0)
      .refreshBody();
    trees
      .create(2580, 1160, "Fence4")
      .setOrigin(0, 0)
      .refreshBody();
    trees
      .create(2710, 1163, "Fence5")
      .setOrigin(0, 0)
      .refreshBody();
    trees
      .create(2323, 785, "House")
      .setOrigin(0, 0)
      .refreshBody();
    trees
      .create(2546, 1037, "House2")
      .setOrigin(0, 0)
      .refreshBody();
    trees
      .create(2413.2, 1037, "House3")
      .setOrigin(0, 0)
      .refreshBody();
    trees
      .create(2451, 1037, "House4")
      .setOrigin(0, 0)
      .refreshBody();
    trees
      .create(2525.1, 1037, "House5")
      .setOrigin(0, 0)
      .refreshBody();
    trees
      .create(2581, 1037, "House6")
      .setOrigin(0, 0)
      .refreshBody();
    trees
      .create(1725, 400, "Bushes")
      .setOrigin(0, 0)
      .refreshBody();
    trees
      .create(1725, 370, "Bushes1")
      .setOrigin(0, 0)
      .refreshBody();
    trees
      .create(2815, 353, "RedTree")
      .setOrigin(0, 0)
      .refreshBody();

    this.add.image(2499, 1097, "House1");
    this.physics.world.setBounds(0, 0, 3000, 1500);

    player = this.physics.add.sprite(playerX, playerY, "Eldrin");
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
      frameRate: 15,
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
      frameRate: 15,
      repeat: -1
    });
    this.physics.add.collider(player, water);
    this.physics.add.collider(player, trees);

    healthTxt = this.add.text(30, 30, `Health : ${health}`, {
      fontFamily: "Chelsea Market",
      fontSize: 25
    });
    scoreTxt = this.add.text(30, 60, `Score : ${score}`, {
      fontFamily: "Chelsea Market",
      fontSize: 25
    });
    let initPos = 465;
    for (let i = 0; i < 10; i++) {
      hiddenItems.push([
        this.physics.add
          .staticImage(1750, initPos, "item")
          .setOrigin(0, 0)
          .refreshBody(),
        { state: true, clicked: false }
      ]);
      this.physics.add.overlap(hiddenItems[i][0], player, e => {
        if (!hiddenItems[i][1].state) {
          this.input.keyboard.on(
            "keyup",
            function(k) {
              if (k.key === "e" && hiddenItems[i][1].clicked === false) {
                e.destroy();
                coins.play({
                  volume: 0.5,
                  loop: false
                });
                score += 10;
                console.log(score);
                scoreTxt.destroy();
                scoreTxt = this.add.text(30, 60, `Score : ${score}`, {
                  fontFamily: "Chelsea Market",
                  fontSize: 25
                });
                scoreTxt.setScrollFactor(0);
                hiddenItems[i][1].clicked = true;
              }
            },
            this
          );
        }
        hiddenItems[i][1].state = false;
      });
      initPos += 95 - i;
    }
    console.log(hiddenItems);

    healthTxt.setScrollFactor(0);
    scoreTxt.setScrollFactor(0);
  }

  update() {
    cursors = this.input.keyboard.createCursorKeys();
    keyObj = this.input.keyboard.addKey("E");

    player.setVelocityY(0);
    player.setVelocityX(0);

    if (cursors.left.isDown) {
      player.setVelocityX(-100);
      player.anims.play("left", true);
      footsteps.resume();
    } else if (cursors.right.isDown) {
      player.setVelocityX(100);

      player.anims.play("right", true);
      footsteps.resume();
    } else if (cursors.up.isDown) {
      player.anims.play("up", true);
      player.setVelocityY(-100);
      footsteps.resume();
    } else if (cursors.down.isDown) {
      player.anims.play("down", true);
      player.setVelocityY(100);
      footsteps.resume();
    } else {
      player.anims.stop();
      footsteps.pause();
    }
    playerX = player.x;
    playerY = player.y;
    if (score === 100) {
      levelOne = false;
      levelTwo = true;
      footsteps.pause();
      settings.continue.levelOne = false;
      settings.continue.levelTwo = true;
      settings.continue.playerX = playerX;
      settings.continue.playerY = playerY;
      settings.continue.score = score;
      settings.continue.health = health;
      localStorage.setItem("settings", JSON.stringify(settings));
      this.scene.start("NewGameScene");
    }
    // player.anims.play("up");
  }
}
