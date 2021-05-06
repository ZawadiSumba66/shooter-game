import Entity from '../js/Entity'
import 'phaser'

class ChaserShip extends Entity {
    constructor(scene, x, y) {
      super(scene, x, y, "sprEnemy1", "ChaserShip");
    }
  }