//
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
    let background = this.add.image(0, 0, "optionsBackground").setOrigin(0, 0); // Draw Options background
    let txt = "Find the Hidden Items!";

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
  }
  update() {
    let _this = this;
    this.input.keyboard.on("keydown", function(e) {
      if (e.key === "Escape") {
        // _this.scene.run("EscapeScene");

        _this.scene.switch("EscapeScene");
      }
    });
  }
}
