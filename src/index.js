import SceneMainMenu from './js/SceneMainMenu';
// import Entities from './entities'
import SceneMain from './js/SceneMain';
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
        // Entities,
        SceneMain,
        SceneGameOver
    ],
    pixelArt: true,
    roundPixels: true
};

var game = new Phaser.Game(config);