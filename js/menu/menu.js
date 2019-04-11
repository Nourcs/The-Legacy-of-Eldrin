class MenuScene extends Phaser.Scene {
  constructor() {
    super({ key: "MenuScene", active: true });
  }
  preload() {
    this.load.image(
      "menuBackground",
      "./assets/menu/background/background.jpg"
    ); // Load the background image
  }
  create() {
    let background = this.add.image(0, 0, "menuBackground").setOrigin(0, 0); // Draw Main Menu background
    let menuBtns = []; // Create Array of Buttons
    let menuBtnsPosX = 50; // Define x position of the buttons

    menuBtns.push(
      this.add.text(menuBtnsPosX, 100, "Single Player", {
        fontFamily: "Chelsea Market",
        fontSize: 40
      })
    ); // Add Single Player Button

    menuBtns.push(
      this.add.text(menuBtnsPosX, 170, "Multiplayer", {
        fontFamily: "Chelsea Market",
        fontSize: 40
      })
    ); // Add Multiplayer Button

    menuBtns.push(
      this.add.text(menuBtnsPosX, 240, "Options", {
        fontFamily: "Chelsea Market",
        fontSize: 40
      })
    ); // Add Options Button

    menuBtns.push(
      this.add.text(menuBtnsPosX, 310, "Skins", {
        fontFamily: "Chelsea Market",
        fontSize: 40
      })
    ); // Add Skins Button

    menuBtns.push(
      this.add.text(menuBtnsPosX, 380, "Credits", {
        fontFamily: "Chelsea Market",
        fontSize: 40
      })
    ); // Add Credits Button

    menuBtns.push(
      this.add.text(menuBtnsPosX, 450, "Quit", {
        fontFamily: "Chelsea Market",
        fontSize: 40
      })
    ); // Add Quit Button

    for (let i = 0; i < menuBtns.length; i++) {
      menuBtns[i].alpha = 0.5; // Setting  the opacity of the buttons to 0.5
      menuBtns[i]
        .setInteractive() // Making the buttons interactive ( Can use mouse events )
        .on("pointerover", function() {
          document.body.style.cursor = "pointer";
          menuBtns[i].alpha = 1;
          menuBtns[i];
        }) // On hover : set the opacity to 1
        .on("pointerout", function() {
          document.body.style.cursor = "auto";
          menuBtns[i].alpha = 0.5;
        }); // On out : set the opacity to 0.5
      menuBtns[0].on(
        "pointerdown",
        function(e) {
          document.body.style.cursor = "auto";
          this.scene.start("SPScene");
        },
        this
      ); // Start Options Scene when clicking on Options Button
      menuBtns[1].on(
        "pointerdown",
        function(e) {
          document.body.style.cursor = "auto";
          this.scene.start("MPScene");
        },
        this
      ); // Start Options Scene when clicking on Options Button
      menuBtns[2].on(
        "pointerdown",
        function(e) {
          document.body.style.cursor = "auto";
          this.scene.start("OptionsScene");
        },
        this
      ); // Start Options Scene when clicking on Options Button
      menuBtns[3].on(
        "pointerdown",
        function(e) {
          document.body.style.cursor = "auto";
          this.scene.start("SkinsScene");
        },
        this
      ); // Start Options Scene when clicking on Options Button
      menuBtns[4].on(
        "pointerdown",
        function(e) {
          document.body.style.cursor = "auto";
          this.scene.start("CreditsScene");
        },
        this
      ); // Start Options Scene when clicking on Options Button
      menuBtns[5].on("pointerdown", function() {
        window.close();
      }); // Start Options Scene when clicking on Options Button
    }

    // scene.input.keyboard.on("keyup", function(eventName, event) {
    //   /* ... */
    // });
  }
}
