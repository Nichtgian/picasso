let canvas = document.getElementById("art");
let ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let lines = [];

/*
let one = new Line();

one.addPoint({x: 90, y: 10});
one.addPoint({x: 50, y: 10});
one.addPoint({x: 70, y: 100});
one.addPoint({x: 40, y: 70});

one.draw();*/


/*let press = false;
let lastx, lasty;

canvasSize();
menuHide();
chatHide();

canvas.onmousedown =  function (e) {
    if (document.getElementById("write").checked == true) {
        ctx.font = document.getElementById("numb").value + "px Arial";
        ctx.fillStyle = document.getElementById("color").value;
        ctx.fillText(document.getElementById("text").value, e.pageX - canvas.offsetLeft, e.pageY - canvas.offsetTop);
        return;
    }
    press = true;
    draw(e.pageX - canvas.offsetLeft, e.pageY - canvas.offsetTop, false);
};

canvas.onmousemove = function (e) {
    sendArt();
    if (press) {
        draw(e.pageX - canvas.offsetLeft, e.pageY - canvas.offsetTop, true);
    }
};

canvas.onmouseup = function (e) {
    press = false;
    sendArt();
};
canvas.onmouseleave = function (e) {
    press = false;
    sendArt();
};

function sendArt() {
    socket.emit('art',  canvas.toDataURL());
}

function sendText() {
    socket.emit('text',  document.getElementById("message").value);
    document.getElementById("message").value = "";
}

socket.on('art', function(save) {
    var img = document.createElement("img");
    img.src = save;
    ctx.drawImage(img, 0, 0);
});

socket.on('text', function(text) {
    var ul = document.getElementById("messages");
    var li = document.createElement("li");
    li.setAttribute("class", "text");
    li.appendChild(document.createTextNode(text));
    ul.appendChild(li);
});

function draw(x, y, down) {
    if (down) {
        ctx.beginPath();
        ctx.strokeStyle = document.getElementById("color").value;
        ctx.lineWidth = document.getElementById("numb").value;
        ctx.lineJoin = "round";
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(x, y);
        ctx.closePath();
        ctx.stroke();
    }
    sendArt();
    lastX = x;
    lastY = y;
}
*/

window.addEventListener("resize", canvasSize, false);

function canvasSize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    for (let i = 0; i < lines.length; i++) {
        lines[i].draw();
    }
}

function colorChange() {
    document.getElementById("menuShow").style.color = document.getElementById("color").value;
    document.getElementById("down").style.color = document.getElementById("color").value;
}

function menuShow() {
    document.getElementById("menu").style.display = "block";
    document.getElementById("menuShow").style.display = "none";
    document.getElementById("nav").style.width = "450px";
}

function menuHide() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("menuShow").style.display = "block";
    document.getElementById("nav").style.width = "1em";
}

function chatShow() {
    document.getElementById("main").style.display = "block";
    document.getElementById("chat").style.display = "none";
}

function chatHide() {
    document.getElementById("main").style.display = "none";
    document.getElementById("chat").style.display = "block";
}
