class SkinsScene extends Phaser.Scene {
  constructor() {
    super({ key: "SkinsScene", active: false });
  }
  preload() {
    loadBlurredBg(this); // Load the background image
    this.load.image("eldrin", "./assets/skins/eldrin.png"); // Load the first player's image
    this.load.image("meira", "./assets/skins/meira.png"); // Load the second player's image
    this.load.image("orc", "./assets/skins/orc.png"); // Load the third player's image
    this.load.image("skeleton", "./assets/skins/skeleton.png"); // Load the fourth player's image
    this.load.image("check", "./assets/skins/checkbox/check.png"); // Load the filled circle image
    this.load.image("uncheck", "./assets/skins/checkbox/uncheck.png"); // Load the unfilled circle image
  }
  create() {
    sharedBlurredBg(this); // draw the blurred background image
    let applyBtn = applyButton(this); // draw the apply Button
    let eldrin = this.add.image(450, 360, "eldrin"); // Draw the first player's image
    let meira = this.add.image(600, 360, "meira"); // Draw the second player's image
    let orc = this.add.image(750, 360, "orc"); // Draw the third player's image
    let skeleton = this.add.image(900, 360, "skeleton"); // Draw the fourth player's image
    let skinsTxt = this.add.text(485, 170, "Choose your Player", {
      fontFamily: "Chelsea Market",
      fontSize: 40
    });

    let uncheckBtns = []; // Create an array of unchecked buttons
    let checkBtns = []; // Create an array of checked buttons

    let uncheckPos = 450; // Create an array of unchecked buttons
    let checkPos = 0;

    let settings = retrieveData();

    for (let item in settings.skins) {
      if (settings.skins[item] === true) {
        checkPos = Number(item);
      }
    }

    // Check the position of the chosen player
    // console.log(skins);

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
      uncheckBtns.push(this.add.image(uncheckPos, 300, "uncheck"));
      checkBtns.push(this.add.image(uncheckBtns[i].x, 300, "check"));
      uncheckPos += 150;
    } // Draw the checkbox buttons

    for (let i = 0; i < 4; i++) {
      if (i !== checkPos) {
        checkBtns[i].visible = false;
      } else {
        checkBtns[i].visible = true;
      }
    } // Uncheck all the checkboxes except for the chosen player

    for (let i = 0; i < uncheckBtns.length; i++) {
      uncheckBtns[i]
        .setInteractive()
        .on("pointerover", function() {
          document.body.style.cursor = "pointer";
        })
        .on("pointerout", function() {
          document.body.style.cursor = "auto";
        })
        .on(
          "pointerdown",
          function() {
            checkPos = i;
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
            } // Update the local storage

            for (let j = 0; j < uncheckBtns.length; j++) {
              if (j !== checkPos) {
                checkBtns[j].visible = false;
              } else {
                checkBtns[j].visible = true;
              }
            } // Update the checked box
          },
          this
        );
    }
    applyBtn.setInteractive().on("pointerdown", function() {
      localStorage.setItem("settings", JSON.stringify(settings));
    });
  }
}
