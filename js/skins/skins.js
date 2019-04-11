class SkinsScene extends Phaser.Scene {
  constructor() {
    super({ key: "SkinsScene", active: false });
  }
  preload() {
    loadBlurredBg(this);
    this.load.image("eldrin", "./assets/skins/eldrin.png"); // Load the background image
    this.load.image("meira", "./assets/skins/meira.png"); // Load the background image
    this.load.image("orc", "./assets/skins/orc.png"); // Load the background image
    this.load.image("skeleton", "./assets/skins/skeleton.png"); // Load the background image
    this.load.image("check", "./assets/skins/checkbox/check.png"); // Load the background image
    this.load.image("uncheck", "./assets/skins/checkbox/uncheck.png"); // Load the background image
  }
  create() {
    sharedBlurredBg(this);
    applyButton(this);
    let eldrin = this.add.image(450, 150, "eldrin");
    let meira = this.add.image(600, 150, "meira");
    let orc = this.add.image(750, 150, "orc");
    let skeleton = this.add.image(900, 150, "skeleton");
    let uncheckBtns = [];
    let checkBtns = [];
    let checkPos = 450;
    let checkedPos = 0;

    for (let item in settings.skins) {
      if (settings.skins[item] === true) {
        checkedPos = Number(item);
      }
    }

    // let skin = JSON.parse(localStorage.getItem("skins"));
    // if (skin) {
    //   for (let item in skin) {
    //     if (skin[item] === true) {
    //       checkedPos = Number(item);
    //     }
    //   }
    // } else {
    //   localStorage.setItem("skins", JSON.stringify(settings.skins));
    // }
    for (let i = 0; i < 4; i++) {
      uncheckBtns.push(this.add.image(checkPos, 210, "uncheck"));
      checkBtns.push(this.add.image(uncheckBtns[i].x, 210, "check"));
      checkPos += 150;
    }
    for (let i = 0; i < 4; i++) {
      if (i !== checkedPos) {
        checkBtns[i].visible = false;
      } else {
        checkBtns[i].visible = true;
      }
    }
    for (let i = 0; i < uncheckBtns.length; i++) {
      uncheckBtns[i].setInteractive().on(
        "pointerdown",
        function() {
          checkedPos = i;
          switch (i) {
            case 0:
              settings.skins[0] = true;
              settings.skins[1] = false;
              settings.skins[2] = false;
              settings.skins[3] = false;
              break;
            case 1:
              settings.skins[0] = false;
              settings.skins[1] = true;
              settings.skins[2] = false;
              settings.skins[3] = false;
              break;
            case 2:
              settings.skins[0] = false;
              settings.skins[1] = false;
              settings.skins[2] = true;
              settings.skins[3] = false;
              break;
            case 3:
              settings.skins[0] = false;
              settings.skins[1] = true;
              settings.skins[2] = false;
              settings.skins[3] = true;
              break;
          }
          for (let j = 0; j < uncheckBtns.length; j++) {
            if (j !== checkedPos) {
              checkBtns[j].visible = false;
            } else {
              checkBtns[j].visible = true;
            }
          }
        },
        this
      );
    }
  }
}
