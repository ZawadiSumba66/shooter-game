import Phaser from 'phaser';
import ScrollingBackground from '../entities/SrollingBackground';
import { getLocalScores } from './storage';
import { setScores } from './api';
export default class SceneGameOver extends Phaser.Scene {
  constructor() {
    super({ key: 'SceneGameOver' });
  }

  create() {

    this.song = this.sound.add('song', { volume: 0.1, loop: true });
    this.song.play();
    this.title = this.add.text(this.game.config.width * 0.5, 128, 'GAME OVER', {
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

    this.btnPlay = this.add.sprite(
      this.game.config.width * 0.5,
      this.game.config.height * 0.5,
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

    this.userName = '';
    this.scores = getLocalScores();
    const div = document.createElement('div');
    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.placeholder = 'Enter your name';
    const submitBtn = document.createElement('button');
    submitBtn.innerHTML = 'Submit';

    submitBtn.addEventListener('click', (e) => {
      e.preventDefault();
      this.userName = input.value;
      this.submit = setScores(this.userName, this.scores[0]);
      this.submit.then(() => {
        this.song.stop()
        this.scene.start('SceneLeaderBoard');
      });
      input.value = '';
    });
    div.appendChild(input);
    div.appendChild(submitBtn);
    div.classList.add('my-form');
    this.add.dom(
      this.game.config.width * 0.5,
      this.game.config.height * 0.8,
      div,
    );
  }
}