class MPScene extends Phaser.Scene {
  constructor() {
    super({ key: "MPScene", active: false });
  }
  preload() {
    loadBlurredBg(this);
  }
  create() {
    sharedBlurredBg(this);
    let mpBtns = []; // Create Array of Buttons
    mpBtns.push(
      this.add.text(580, 230, "New Game", {
        fontFamily: "Chelsea Market",
        fontSize: 40
      })
    ); // Add New Game Button
    mpBtns.push(
      this.add.text(600, 300, "Continue", {
        fontFamily: "Chelsea Market",
        fontSize: 40
      })
    ); // Add Continue Button

    for (let i = 0; i < mpBtns.length; i++) {
      mpBtns[i].alpha = 0.5; // Setting  the opacity of the buttons to 0.5
      mpBtns[i]
        .setInteractive() // Making the buttons interactive ( Can use mouse events )
        .on("pointerover", function() {
          document.body.style.cursor = "pointer";
          mpBtns[i].alpha = 1;
          mpBtns[i];
        }) // On hover : set the opacity to 1
        .on("pointerout", function() {
          document.body.style.cursor = "auto";
          mpBtns[i].alpha = 0.5;
        }); // On out : set the opacity to 0.5
    }
  }
}
