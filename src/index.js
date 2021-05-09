import SceneMainMenu from './js/SceneMainMenu';
import SceneMain from './js/SceneMain';
import SceneLeaderBoard from './js/SceneLeaderBoard';
import SceneGameOver from './js/SceneGameOver';
import 'phaser'
var config = {
    type: Phaser.WEBGL,
    width: 480,
    height: 640,
    backgroundColor: "black",
    physics: {
      default: "arcade",
      arcade: {
        gravity: { x: 0, y: 0 }
      }
    },
    scene: [
        SceneMainMenu,
        SceneMain,
        SceneLeaderBoard,
        SceneGameOver
    ],
    pixelArt: true,
    roundPixels: true
};

var game = new Phaser.Game(config);