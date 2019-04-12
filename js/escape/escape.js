//
class EscapeScene extends Phaser.Scene {
  constructor() {
    super({ key: "EscapeScene", active: false });
  }
  preload() {
    this.load.image(
      "optionsBackground",
      "./assets/options/background/background.jpg"
    ); // Load the background image
  }
  create() {
    let background = this.add.image(0, 0, "optionsBackground").setOrigin(0, 0); // Draw Options background
    let _this = this;
    this.input.keyboard.on("keydown", function(e) {
      if (e.key === "Escape") {
        // _this.scene.run("EscapeScene");
        _this.scene.switch("NewGameScene");
      }
    });
    let contin = this.add.text(600, 230, "Continue", {
      fontFamily: "Chelsea Market",
      fontSize: 40
    });
    let exit = this.add.text(650, 290, "Exit", {
      fontFamily: "Chelsea Market",
      fontSize: 40
    });
    contin.alpha = 0.5;
    exit.alpha = 0.5;
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
        // _this.scene.resume("MenuScene");
        // _this.scene.start("MenuScene");
        // _this.scene.run("NewGameScene");

        _this.scene.switch("NewGameScene");
      });

    exit
      .setInteractive()
      .on("pointerover", () => {
        document.body.style.cursor = "pointer";
        exit.alpha = 1;
      })
      .on("pointerout", () => {
        document.body.style.cursor = "auto";
        exit.alpha = 0.5;
      })
      .on("pointerdown", () => {
        document.body.style.cursor = "auto";
        // _this.scene.resume("MenuScene");
        // _this.scene.start("MenuScene");
        _this.scene.stop("NewGameScene");
        _this.scene.start("MenuScene");
      });
  }
}
