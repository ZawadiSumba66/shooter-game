import Phaser from 'phaser';
import SceneMainMenu from './js/SceneMainMenu';
import SceneMain from './js/SceneMain';
import SceneLeaderBoard from './js/SceneLeaderBoard';
import SceneAbout from './js/SceneAbout';
import SceneGameOver from './js/SceneGameOver';

const config = {
  type: Phaser.WEBGL,
  parent: 'content',
  width: 480,
  height: 640,
  backgroundColor: 'black',
  dom: {
    createContainer: true,
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { x: 0, y: 0 },
    },
  },
  scene: [
    SceneMainMenu,
    SceneMain,
    SceneLeaderBoard,
    SceneAbout,
    SceneGameOver,
  ],
  pixelArt: true,
  roundPixels: true,
};

// eslint-disable-next-line no-unused-vars
const game = new Phaser.Game(config);