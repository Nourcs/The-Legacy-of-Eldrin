var graphics;

class OptionsScene extends Phaser.Scene {
  constructor() {
    super({ key: "OptionsScene", active: false });
  }
  preload() {
    loadBlurredBg(this);
  }

  create() {
    sharedBlurredBg(this);
    let applyBtn = applyButton(this);
    let plusBtns = [];
    let minusBtns = [];

    plusBtns.push(
      this.add.text(950, 135, "+", {
        fontFamily: "Chelsea Market",
        fontSize: 60
      })
    );

    minusBtns.push(
      this.add.text(420, 135, "-", {
        fontFamily: "Chelsea Market",
        fontSize: 60
      })
    );

    plusBtns.push(
      this.add.text(950, 285, "+", {
        fontFamily: "Chelsea Market",
        fontSize: 60
      })
    );

    minusBtns.push(
      this.add.text(420, 285, "-", {
        fontFamily: "Chelsea Market",
        fontSize: 60
      })
    );

    plusBtns.push(
      this.add.text(950, 435, "+", {
        fontFamily: "Chelsea Market",
        fontSize: 60
      })
    );

    minusBtns.push(
      this.add.text(420, 435, "-", {
        fontFamily: "Chelsea Market",
        fontSize: 60
      })
    );

    let settings = retrieveData();

    let mmV = settings.options.mainMusic;
    let seV = settings.options.soundEffects;
    let cV = settings.contrast * 10 * 2;
    let mainMusic = this.add.text(570, 100, `Main Music : ${mmV * 10}%`, {
      fontFamily: "Chelsea Market",
      fontSize: 30
    });

    let soundEffects = this.add.text(555, 250, `Sound Effects : ${seV * 10}%`, {
      fontFamily: "Chelsea Market",
      fontSize: 30
    });

    let contrast = this.add.text(590, 400, `Contrast : ${cV * 10}%`, {
      fontFamily: "Chelsea Market",
      fontSize: 30
    });

    for (let i = 0; i < plusBtns.length; i++) {
      plusBtns[i].alpha = 0.5;
      minusBtns[i].alpha = 0.5;
    }
    // Main Music

    plusBtns[0]
      .setInteractive()
      .on("pointerover", function() {
        document.body.style.cursor = "pointer";
        plusBtns[0].alpha = 1;
      })
      .on("pointerout", function() {
        document.body.style.cursor = "auto";
        plusBtns[0].alpha = 0.5;
      })
      .on(
        "pointerdown",
        function() {
          if (mmV < 10) {
            mmV++;
            graphics.clear(rectangles[mmV]);
            graphics.strokeRectShape(mmvContour);
            graphics.strokeRectShape(sevContour);
            graphics.strokeRectShape(contContour);

            for (let i = 0; i < mmV; i++) {
              graphics.fillRectShape(rectangles[i]);
            }
            for (let i = 0; i < seV; i++) {
              graphics.fillRectShape(rectangles2[i]);
            }
            for (let i = 0; i < cV; i++) {
              graphics.fillRectShape(rectangles3[i]);
            }
            mainMusic.destroy();
            mainMusic = this.add.text(570, 100, `Main Music : ${mmV * 10}%`, {
              fontFamily: "Chelsea Market",
              fontSize: 30
            });
          }
        },
        this
      );
    minusBtns[0]
      .setInteractive()
      .on("pointerover", function() {
        document.body.style.cursor = "pointer";
        minusBtns[0].alpha = 1;
      })
      .on("pointerout", function() {
        document.body.style.cursor = "auto";
        minusBtns[0].alpha = 0.5;
      })
      .on(
        "pointerdown",
        function() {
          if (mmV > 0) {
            mmV--;
            graphics.clear(rectangles[mmV]);
            graphics.strokeRectShape(mmvContour);
            graphics.strokeRectShape(sevContour);
            graphics.strokeRectShape(contContour);

            for (let i = 0; i < mmV; i++) {
              graphics.fillRectShape(rectangles[i]);
            }
            for (let i = 0; i < seV; i++) {
              graphics.fillRectShape(rectangles2[i]);
            }
            for (let i = 0; i < cV; i++) {
              graphics.fillRectShape(rectangles3[i]);
            }
            mainMusic.destroy();
            mainMusic = this.add.text(570, 100, `Main Music : ${mmV * 10}%`, {
              fontFamily: "Chelsea Market",
              fontSize: 30
            });
          }
        },
        this
      );
    // Sound Effects
    plusBtns[1]
      .setInteractive()
      .on("pointerover", function() {
        document.body.style.cursor = "pointer";
        plusBtns[1].alpha = 1;
      })
      .on("pointerout", function() {
        document.body.style.cursor = "auto";
        plusBtns[1].alpha = 0.5;
      })
      .on(
        "pointerdown",
        function() {
          if (seV < 10) {
            seV++;
            graphics.clear(rectangles[seV]);
            graphics.strokeRectShape(sevContour);
            graphics.strokeRectShape(mmvContour);
            graphics.strokeRectShape(contContour);

            for (let i = 0; i < mmV; i++) {
              graphics.fillRectShape(rectangles[i]);
            }
            for (let i = 0; i < seV; i++) {
              graphics.fillRectShape(rectangles2[i]);
            }
            for (let i = 0; i < cV; i++) {
              graphics.fillRectShape(rectangles3[i]);
            }
            soundEffects.destroy();
            soundEffects = this.add.text(
              555,
              250,
              `Sound Effects : ${seV * 10}%`,
              {
                fontFamily: "Chelsea Market",
                fontSize: 30
              }
            );
          }
        },
        this
      );
    minusBtns[1]
      .setInteractive()
      .on("pointerover", function() {
        document.body.style.cursor = "pointer";
        minusBtns[1].alpha = 1;
      })
      .on("pointerout", function() {
        document.body.style.cursor = "auto";
        minusBtns[1].alpha = 0.5;
      })
      .on(
        "pointerdown",
        function() {
          if (seV > 0) {
            seV--;
            graphics.clear(rectangles[seV]);
            graphics.strokeRectShape(sevContour);
            graphics.strokeRectShape(mmvContour);
            graphics.strokeRectShape(contContour);

            for (let i = 0; i < mmV; i++) {
              graphics.fillRectShape(rectangles[i]);
            }
            for (let i = 0; i < seV; i++) {
              graphics.fillRectShape(rectangles2[i]);
            }
            for (let i = 0; i < cV; i++) {
              graphics.fillRectShape(rectangles3[i]);
            }
            soundEffects.destroy();
            soundEffects = this.add.text(
              555,
              250,
              `Sound Effects : ${seV * 10}%`,
              {
                fontFamily: "Chelsea Market",
                fontSize: 30
              }
            );
          }
        },
        this
      );

    // Contrast

    plusBtns[2]
      .setInteractive()
      .on("pointerover", function() {
        document.body.style.cursor = "pointer";
        plusBtns[2].alpha = 1;
      })
      .on("pointerout", function() {
        document.body.style.cursor = "auto";
        plusBtns[2].alpha = 0.5;
      })
      .on(
        "pointerdown",
        function() {
          if (cV < 10) {
            cV++;
            graphics.clear(rectangles3[cV]);
            graphics.strokeRectShape(mmvContour);
            graphics.strokeRectShape(sevContour);
            graphics.strokeRectShape(contContour);
            for (let i = 0; i < mmV; i++) {
              graphics.fillRectShape(rectangles[i]);
            }
            for (let i = 0; i < seV; i++) {
              graphics.fillRectShape(rectangles2[i]);
            }
            for (let i = 0; i < cV; i++) {
              graphics.fillRectShape(rectangles3[i]);
            }
            contrast.destroy();
            contrast = this.add.text(590, 400, `Contrast : ${cV * 10}%`, {
              fontFamily: "Chelsea Market",
              fontSize: 30
            });
          }
        },
        this
      );
    minusBtns[2]
      .setInteractive()
      .on("pointerover", function() {
        document.body.style.cursor = "pointer";
        minusBtns[2].alpha = 1;
      })
      .on("pointerout", function() {
        document.body.style.cursor = "auto";
        minusBtns[2].alpha = 0.5;
      })
      .on(
        "pointerdown",
        function() {
          if (cV > 0) {
            cV--;
            graphics.clear(rectangles3[cV]);
            graphics.strokeRectShape(mmvContour);
            graphics.strokeRectShape(sevContour);
            graphics.strokeRectShape(contContour);
            for (let i = 0; i < mmV; i++) {
              graphics.fillRectShape(rectangles[i]);
            }
            for (let i = 0; i < seV; i++) {
              graphics.fillRectShape(rectangles2[i]);
            }
            for (let i = 0; i < cV; i++) {
              graphics.fillRectShape(rectangles3[i]);
            }
            contrast.destroy();
            contrast = this.add.text(590, 400, `Contrast : ${cV * 10}%`, {
              fontFamily: "Chelsea Market",
              fontSize: 30
            });
          }
        },
        this
      );

    let graphics = this.add.graphics({
      fillStyle: { color: 0xffffff, alpha: 0.5 },
      lineStyle: { width: 1, color: 0xffffff }
    });

    let rectangles = [];
    let rectangles2 = [];
    let rectangles3 = [];

    let pos = 500;

    for (let i = 0; i < 10; i++) {
      rectangles.push(new Phaser.Geom.Rectangle(pos, 150, 40, 40));
      graphics.fillRectShape(rectangles[i]);
      pos += 40;
    }
    pos = 500;
    for (let i = 0; i < 10; i++) {
      rectangles2.push(new Phaser.Geom.Rectangle(pos, 300, 40, 40));
      graphics.fillRectShape(rectangles2[i]);
      pos += 40;
    }
    pos = 500;
    for (let i = 0; i < 10; i++) {
      rectangles3.push(new Phaser.Geom.Rectangle(pos, 450, 40, 40));
      graphics.fillRectShape(rectangles3[i]);
      pos += 40;
    }
    graphics.clear();
    let mmvContour = new Phaser.Geom.Rectangle(500, 150, 400, 40);
    let sevContour = new Phaser.Geom.Rectangle(500, 300, 400, 40);
    let contContour = new Phaser.Geom.Rectangle(500, 450, 400, 40);

    graphics.strokeRectShape(mmvContour);
    graphics.strokeRectShape(sevContour);
    graphics.strokeRectShape(contContour);

    for (let i = 0; i < mmV; i++) {
      graphics.fillRectShape(rectangles[i]);
    }
    for (let i = 0; i < seV; i++) {
      graphics.fillRectShape(rectangles2[i]);
    }
    for (let i = 0; i < cV; i++) {
      graphics.fillRectShape(rectangles3[i]);
    }
    applyBtn.setInteractive().on(
      "pointerdown",
      function() {
        settings.options.mainMusic = mmV;
        settings.options.soundEffects = seV;
        settings.contrast = cV / 20;
        localStorage.setItem("settings", JSON.stringify(settings));
        this.scene.start("Contrast");
        this.scene.start("OptionsScene");
      },
      this
    );
  }
}
