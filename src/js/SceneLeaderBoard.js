import Phaser from 'phaser'
import ScrollingBackground from '../entities/SrollingBackground'
import {getScores} from './api.js'
export default class SceneLeaderBoard extends Phaser.Scene {
    constructor() {
        super({ key: "SceneLeaderBoard" });
    }
    create() {
        this.title = this.add.text(this.game.config.width * 0.5, 128, "LEADERS BOARD", {
            fontFamily: 'monospace',
            fontSize: 48,
            fontStyle: 'bold',
            color: '#fb8500',
            align: 'center'
        });
        this.title.setOrigin(0.5);

        this.btnPlay = this.add.sprite(
            this.game.config.width * 0.5,
            this.game.config.height * 0.5,
            "sprBtnPlay"
        );
        this.btnPlay.setInteractive();
        this.btnPlay.on("pointerup", function () {
            this.btnPlay.setTexture("sprBtnPlay");
            this.scene.start("SceneMain");
        }, this);

        this.backgrounds = [];
        for (var i = 0; i < 5; i++) { // create five scrolling backgrounds
            var bg = new ScrollingBackground(this, "sprBg0", i * 10);
            this.backgrounds.push(bg);
        }

        this.allScores()
    }
    async allScores() {
        const data = await getScores()
        data.forEach((elem, index) => {
            this.add.text(this.game.config.width * 0.5, 128,
                `${index + 1}. ${elem.user}: ${elem.score}`,
                {
                    fontFamily: 'monospace',
                    fontSize: 24,
                    fontStyle: 'bold',
                    color: '#fff',
                    align: 'center'
                });

        })
    }

}