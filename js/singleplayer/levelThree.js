status = false;
left = false;
right = false;
up = false;
down = false;
score = 0;
health = 100;
let inputOneStatus = false;
let inputOneText = "";
class LevelThree extends Phaser.Scene {
  constructor() {
    super({ key: "LevelThree", active: false });
    this.player;
  }
  preload() {
    this.load.image(
      "Background",
      "././assets/options/background/background.jpg"
    );

    this.load.image("Grass", "././assets/game/background/Grass.png");
    this.load.spritesheet("Eldrin", "././assets/sprites/EldrinWalking.png", {
      frameWidth: 29,
      frameHeight: 44,
      spacing: 28.5
    });
    this.load.spritesheet(
      "EldrinAttackUp",
      "././assets/sprites/EldrinAttackUp.png",
      {
        frameWidth: 45,
        frameHeight: 45,
        spacing: 127
      }
    );
    this.load.spritesheet(
      "EldrinAttackLeft",
      "././assets/sprites/EldrinAttackLeft.png",
      {
        frameWidth: 45,
        frameHeight: 44,
        spacing: 127
      }
    );
    this.load.spritesheet(
      "EldrinAttackDown",
      "././assets/sprites/EldrinAttackDown.png",
      {
        frameWidth: 45,
        frameHeight: 44,
        spacing: 127
      }
    );
    this.load.spritesheet(
      "EldrinAttackRight",
      "././assets/sprites/EldrinAttackRight.png",
      {
        frameWidth: 45,
        frameHeight: 44,
        spacing: 127
      }
    );
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
    this.load.image("item", "././assets/game/background/Item.png");
    this.load.image("chest", "././assets/game/background/chest.png");
    for (let i = 1; i < 4; i++) {
      this.load.image(
        `monster${i}`,
        `././assets/game/background/Monster${i}.png`
      );
    }
    for (let i = 1; i < 6; i++) {
      this.load.image(`path${i}`, `././assets/game/background/path${i}.png`);
    }
    this.load.image("WaterLeft", "././assets/game/background/WaterLeft.png");

    this.load.image(
      "WaterBottom",
      "././assets/game/background/WaterBottom.png"
    );
    this.load.audio("Footsteps", "././assets/game/background/Footsteps.wav");
    this.load.audio("Scream", "././assets/game/background/Scream.wav");
    this.load.audio("Coins", "././assets/game/background/Coins.wav");
    this.load.audio("Sword", "././assets/game/background/Sword.wav");
  }

