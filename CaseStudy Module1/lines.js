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
let ma1 = [];

function creatMa1() {
    let ma = new Car(350, -20, 10, 30);
    ma1.push(ma);
}

setInterval(creatMa1, 3500);

function ma1Move() {
    for (let i = 0; i < ma1.length; i++) {
        ma1[i].moveDown();
        ma1[i].drawMa1()
    }
}
let ma2 = [];

function creatMa2() {
    let ma = new Car(200, 700, 10, 30);
    ma2.push(ma);
}

setInterval(creatMa2, 4000);

function ma2Move() {
    for (let i = 0; i < ma2.length; i++) {
        ma2[i].moveTop();
        ma2[i].drawMa2()
    }
}


