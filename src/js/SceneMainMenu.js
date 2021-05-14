import Phaser from 'phaser';
import NewGame from '../assets/NewGame.png';
import Credits from '../assets/Credits.png';
import About from '../assets/About.png';
import sndBtnOver from '../assets/sndBtnOver.mp3';
import sndBtnDown from '../assets/sndBtnDown.mp3';
import ScrollingBackground from '../entities/SrollingBackground';
import sprBg0 from '../assets/spr_stars02.png';
import song from '../assets/juhani.mp3';
export default class SceneMainMenu extends Phaser.Scene {
  constructor() {
    super({ key: 'SceneMainMenu' });
  }

  preload() {
    this.load.image('sprBg0', sprBg0);
    this.load.image('sprBtnPlay', NewGame);
    this.load.image('sprBtnCredits', Credits);
    this.load.image('sprBtnAbout', About);
    this.load.audio('sndBtnOver', sndBtnOver);
    this.load.audio('sndBtnDown', sndBtnDown);
    this.load.audio('song', song);
  }

  create() {
    this.song = this.sound.add('song', { volume: 0.1, loop: true });
    this.song.play();

    this.sfx = {
      btnOver: this.sound.add('sndBtnOver'),
      btnDown: this.sound.add('sndBtnDown'),
    };

    this.backgrounds = [];
    for (let i = 0; i < 5; i += 1) { // create five scrolling backgrounds
      const bg = new ScrollingBackground(this, 'sprBg0', i * 10);
      this.backgrounds.push(bg);
    }
    this.title = this.add.text(this.game.config.width * 0.5, 128, 'SPACE INVADERS', {
      fontFamily: 'monospace',
      fontSize: 48,
      fontStyle: 'bold',
      color: '#fb8500',
      align: 'center',
    });
    this.title.setOrigin(0.5);

    this.btnPlay = this.add.sprite(
      this.game.config.width * 0.5,
      this.game.config.height * 0.3,
      'sprBtnPlay',
    );

    this.btnCredits = this.add.sprite(
      this.game.config.width * 0.5,
      this.game.config.height * 0.5,
      'sprBtnCredits',
    );

    this.btnAbout = this.add.sprite(
      this.game.config.width * 0.5,
      this.game.config.height * 0.7,
      'sprBtnAbout',
    );

    this.btnPlay.setInteractive();
    this.btnAbout.setInteractive();
    this.btnCredits.setInteractive();

    this.btnPlay.on('pointerup', function () {
      this.btnPlay.setTexture('sprBtnPlay');
      this.scene.start('SceneMain');
      this.song.stop()
    }, this);

    this.btnCredits.on('pointerup', function () {
      this.btnPlay.setTexture('sprBtnCredits');
      this.scene.start('SceneLeaderBoard');
      this.song.stop()
    }, this);


    this.btnAbout.on('pointerup', function () {
      this.btnPlay.setTexture('sprBtnAbout');
      this.scene.start('SceneAbout');
      this.song.stop()
    }, this);
  }
}