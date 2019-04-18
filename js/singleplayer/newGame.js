let levelOne = true;
let levelTwo = false;
let levelThree = false;
let levelThreeHintOne = false;
let levelThreeHintTwo = false;
let levelThreeHintThree = false;

class NewGameScene extends Phaser.Scene {
  constructor() {
    super({ key: "NewGameScene", active: false });
  }
  preload() {
    this.load.image(
      "optionsBackground",
      "./assets/options/background/background.jpg"
    ); // Load the background image
  }
  create() {
    settings = retrieveData();
    if (continuer) {
      levelOne = settings.continue.levelOne;
      levelTwo = settings.continue.levelTwo;
      levelThree = settings.continue.levelThree;
      levelThreeHintOne = settings.continue.levelThreeHintOne;
      levelThreeHintTwo = settings.continue.levelThreeHintTwo;
      levelThreeHintThree = settings.continue.levelThreeHintThree;
    }

    let volume = settings.options.mainMusic;
    setInterval(() => {
      if (volume > 0.03) {
        volume -= 0.001;
        mainMusic.setVolume(volume);
      }
    }, 1.5);
    let _this = this;
    this.input.keyboard.on("keydown", function(e) {
      if (e.key === "Escape") {
        _this.scene.switch("EscapeScene");
      }
    });
    let background = this.add.image(0, 0, "optionsBackground").setOrigin(0, 0); // Draw Options background
    if (levelOne) {
      let txt = "Find the Hidden Items!";
      this.add.text(30, 30, "Level 1", {
        fontFamily: "Chelsea Market",
        fontSize: 35
      });
      this.time.delayedCall(3200, () => {
        let contin = this.add.text(window.innerWidth - 200, 560, "Continue", {
          fontFamily: "Chelsea Market",
          fontSize: 35
        });

        contin.alpha = 0.5;
        contin
          .setInteractive()
          .on("pointerover", () => {
            document.body.style.cursor = "pointer";
            contin.alpha = 1;
          })
          .on("pointerout", () => {
            document.body.style.cursor = "auto";
            contin.alpha = 0.5;
          })
          .on("pointerdown", () => {
            document.body.style.cursor = "auto";
            _this.scene.start("LevelOne");
          });
      });

      // contin.destroy();

      let thisC = this;
      let jj = 0;
      let texte = "";
      let boston;
      this.time.delayedCall(600, () => {
        this.time.addEvent({
          delay: 100, // ms
          callback: () => {
            if (jj > 0) boston.destroy();
            texte += txt[jj];
            boston = thisC.add.text(
              window.innerWidth / 2 - window.innerWidth / 6,
              500,
              texte,
              {
                fontFamily: "Chelsea Market",
                fontSize: 40
              }
            );
            jj++;
          },
          //args: [],
          repeat: txt.length - 1
        });
      });
    } else if (levelTwo) {
      let txt =
        "Now, you acquired the ability to fight! \nUse your sword wisely.";
      this.add.text(50, 50, "Level 2", {
        fontFamily: "Chelsea Market",
        fontSize: 35
      });
      this.time.delayedCall(3200, () => {
        let contin = this.add.text(window.innerWidth - 200, 560, "Continue", {
          fontFamily: "Chelsea Market",
          fontSize: 35
        });

        contin.alpha = 0.5;
        contin
          .setInteractive()
          .on("pointerover", () => {
            document.body.style.cursor = "pointer";
            contin.alpha = 1;
          })
          .on("pointerout", () => {
            document.body.style.cursor = "auto";
            contin.alpha = 0.5;
          })
          .on("pointerdown", () => {
            document.body.style.cursor = "auto";
            _this.scene.start("LevelTwo");
          });
      });

      // contin.destroy();

      let thisC = this;
      let jj = 0;
      let texte = "";
      let boston;
      this.time.delayedCall(600, () => {
        this.time.addEvent({
          delay: 100, // ms
          callback: () => {
            if (jj > 0) boston.destroy();
            texte += txt[jj];
            boston = thisC.add.text(400, 350, texte, {
              fontFamily: "Chelsea Market",
              fontSize: 40
            });
            jj++;
          },
          //args: [],
          repeat: txt.length - 1
        });
      });
    } else if (levelThree) {
      let txt = "Kill the dead.\nFind the name of their leader.";
      this.add.text(50, 50, "Level 3", {
        fontFamily: "Chelsea Market",
        fontSize: 35
      });
      this.time.delayedCall(3200, () => {
        let contin = this.add.text(window.innerWidth - 200, 560, "Continue", {
          fontFamily: "Chelsea Market",
          fontSize: 35
        });

        contin.alpha = 0.5;
        contin
          .setInteractive()
          .on("pointerover", () => {
            document.body.style.cursor = "pointer";
            contin.alpha = 1;
          })
          .on("pointerout", () => {
            document.body.style.cursor = "auto";
            contin.alpha = 0.5;
          })
          .on("pointerdown", () => {
            document.body.style.cursor = "auto";
            _this.scene.start("LevelThree");
          });
      });

      // contin.destroy();

      let thisC = this;
      let jj = 0;
      let texte = "";
      let boston;
      this.time.delayedCall(600, () => {
        this.time.addEvent({
          delay: 100, // ms
          callback: () => {
            if (jj > 0) boston.destroy();
            texte += txt[jj];
            boston = thisC.add.text(400, 450, texte, {
              fontFamily: "Chelsea Market",
              fontSize: 40
            });
            jj++;
          },
          //args: [],
          repeat: txt.length - 1
        });
      });
    } else if (levelThreeHintOne) {
      // LEVEL THREE HINT One
      let txt = "One equals to N";
      this.add.text(50, 50, "Hint 1", {
        fontFamily: "Chelsea Market",
        fontSize: 35
      });
      this.time.delayedCall(3200, () => {
        let contin = this.add.text(window.innerWidth - 200, 560, "Continue", {
          fontFamily: "Chelsea Market",
          fontSize: 35
        });

        contin.alpha = 0.5;
        contin
          .setInteractive()
          .on("pointerover", () => {
            document.body.style.cursor = "pointer";
            contin.alpha = 1;
          })
          .on("pointerout", () => {
            document.body.style.cursor = "auto";
            contin.alpha = 0.5;
          })
          .on("pointerdown", () => {
            document.body.style.cursor = "auto";
            _this.scene.switch("LevelThree");
            _this.scene.stop("NewGameScene");
          });
      });

      // contin.destroy();

      let thisC = this;
      let jj = 0;
      let texte = "";
      let boston;
      this.time.delayedCall(600, () => {
        this.time.addEvent({
          delay: 100, // ms
          callback: () => {
            if (jj > 0) boston.destroy();
            texte += txt[jj];
            boston = thisC.add.text(400, 450, texte, {
              fontFamily: "Chelsea Market",
              fontSize: 40
            });
            jj++;
          },
          //args: [],
          repeat: txt.length - 1
        });
      });
    } else if (levelThreeHintTwo) {
      // LEVEL THREE HINT TWO
      let txt = "Zero equals to U";
      this.add.text(50, 50, "Hint 2", {
        fontFamily: "Chelsea Market",
        fontSize: 35
      });
      this.time.delayedCall(3200, () => {
        let contin = this.add.text(window.innerWidth - 200, 560, "Continue", {
          fontFamily: "Chelsea Market",
          fontSize: 35
        });

        contin.alpha = 0.5;
        contin
          .setInteractive()
          .on("pointerover", () => {
            document.body.style.cursor = "pointer";
            contin.alpha = 1;
          })
          .on("pointerout", () => {
            document.body.style.cursor = "auto";
            contin.alpha = 0.5;
          })
          .on("pointerdown", () => {
            document.body.style.cursor = "auto";
            _this.scene.switch("LevelThree");
            _this.scene.stop("NewGameScene");
          });
      });

      // contin.destroy();

      let thisC = this;
      let jj = 0;
      let texte = "";
      let boston;
      this.time.delayedCall(600, () => {
        this.time.addEvent({
          delay: 100, // ms
          callback: () => {
            if (jj > 0) boston.destroy();
            texte += txt[jj];
            boston = thisC.add.text(400, 450, texte, {
              fontFamily: "Chelsea Market",
              fontSize: 40
            });
            jj++;
          },
          //args: [],
          repeat: txt.length - 1
        });
      });
    } else if (levelThreeHintThree) {
      // LEVEL THREE HINT THREE
      let txt = "One equals to R if it's Zero.";
      this.add.text(50, 50, "Hint 3", {
        fontFamily: "Chelsea Market",
        fontSize: 35
      });
      this.time.delayedCall(3200, () => {
        let contin = this.add.text(window.innerWidth - 200, 560, "Continue", {
          fontFamily: "Chelsea Market",
          fontSize: 35
        });

        contin.alpha = 0.5;
        contin
          .setInteractive()
          .on("pointerover", () => {
            document.body.style.cursor = "pointer";
            contin.alpha = 1;
          })
          .on("pointerout", () => {
            document.body.style.cursor = "auto";
            contin.alpha = 0.5;
          })
          .on("pointerdown", () => {
            document.body.style.cursor = "auto";
            _this.scene.switch("LevelThree");
            _this.scene.stop("NewGameScene");
          });
      });

      // contin.destroy();

      let thisC = this;
      let jj = 0;
      let texte = "";
      let boston;
      this.time.delayedCall(600, () => {
        this.time.addEvent({
          delay: 100, // ms
          callback: () => {
            if (jj > 0) boston.destroy();
            texte += txt[jj];
            boston = thisC.add.text(400, 450, texte, {
              fontFamily: "Chelsea Market",
              fontSize: 40
            });
            jj++;
          },
          //args: [],
          repeat: txt.length - 1
        });
      });
    }
  }
}
