class OptionsScene extends Phaser.Scene {
  constructor() {
    super({ key: "OptionsScene", active: false });
  }
  preload() {
    this.load.image(
      "optionsBackground",
      "./assets/options/background/background.jpg"
    ); // Load the background image
  }
  create() {
    let background = this.add.image(0, 0, "optionsBackground").setOrigin(0, 0); // Draw Options background
    let backButton = this.add.text(1225, 550, "Back", {
      fontFamily: "Chelsea Market",
      fontSize: 40
    }); // Add back Button

    backButton.alpha = 0.5; // Setting the button to 0.5
    backButton
      .setInteractive() // Making the button interactive ( Can use mouse events )
      .on("pointerover", function() {
        backButton.alpha = 1;
      }) // On hover : set the opacity to 1
      .on("pointerout", function() {
        backButton.alpha = 0.5;
      }) // On out : set the opacity to 0.5
      .on(
        "pointerdown",
        function(e) {
          this.scene.start("MenuScene");
        },
        this
      ); // Go back to the Main Menu Scene when clicking on the Back Button
  }
}
