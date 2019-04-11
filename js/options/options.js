class OptionsScene extends Phaser.Scene {
  constructor() {
    super({ key: "OptionsScene", active: false });
  }
  preload() {
    loadBlurredBg(this);
  }
  create() {
    sharedBlurredBg(this);
    applyButton(this);
  }
}
