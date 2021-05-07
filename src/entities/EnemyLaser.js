import 'phaser'
import Entity from '../js/Entity'
export default class EnemyLaser extends Entity {
    constructor(scene, x, y) {
      super(scene, x, y, "sprLaserEnemy0");
      this.body.velocity.y = 200;
    }
}