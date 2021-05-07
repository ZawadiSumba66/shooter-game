import Entity from '../js/Entity'
import 'phaser'
export default class PlayerLaser extends Entity{
    constructor(scene, x, y) {
        super(scene, x, y, "sprLaserPlayer");
        this.body.velocity.y = -200;
      }
}