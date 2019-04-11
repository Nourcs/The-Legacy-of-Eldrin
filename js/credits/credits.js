class CreditsScene extends Phaser.Scene {
  constructor() {
    super({ key: "CreditsScene", active: false });
  }
  preload() {
    loadBlurredBg(this);
  }
  create() {
    sharedBlurredBg(this);
  }
}
