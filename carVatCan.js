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




