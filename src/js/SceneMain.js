import Phaser from 'phaser'
//entities
import Player from '../entities/Player';
import GunShip from '../entities/GunShip'
import ChaserShip from '../entities/ChaserShip'
import CarrierShip from '../entities/CarrierShip'
import ScrollingBackground from '../entities/SrollingBackground'
//assets
import sprBg0 from "../assets/spr_stars02.png"
import sprExplosion from "../assets/sprExplosion.png"
import sprEnemy0 from "../assets/sprEnemy0.png"
import sprEnemy1 from "../assets/sprEnemy1.png"
import sprEnemy2 from "../assets/sprEnemy2.png"
import sprLaserEnemy0 from "../assets/sprLaserEnemy0.png"
import sprLaserPlayer from  "../assets/sprLaserPlayer.png";
import sprPlayer from "../assets/sprPlayer.png"
import sndExplode0 from "../assets/sndExplode0.mp3";
import sndExplode1 from "../assets/sndExplode1.mp3";
import sndLaser from "../assets/sndLaser.mp3";

export default class SceneMain extends Phaser.Scene {
    constructor() {
      super({ key: "SceneMain" });
    }

    preload() {
        this.load.image("sprBg0", sprBg0);
        // this.load.image("sprBg1", "assets/sprBg1.png");
        this.load.spritesheet("sprExplosion", sprExplosion, {
          frameWidth: 32,
          frameHeight: 32
        });
        this.load.spritesheet("sprEnemy0", sprEnemy0, {
          frameWidth: 16,
          frameHeight: 16
        });
        this.load.image("sprEnemy1", sprEnemy1);
        this.load.spritesheet("sprEnemy2", sprEnemy2, {
          frameWidth: 16,
          frameHeight: 16
        });
        this.load.image("sprLaserEnemy0", sprLaserEnemy0);
        this.load.image("sprLaserPlayer", sprLaserPlayer);
        this.load.spritesheet("sprPlayer", sprPlayer, {
          frameWidth: 16,
          frameHeight: 16
        });
        this.load.audio("sndExplode0", sndExplode0);
        this.load.audio("sndExplode1", sndExplode1);
        this.load.audio("sndLaser", sndLaser);
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
      this.backgrounds = [];
        for (var i = 0; i < 5; i++) { // create five scrolling backgrounds
          var bg = new ScrollingBackground(this, "sprBg0", i * 10);
          this.backgrounds.push(bg);
        }
      this.player = new Player(
        this,
        this.game.config.width * 0.5,
        this.game.config.height * 0.5,
        "sprPlayer"
      ); 

      this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
      this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
      this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
      this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
      this.keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
      this.enemies = this.add.group();
      this.enemyLasers = this.add.group();
      this.playerLasers = this.add.group();

      this.physics.add.collider(this.playerLasers, this.enemies, function(playerLaser, enemy) {
        if (enemy) {
          if (enemy.onDestroy !== undefined) {
            enemy.onDestroy();
          }
          enemy.explode(true);
          playerLaser.destroy();
        }
      });
      this.physics.add.overlap(this.player, this.enemies, function(player, enemy) {
        if (!player.getData("isDead") &&
            !enemy.getData("isDead")) {
          player.explode(false);
          enemy.explode(true);
        }
      });
      this.physics.add.overlap(this.player, this.enemyLasers, function(player, laser) {
        if (!player.getData("isDead") &&
            !laser.getData("isDead")) {
          player.explode(false);
          laser.destroy();
        }
      });
      this.time.addEvent({
        delay: 1000,
        callback: function() {
          var enemy = null;

          if (Phaser.Math.Between(0, 10) >= 3) {
            enemy = new GunShip(
              this,
              Phaser.Math.Between(0, this.game.config.width),
              0
            );
          }
          else if (Phaser.Math.Between(0, 10) >= 5) {
            if (this.getEnemiesByType("ChaserShip").length < 5) {
      
              enemy = new ChaserShip(
                this,
                Phaser.Math.Between(0, this.game.config.width),
                0
              );
            }
          }
          else {
            enemy = new CarrierShip(
              this,
              Phaser.Math.Between(0, this.game.config.width),
              0
            );
          }
      
          if (enemy !== null) {
            enemy.setScale(Phaser.Math.Between(10, 20) * 0.1);
            this.enemies.add(enemy);
          }
        },
        callbackScope: this,
        loop: true
      });
    }
    update () {
      if (!this.player.getData("isDead")) {
      this.player.update();

      if (this.keyW.isDown) {
        this.player.moveUp();
      }
      else if (this.keyS.isDown) {
        this.player.moveDown();
      }

      if (this.keyA.isDown) {
        this.player.moveLeft();
      }
      else if (this.keyD.isDown) {
        this.player.moveRight();
      }
      if (this.keySpace.isDown) {
        this.player.setData("isShooting", true);
      }
      else {
        this.player.setData("timerShootTick", this.player.getData("timerShootDelay") - 1);
        this.player.setData("isShooting", false);
      }
    }
      for (var i = 0; i < this.enemies.getChildren().length; i++) {
        var enemy = this.enemies.getChildren()[i];
  
        enemy.update();
        if (enemy.x < -enemy.displayWidth ||
          enemy.x > this.game.config.width + enemy.displayWidth ||
          enemy.y < -enemy.displayHeight * 4 ||
          enemy.y > this.game.config.height + enemy.displayHeight) {
      
          if (enemy) {
            if (enemy.onDestroy !== undefined) {
              enemy.onDestroy();
            }
      
            enemy.destroy();
          }
      }
      }
    }
    getEnemiesByType(type) {
      var arr = [];
      for (var i = 0; i < this.enemies.getChildren().length; i++) {
        var enemy = this.enemies.getChildren()[i];
        if (enemy.getData("type") == type) {
          arr.push(enemy);
        }
      }
      return arr;
    } 
  }