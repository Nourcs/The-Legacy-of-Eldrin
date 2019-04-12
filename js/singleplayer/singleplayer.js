class SPScene extends Phaser.Scene {
  constructor() {
    super({ key: "SPScene", active: false });
  }
  preload() {
    loadBlurredBg(this);
  }
  create() {
    sharedBlurredBg(this);
    let spBtns = []; // Create Array of Buttons
    let _this = this;
    spBtns.push(
      this.add.text(580, 230, "New Game", {
        fontFamily: "Chelsea Market",
        fontSize: 40
      })
    ); // Add New Game Button
    spBtns.push(
      this.add.text(600, 300, "Continue", {
        fontFamily: "Chelsea Market",
        fontSize: 40
      })
    ); // Add Continue Button

    for (let i = 0; i < spBtns.length; i++) {
      spBtns[i].alpha = 0.5; // Setting  the opacity of the buttons to 0.5
      spBtns[i]
        .setInteractive() // Making the buttons interactive ( Can use mouse events )
        .on("pointerover", function() {
          document.body.style.cursor = "pointer";
          spBtns[i].alpha = 1;
          spBtns[i];
        }) // On hover : set the opacity to 1
        .on("pointerout", function() {
          document.body.style.cursor = "auto";
          spBtns[i].alpha = 0.5;
        }); // On out : set the opacity to 0.5
    }

    spBtns[0].on("pointerdown", function() {
      document.body.style.cursor = "auto";
      console.log(_this);
      _this.scene.start("NewGameScene");
    });
  }
}
