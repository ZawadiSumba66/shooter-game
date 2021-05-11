import Phaser from 'phaser';
import ScrollingBackground from '../entities/SrollingBackground';
import { getScores } from './api';

export default class SceneLeaderBoard extends Phaser.Scene {
  constructor() {
    super({ key: 'SceneLeaderBoard' });
  }

  create() {
    this.title = this.add.text(this.game.config.width * 0.5, 128, 'LEADERS BOARD', {
      fontFamily: 'monospace',
      fontSize: 48,
      fontStyle: 'bold',
      color: '#fb8500',
      align: 'center',
    });
    this.title.setOrigin(0.5);

    this.btnPlay = this.add.sprite(
      this.game.config.width * 0.5,
      this.game.config.height * 0.8,
      'sprBtnPlay',
    );
    this.btnPlay.setInteractive();
    this.btnPlay.on('pointerup', function () {
      this.btnPlay.setTexture('sprBtnPlay');
      this.scene.start('SceneMain');
    }, this);

    this.backgrounds = [];
    for (let i = 0; i < 5; i += 1) { // create five scrolling backgrounds
      const bg = new ScrollingBackground(this, 'sprBg0', i * 10);
      this.backgrounds.push(bg);
    }

    this.allScores();
  }

  async allScores() {
    try{
    const data = await getScores();
    data.forEach((elem, index) => {
      this.add.text(
        this.game.config.width * 0.25,
        this.game.config.height * 0.35 + index * 50,
        `${index + 1}. ${elem.user}: ${elem.score}`,
        {
          fontSize: 24,
          color: '#fff',
          align: 'center',
        });
    });
  }catch{
    this.add.text(
      this.game.config.width * 0.35,
      this.game.config.height * 0.35,
      'Sorry score data is unable to get',
      {
        color: '#fff',
        fontFamily: 'sans-serif',
        fontSize: '20px',
        lineHeight: 1.3,
      },
    );
  }
  }
}