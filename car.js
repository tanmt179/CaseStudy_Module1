class Car {
    x;
    y;
    width;
    height;

    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.canvas = document.getElementById('myCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.soundScore = new Audio("audio/score.mp3");
        this.soundGameOver = new Audio("audio/gameover.mp3")
    }

    draw() {
        this.ctx.beginPath();
        const image = new Image(this.width, this.height);
        image.src = 'image/car.png';
        this.ctx.drawImage(image, this.x, this.y)
        this.ctx.fill();
        this.ctx.closePath();
    }

    drawCar1() {
        this.ctx.beginPath();
        const image = new Image(this.width, this.height);
        image.src = 'image/car can.png';
        this.ctx.drawImage(image, this.x, this.y)
        this.ctx.fill();
        this.ctx.closePath();
    }

    drawLine() {
        this.ctx.beginPath();
        this.ctx.rect(this.x, this.y, this.width, this.height);
        this.ctx.fillStyle = "white";
        this.ctx.fill();
        this.ctx.closePath();
    }

    drawTree() {
        this.ctx.beginPath();
        const image = new Image(this.width, this.height);
        image.src = 'image/cay.png';
        this.ctx.drawImage(image, this.x, this.y)
        this.ctx.fill();
        this.ctx.closePath();
    }

    moveDown() {
        this.y += 5;
    }

    moveLeft() {
        this.x -= 15;
    }

    moveRight() {
        this.x += 15;
    }

    gioiHan() {
        if (this.x <= 50) {
            this.x = 50;
        } else if (this.x >= 300) {
            this.x = 300;
        }
    }

    collision(ok) {
        let score = 0;
        for (let i = 0; i < cars1.length; i++) {
            if (cars1[i].y + cars1[i].height >= this.y
                && cars1[i].x + cars1[i].width >= this.x
                && cars1[i].x <= this.x + this.width
                && cars1[i].y < this.y + this.height) {
                this.ctx.beginPath();
                this.ctx.font = "40px Georgia";
                this.ctx.fillStyle = "white";
                this.ctx.fillText("Game Over", 100, 300)
                this.ctx.closePath();
                soundNen.pause();
                this.soundGameOver.play();
                clearInterval(ok)
            } else if (cars1[i].y > this.y + this.height) {
                score++
                this.soundScore.play();
                clearScore()
                this.ctx.font = "20px Georgia";
                this.ctx.fillStyle = "white";
                this.ctx.fillText("Score:" + score, 5, 30)
            }
        }
    }
}
let lines = [];

function creatLine() {
    let line = new Car(185, -100, 10, 30);
    lines.push(line);
}

setInterval(creatLine, 500);

function lineMove() {
    for (let i = 0; i < lines.length; i++) {
        lines[i].moveDown();
        lines[i].drawLine()
    }
}
let lines2 = [];

function creatLines2() {
    let line2 = new Car(-20, -70, 10, 30);
    lines2.push(line2);
}

setInterval(creatLines2, 500);

function lines2Move() {
    for (let i = 0; i < lines2.length; i++) {
        lines2[i].moveDown();
        lines2[i].drawTree()
    }
}
let lines3 = [];

function creatLines3() {
    let line3 = new Car(350, -20, 10, 30);
    lines3.push(line3);
}

setInterval(creatLines3, 500);

function lines3Move() {
    for (let i = 0; i < lines3.length; i++) {
        lines3[i].moveDown();
        lines3[i].drawTree()
    }
}
let cars1 = [];

function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function creatCar1() {
    let car1 = new Car(random(50, 300), -100, 30, 70)
    cars1.push(car1);
}

setInterval(creatCar1, 800)


function Car1MoveRandom() {
    for (let i = 0; i < cars1.length; i++) {
        cars1[i].moveDown();
        cars1[i].drawCar1()
    }
}
let car = new Car(170, 500, 44, 80)
let soundNen = new Audio("audio/sound.mp3")

function clearCanvas() {
    let canvas = document.getElementById('myCanvas');
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function clearScore() {
    let canvas = document.getElementById('myCanvas');
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, 90, 40);
}

function plays() {
    soundNen.play();
    clearCanvas();
    lineMove();
    lines2Move();
    lines3Move();
    Car1MoveRandom();
    car.draw();
    car.gioiHan()
    car.collision(ok)

}

let ok = setInterval(plays, 15)


window.addEventListener('keydown', function (event) {
    switch (event.keyCode) {
        case 37:
            car.moveLeft();
            break;
        case 39:
            car.moveRight();
            break;

    }
})