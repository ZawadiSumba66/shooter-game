import Entity from '../js/Entity'
import 'phaser'

export default class CarrierShip extends Entity {
    constructor(scene, x, y) {
      super(scene, x, y, "sprEnemy2", "CarrierShip");
      this.body.velocity.y = Phaser.Math.Between(50, 100);
      this.play("sprEnemy2");
      this.setData('score', 10);
    }
  }