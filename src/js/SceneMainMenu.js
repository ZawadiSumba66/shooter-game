export default class SceneMainMenu extends Phaser.Scene {
    constructor() {
      super({ key: "SceneMainMenu" });
    }

    preload() {
      // this.load.image("sprBtnPlay", "content/sprBtnPlay.png");
      // this.load.image("sprBtnPlayHover", "content/sprBtnPlayHover.png");
      // this.load.image("sprBtnPlayDown", "content/sprBtnPlayDown.png");
      // this.load.image("sprBtnRestart", "content/sprBtnRestart.png");
      // this.load.image("sprBtnRestartHover", "content/sprBtnRestartHover.png");
      // this.load.image("sprBtnRestartDown", "content/sprBtnRestartDown.png");
      this.load.image("sprBtnPlay", "assets/NewGame.png")
      this.load.image("sprBtnCredits", "assets/Credits.png")
      this.load.image("sprBtnAbout", "assets/About.png")
      this.load.audio("sndBtnOver", "aseets/sndBtnOver.wav");
      this.load.audio("sndBtnDown", "aseets/sndBtnDown.wav");
    }

    create() {
      this.scene.start("SceneMain");
    }
  } 