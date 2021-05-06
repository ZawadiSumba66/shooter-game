import Entity from '../js/Entity'
import 'phaser'

class CarrierShip extends Entity {
    constructor(scene, x, y) {
      super(scene, x, y, "sprEnemy2", "CarrierShip");
      this.play("sprEnemy2");
    }
  }