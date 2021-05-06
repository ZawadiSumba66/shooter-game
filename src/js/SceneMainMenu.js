import Phaser from 'phaser'
import NewGame from '../assets/NewGame.png'
import Credits from '../assets/Credits.png'
import About from '../assets/About.png'
import sndBtnOver from '../assets/sndBtnOver.mp3'
import sndBtnDown from '../assets/sndBtnDown.mp3'
export default class SceneMainMenu extends Phaser.Scene {
    constructor() {
      super({ key: "SceneMainMenu" });
    }

    preload() {
      this.load.image("sprBtnPlay", NewGame)
      this.load.image("sprBtnCredits", Credits)
      this.load.image("sprBtnAbout", About)
      this.load.audio("sndBtnOver", sndBtnOver);
      this.load.audio("sndBtnDown", sndBtnDown);
    }

    create() {
      this.scene.start("SceneMain");
    }
  } 