function sharedBlurredBg(thisComponent) {
  let background = thisComponent.add
    .image(0, 0, "optionsBackground")
    .setOrigin(0, 0); // Draw Options background
  let backButton = thisComponent.add.text(
    window.innerWidth - 250,
    550,
    "Back",
    {
      fontFamily: "Chelsea Market",
      fontSize: 40
    }
  ); // Add back Button

  backButton.alpha = 0.5; // Setting the button to 0.5

  backButton
    .setInteractive() // Making the button interactive ( Can use mouse events )
    .on("pointerover", function() {
      document.body.style.cursor = "pointer";
      backButton.alpha = 1;
    }) // On hover : set the opacity to 1
    .on("pointerout", function() {
      document.body.style.cursor = "auto";
      backButton.alpha = 0.5;
    }) // On out : set the opacity to 0.5
    .on(
      "pointerdown",
      function(e) {
        document.body.style.cursor = "auto";

        thisComponent.scene.start("MenuScene");
      },
      thisComponent
    ); // Go back to the Main Menu Scene when clicking on the Back Button

  thisComponent.input.keyboard.on("keydown", function(e) {
    if (e.key === "Escape") {
      thisComponent.scene.start("MenuScene");
    }
  });
}

function loadBlurredBg(thisComponent) {
  thisComponent.load.image(
    "optionsBackground",
    "./assets/options/background/background.jpg"
  ); // Load the background image
}

function applyButton(thisComponent) {
  let applyButton = thisComponent.add.text(40, 550, "Apply", {
    fontFamily: "Chelsea Market",
    fontSize: 40
  }); // Add back Button

  applyButton.alpha = 0.5; // Setting the button to 0.5

  applyButton
    .setInteractive() // Making the button interactive ( Can use mouse events )
    .on("pointerover", function() {
      document.body.style.cursor = "pointer";

      applyButton.alpha = 1;
    }) // On hover : set the opacity to 1
    .on("pointerout", function() {
      document.body.style.cursor = "auto";

      applyButton.alpha = 0.5;
    }) // On out : set the opacity to 0.5
    .on("pointerdown", function(e) {
      // Put Function here
    }); // Go back to the Main Menu Scene when clicking on the Back Button

  return applyButton;
}

function retrieveData() {
  let settings = JSON.parse(localStorage.getItem("settings"));
  if (settings) {
  } else {
    localStorage.setItem("settings", JSON.stringify(defaultSettings));
    settings = JSON.parse(localStorage.getItem("settings"));
  }
  return settings;
}
