export default class SceneMain extends Phaser.Scene {
    constructor() {
      super({ key: "SceneMain" });
    }

    preload() {
        this.load.image("sprBg0", "assets/spr_stars0 2.png");
        // this.load.image("sprBg1", "assets/sprBg1.png");
        this.load.spritesheet("sprExplosion", "assets/sprExplosion.png", {
          frameWidth: 32,
          frameHeight: 32
        });
        this.load.spritesheet("sprEnemy0", "assets/sprEnemy0.png", {
          frameWidth: 16,
          frameHeight: 16
        });
        this.load.image("sprEnemy1", "assets/sprEnemy1.png");
        this.load.spritesheet("sprEnemy2", "assets/sprEnemy2.png", {
          frameWidth: 16,
          frameHeight: 16
        });
        this.load.image("sprLaserEnemy0", "assets/sprLaserEnemy0.png");
        this.load.image("sprLaserPlayer", "assets/sprLaserPlayer.png");
        this.load.spritesheet("sprPlayer", "assets/sprPlayer.png", {
          frameWidth: 16,
          frameHeight: 16
        });
        this.load.audio("sndExplode0", "content/sndExplode0.wav");
        this.load.audio("sndExplode1", "content/sndExplode1.wav");
        this.load.audio("sndLaser", "content/sndLaser.wav");
    }
  
    create() {
      this.anims.create({
        key: "sprEnemy0",
        frames: this.anims.generateFrameNumbers("sprEnemy0"),
        frameRate: 20,
        repeat: -1
      });
  
      this.anims.create({
        key: "sprEnemy2",
        frames: this.anims.generateFrameNumbers("sprEnemy2"),
        frameRate: 20,
        repeat: -1
      });
  
      this.anims.create({
        key: "sprExplosion",
        frames: this.anims.generateFrameNumbers("sprExplosion"),
        frameRate: 20,
        repeat: 0
      });
  
      this.anims.create({
        key: "sprPlayer",
        frames: this.anims.generateFrameNumbers("sprPlayer"),
        frameRate: 20,
        repeat: -1
      });

      this.sfx = {
        explosions: [
          this.sound.add("sndExplode0"),
          this.sound.add("sndExplode1")
        ],
        laser: this.sound.add("sndLaser")
      };
      
    }
  }