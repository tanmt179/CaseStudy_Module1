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
    drawTree(){
        this.ctx.beginPath();
        const image = new Image(this.width, this.height);
        image.src = 'image/cay.png';
        this.ctx.drawImage(image, this.x, this.y)
        this.ctx.fill();
        this.ctx.closePath();
    }
    drawMa1(){
        this.ctx.beginPath();
        const image = new Image(this.width, this.height);
        image.src = 'image/ma.png';
        this.ctx.drawImage(image, this.x, this.y)
        this.ctx.fill();
        this.ctx.closePath();
    }
    drawMa2(){
        this.ctx.beginPath();
        const image = new Image(this.width, this.height);
        image.src = 'image/ma2.png';
        this.ctx.drawImage(image, this.x, this.y)
        this.ctx.fill();
        this.ctx.closePath();
    }


    moveDown() {
        this.y += 5;
    }

    moveLeft() {
        this.x -= 5;
    }

    moveRight() {
        this.x += 5;
    }

    moveTop() {
        this.y -= 20;
    }

    collision(ok) {
        let score = 0;
        for (let i = 0; i < cars1.length; i++) {
            if (cars1[i].y + cars1[i].height >= this.y
                && cars1[i].x + cars1[i].width >= this.x
                && cars1[i].x <= this.x + this.width
                && cars1[i].y < this.y + this.height
            ) {
                alert('Game Over');
                clearInterval(ok)
            } else {
                score++
            }
        }
    }
}