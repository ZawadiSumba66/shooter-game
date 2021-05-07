import Phaser from 'phaser'
import ScrollingBackground from '../entities/SrollingBackground'
export default class SceneGameOver extends Phaser.Scene {
    constructor() {
      super({ key: "SceneGameOver" });
    }
  
    create() {
      this.title = this.add.text(this.game.config.width * 0.5, 128, "GAME OVER", {
        fontFamily: 'monospace',
        fontSize: 48,
        fontStyle: 'bold',
        color: '#fb8500',
        align: 'center'
      });
      this.title.setOrigin(0.5);

      this.sfx = {
        btnOver: this.sound.add("sndBtnOver"),
        btnDown: this.sound.add("sndBtnDown")
      };
      this.btnPlay = this.add.sprite(
        this.game.config.width * 0.5,
        this.game.config.height * 0.5,
        "sprBtnPlay"
      );
      this.btnPlay.setInteractive();
      this.btnPlay.on("pointerup", function() {
        this.btnPlay.setTexture("sprBtnPlay");
        this.scene.start("SceneMain");
      }, this);

      this.backgrounds = [];
      for (var i = 0; i < 5; i++) { // create five scrolling backgrounds
        var bg = new ScrollingBackground(this, "sprBg0", i * 10);
        this.backgrounds.push(bg);
      }
    }
  }