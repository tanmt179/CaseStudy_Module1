let car = new Car(170, 500, 44, 80)

function clearCanvas() {
    let canvas = document.getElementById('myCanvas');
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function play() {
    clearCanvas();
    lineMove();
    lines2Move();
    lines3Move();
    ma1Move();
    ma2Move();
    Car1MoveRandom();
    car.draw();
    car.collision(ok)
}

let ok = setInterval(play, 15)


window.addEventListener('keydown', function (event) {
    switch (event.keyCode) {
        case 37:
            car.moveLeft();
            break;
        case 39:
            car.moveRight();
            break;
        // case 38:
        //     car.moveTop();
        //     break;
        // case 40:
        //     car.moveDown();
        //     break;
    }
})