  create() {
    settings = retrieveData();
    if (continuer) {
      playerX = settings.continue.playerX;
      playerY = settings.continue.playerY;
      score = settings.continue.score;
      health = settings.continue.health;
    }
    camera = this.cameras.main;
    camera.setViewport(0, 0, window.innerWidth, window.innerHeight);
    scream = this.sound.add("Scream");
    coins = this.sound.add("Coins");
    sword = this.sound.add("Sword");

    footsteps = this.sound.add("Footsteps");
    footsteps.play({
      volume: 0.5,
      loop: true
    });
    sword.play({
      volume: 0.5,
      loop: true
    });
    this.add.tileSprite(0, 0, 3000, 1500, "Grass").setOrigin(0, 0);
    let _this = this;
    let water = this.physics.add.staticGroup();
    let trees = this.physics.add.staticGroup();
    path = this.physics.add.staticGroup();
    path
      .create(2828, 240, "path1")
      .setOrigin(0, 0)
      .refreshBody();

    path
      .create(2728, 233, "path2")
      .setOrigin(0, 0)
      .refreshBody();
    path
      .create(2728, 240, "path5")
      .setOrigin(0, 0)
      .refreshBody();
    path
      .create(2585, 289, "path4")
      .setOrigin(0, 0)
      .refreshBody();
    path
      .create(2578, 240, "path5")
      .setOrigin(0, 0)
      .refreshBody();
    path
      .create(2435, 240, "path4")
      .setOrigin(0, 0)
      .refreshBody();
    path
      .create(2430, 240, "path5")
      .setOrigin(0, 0)
      .refreshBody();
    path
      .create(2430, 295, "path5")
      .setOrigin(0, 0)
      .refreshBody();
    path
      .create(2287, 345, "path4")
      .setOrigin(0, 0)
      .refreshBody();
    path
      .create(2287, 240, "path1")
      .setOrigin(0, 0)
      .setScale(0.75)
      .refreshBody();
    path
      .create(2145, 240, "path3")
      .setOrigin(0, 0)
      .refreshBody();
    path
      .create(2003, 240, "path3")
      .setOrigin(0, 0)
      .refreshBody();

    path
      .create(1997, 240, "path5")
      .setOrigin(0, 0)
      .refreshBody();

    path
      .create(1855, 290, "path3")
      .setOrigin(0, 0)
      .refreshBody();

    path
      .create(1855, 235, "path5")
      .setOrigin(0, 0)
      .refreshBody();

    path
      .create(1715, 235, "path3")
      .setOrigin(0, 0)
      .refreshBody();

    path
      .create(1580, 235, "path3")
      .setOrigin(0, 0)
      .refreshBody();
    let redTree = this.physics.add
      .staticImage(2815, 353, "RedTree")
      .setOrigin(0, 0)
      .refreshBody();

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
      .create(290, 0, "Tree3")
      .setOrigin(0, 0)
      .refreshBody();
    trees
      .create(300, 1110, "Tree4")
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

    this.add.image(2499, 1097, "House1");
    this.physics.world.setBounds(0, 0, 3000, 1500);
    let monsters = [];
    monsters.push([
      this.physics.add
        .staticImage(1200, 235, "monster3")
        .setOrigin(0, 0)
        .refreshBody(),
      false,
      0
    ]);
    monsters.push([
      this.physics.add
        .staticImage(300, 1000, "monster3")
        .setOrigin(0, 0)
        .refreshBody(),
      false,
      0
    ]);
    monsters.push([
      this.physics.add
        .staticImage(1000, 1270, "monster1")
        .setOrigin(0, 0)
        .refreshBody(),
      false,
      0
    ]);
    let chestOne = this.physics.add
      .staticImage(240, 5, "chest")
      .setOrigin(0, 0)
      .setScale(0.7)
      .refreshBody();

    let chestTwo = this.physics.add
      .staticImage(1130, 1280, "chest")
      .setOrigin(0, 0)
      .setScale(0.7)
      .refreshBody();

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
    this.anims.create({
      key: "upAttack",
      frames: this.anims.generateFrameNumbers("EldrinAttackUp", {
        start: 0,
        end: 5
      }),
      frameRate: 15,
      repeat: -1
    });
    this.anims.create({
      key: "leftAttack",
      frames: this.anims.generateFrameNumbers("EldrinAttackLeft", {
        start: 0,
        end: 5
      }),
      frameRate: 15,
      repeat: -1
    });
    this.anims.create({
      key: "downAttack",
      frames: this.anims.generateFrameNumbers("EldrinAttackDown", {
        start: 0,
        end: 5
      }),
      frameRate: 15,
      repeat: -1
    });
    this.anims.create({
      key: "rightAttack",
      frames: this.anims.generateFrameNumbers("EldrinAttackRight", {
        start: 0,
        end: 5
      }),
      frameRate: 15,
      repeat: -1
    });

    this.physics.add.collider(player, water);
    this.physics.add.collider(player, trees);

    let toucher = false;

    for (let i = 0; i < 3; i++) {
      this.physics.add.collider(player, monsters[i][0], () => {
        toucher = true;
        this.input.keyboard.on(
          "keyup",
          function(k) {
            if (k.key === " " && monsters[i][1] === false && toucher) {
              console.log(monsters[i][2]);
              if (monsters[i][2] === 10) {
                monsters[i][0].destroy();
                coins.play({
                  volume: 0.5,
                  loop: false
                });
                score += 100;
                scoreTxt.destroy();
                scoreTxt = this.add.text(30, 60, `Score : ${score}`, {
                  fontFamily: "Chelsea Market",
                  fontSize: 25
                });
                scoreTxt.setScrollFactor(0);

                monsters[i][1] = true;
                if (i === 0) {
                  levelOne = false;
                  levelTwo = false;
                  levelThree = false;
                  levelThreeHintOne = true;
                  levelThreeHintTwo = false;
                  levelThreeHintThree = false;
                  settings.continue.levelOne = false;
                  settings.continue.levelTwo = false;
                  settings.continue.levelThree = false;
                  settings.continue.levelThreeHintOne = true;
                  settings.continue.levelThreeHintTwo = false;
                  settings.continue.levelThreeHintThree = false;
                  settings.continue.playerX = playerX;
                  settings.continue.playerY = playerY;
                  settings.continue.score = score;
                  settings.continue.health = health;
                  localStorage.setItem("settings", JSON.stringify(settings));
                  sword.pause();
                  footsteps.pause();
                  _this.scene.switch("NewGameScene");
                } else if (i === 1) {
                  levelOne = false;
                  levelTwo = false;
                  levelThree = false;
                  levelThreeHintOne = false;
                  levelThreeHintTwo = true;
                  levelThreeHintThree = false;
                  settings.continue.levelOne = false;
                  settings.continue.levelTwo = false;
                  settings.continue.levelThree = false;
                  settings.continue.levelThreeHintOne = false;
                  settings.continue.levelThreeHintTwo = true;
                  settings.continue.levelThreeHintThree = false;
                  settings.continue.playerX = playerX;
                  settings.continue.playerY = playerY;
                  settings.continue.score = score;
                  settings.continue.health = health;
                  localStorage.setItem("settings", JSON.stringify(settings));
                  sword.pause();
                  footsteps.pause();
                  _this.scene.switch("NewGameScene");
                } else if (i === 2) {
                  levelOne = false;
                  levelTwo = false;
                  levelThree = false;
                  levelThreeHintOne = false;
                  levelThreeHintTwo = false;
                  levelThreeHintThree = true;
                  settings.continue.levelOne = false;
                  settings.continue.levelTwo = false;
                  settings.continue.levelThree = false;
                  settings.continue.levelThreeHintOne = false;
                  settings.continue.levelThreeHintTwo = false;
                  settings.continue.levelThreeHintThree = true;
                  settings.continue.playerX = playerX;
                  settings.continue.playerY = playerY;
                  settings.continue.score = score;
                  settings.continue.health = health;
                  localStorage.setItem("settings", JSON.stringify(settings));
                  sword.pause();
                  footsteps.pause();
                  _this.scene.switch("NewGameScene");
                }
              } else {
                monsters[i][2]++;
              }
              if (i !== 2) {
                player.x--;
              } else {
                player.x++;
              }
              toucher = false;
            }
          },
          this
        );
      });
    }
    console.log(monsters);

    healthTxt = this.add.text(30, 30, `Health : ${health}`, {
      fontFamily: "Chelsea Market",
      fontSize: 25
    });
    scoreTxt = this.add.text(30, 60, `Score : ${score}`, {
      fontFamily: "Chelsea Market",
      fontSize: 25
    });

    healthTxt.setScrollFactor(0);
    scoreTxt.setScrollFactor(0);
    player.anims.play("left", true);
    player.anims.stop();
    let state = true;
    let clicked = false;
    if (state) {
      this.physics.add.collider(
        redTree,
        player,
        function() {
          this.input.keyboard.on(
            "keyup",
            function(k) {
              if (k.key === " " && !clicked) {
                redTree.destroy();
                score += 100;
                scoreTxt.destroy();
                scoreTxt = this.add.text(30, 60, `Score : ${score}`, {
                  fontFamily: "Chelsea Market",
                  fontSize: 25
                });
                scoreTxt.setScrollFactor(0);
                clicked = true;
              }
            },
            this
          );
          state = false;
        },
        null,
        this
      );
    }

    this.physics.add.overlap(path, player, e => {
      if (e) {
        // console.log("Touched");
        status = true;
      }
    });

    let touching = false;
    this.physics.add.collider(player, chestOne, e => {
      touching = true;
      this.input.keyboard.on("keyup", function(k) {
        if (k.key === "e" && touching) {
          inputOneText = window.prompt(
            "Say my name to open your third eye and be able to see me."
          );
          if (inputOneText.toUpperCase() === "NUUR") {
            let image = _this.add
              .image(0, 0, "Background")
              .setOrigin(0, 0)
              .setScrollFactor(0);

            let text = _this.add
              .text(450, 250, "To Be Continued", {
                fontFamily: "Chelsea Market",
                fontSize: 50,
                align: "center"
              })
              .setScrollFactor(0);
            setTimeout(() => {
              image.destroy();
              text.destroy();
              _this.scene.stop("LevelOne");
              _this.scene.stop("LevelTwo");
              _this.scene.stop("LevelThree");
              _this.scene.stop("NewGameScene");

              _this.scene.switch("MenuScene");
            }, 3000);
          } else {
            inputOneText = "";
            window.alert("Try Again!");
          }
          touching = false;
        }
      });
    });
    let touching1 = false;
    this.physics.add.collider(player, chestTwo, e => {
      touching1 = true;
      this.input.keyboard.on("keyup", function(k) {
        if (k.key === "e" && touching1) {
          inputOneText = window.prompt("Hint : 1001", "Type in your Answer.");
          if (inputOneText.toUpperCase() === "RUUN") {
            let image = _this.add
              .image(0, 0, "Background")
              .setOrigin(0, 0)
              .setScrollFactor(0);

            let text = _this.add
              .text(
                300,
                250,
                "I don't know why, but when I read RUUN in backwards \nit sounded familiar.",
                {
                  fontFamily: "Chelsea Market",
                  fontSize: 30,
                  align: "center"
                }
              )
              .setScrollFactor(0);
            setTimeout(() => {
              image.destroy();
              text.destroy();
            }, 3000);
          } else {
            inputOneText = "";
            window.alert("Try Again!");
          }
          touching1 = false;
        }
      });
    });
  }

