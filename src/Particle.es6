class Particle {
    constructor() {
        this.width = 10;
        this.height = 10;
        this.x = 160;
        this.y = 50;
        this.xSpeed = (Math.random()*6)-3;
        this.ySpeed = 4;
        this.isDead = false;
    }

    move() {
        this.y += this.ySpeed;
        this.x += this.xSpeed;
    }

    die() {
        console.log(this.y);
        if (this.y >= 500) {
            this.isDead = true;
        }
    }

    get posPart() {
        return {width: this.width, height: this.height, x: this.x, y: this.y};
    }
}

module.exports = Particle;