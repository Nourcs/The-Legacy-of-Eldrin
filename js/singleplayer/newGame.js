let levelOne = true;
let levelTwo = false;
let levelThree = false;
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
    let _this = this;
    this.input.keyboard.on("keydown", function(e) {
      if (e.key === "Escape") {
        // _this.scene.run("EscapeScene");
        _this.scene.switch("EscapeScene");
      }
    });
    let background = this.add.image(0, 0, "optionsBackground").setOrigin(0, 0); // Draw Options background
    if (levelOne) {
      let txt = "Find the Hidden Items!";
      this.add.text(50, 50, "Level 1", {
        fontFamily: "Chelsea Market",
        fontSize: 35
      });
      this.time.delayedCall(3200, () => {
        let contin = this.add.text(1175, 560, "Continue", {
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
            boston = thisC.add.text(450, 500, texte, {
              fontFamily: "Chelsea Market",
              fontSize: 40
            });
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
        let contin = this.add.text(1175, 560, "Continue", {
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
        let contin = this.add.text(1175, 560, "Continue", {
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
