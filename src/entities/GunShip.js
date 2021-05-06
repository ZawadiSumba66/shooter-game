import Entity from '../js/Entity'
import 'phaser'

class GunShip extends Entity {
    constructor(scene, x, y) {
      super(scene, x, y, "sprEnemy0", "GunShip");
      this.play("sprEnemy0");
    }
  }