class CreditsScene extends Phaser.Scene {
  constructor() {
    super({ key: "CreditsScene", active: false });
  }
  preload() {
    loadBlurredBg(this); // Load the background image
  }
  create() {
    sharedBlurredBg(this); // Draw the blurred background image
  }
}
