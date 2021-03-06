import Phaser from 'phaser';
import ScrollingBackground from '../entities/SrollingBackground';

export default class SceneAbout extends Phaser.Scene {
  constructor() {
    super({ key: 'SceneAbout' });
  }

  create() {
    this.song = this.sound.add('song', { volume: 0.1, loop: true });
    this.song.play();
    this.title = this.add.text(this.game.config.width * 0.5, 128, 'ABOUT', {
      fontFamily: 'monospace',
      fontSize: 48,
      fontStyle: 'bold',
      color: '#fb8500',
      align: 'center',
    });
    this.title.setOrigin(0.5);

    this.sfx = {
      btnOver: this.sound.add('sndBtnOver'),
      btnDown: this.sound.add('sndBtnDown'),
    };

    const div = document.createElement('div');
    div.classList.add('about-section');
    div.innerHTML = `<p>Lets play this adventurous game created with phaser its going to be fun and we will enjoy it</p>
    <p>Get to enjoy the game and showcase your agility through obstacles thrown at you</p> 
    <p> Use the up, down, left and right arrows to navigate the spaceship and avoid the enemies. To spawn the enemies, use the spacebar<p> `;

    this.add.dom(this.game.config.width * 0.5, 250, div, {
      fontFamily: 'monospace',
      fontSize: 48,
      fontStyle: 'bold',
      color: '#fff',
      align: 'center',
    });

    this.btnPlay = this.add.sprite(
      this.game.config.width * 0.5,
      this.game.config.height * 0.7,
      'sprBtnPlay',
    );

    this.btnPlay.setOrigin(0.5);
    this.btnPlay.setInteractive();
    this.btnPlay.on('pointerup', function () {
      this.btnPlay.setTexture('sprBtnPlay');
      this.scene.start('SceneMain');
      this.song.stop()
    }, this);


    this.backgrounds = [];
    for (let i = 0; i < 5; i += 1) { // create five scrolling backgrounds
      const bg = new ScrollingBackground(this, 'sprBg0', i * 10);
      this.backgrounds.push(bg);
    }
  }
}