  update() {
    this.input.keyboard.enabled = true;

    cursors = this.input.keyboard.createCursorKeys();
    keyObj = this.input.keyboard.addKey("E");
    player.setVelocityY(0);
    player.setVelocityX(0);
    if (
      game.loop.frame % 3 === 0 &&
      status === false &&
      player.y < 370 &&
      player.x > 1600
    ) {
      if (health > 0) {
        scream.play({
          volume: 0.5,
          loop: false,
          rate: 2
        });
        health--;
        healthTxt.destroy();
        healthTxt = this.add.text(30, 30, `Health : ${health}`, {
          fontFamily: "Chelsea Market",
          fontSize: 25
        });

        healthTxt.setScrollFactor(0);
      }
      if (health === 0) {
        console.log("Game Over");
        // this.scene.pause();
      }
    }

    // console.log(player.x);
    status = false;

    if (cursors.left.isDown) {
      left = true;
      player.setVelocityX(-100);
      player.anims.play("left", true);
      footsteps.resume();
    } else if (cursors.right.isDown) {
      right = true;
      player.setVelocityX(100);
      player.anims.play("right", true);
      footsteps.resume();
    } else if (cursors.up.isDown) {
      up = true;
      player.anims.play("up", true);
      player.setVelocityY(-100);
      footsteps.resume();
    } else if (cursors.down.isDown) {
      down = true;
      player.anims.play("down", true);
      player.setVelocityY(100);
      footsteps.resume();
    } else if (cursors.space.isDown) {
      console.log("asnouja");
      if (up) {
        player.anims.play("upAttack", true);
        sword.resume();
        up = false;
      } else if (down) {
        player.anims.play("downAttack", true);
        sword.resume();
        down = false;
      } else if (left) {
        player.anims.play("leftAttack", true);
        sword.resume();
        left = false;
      } else if (right) player.anims.play("rightAttack", true);
      sword.resume();
      right = false;
      // player.anims.play("rightAttack", true);
    } else {
      footsteps.pause();
      sword.pause();
      player.anims.stop();
    }
    playerX = player.x;
    playerY = player.y;
  }
}
// let inputOne = _this.add
//             .text(520, 300, inputOneText, {
//               fontFamily: "Chelsea Market",
//               fontSize: 100
//             })
//             .setScrollFactor(0);
