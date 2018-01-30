let draw = false;
let index;
let active = {x: null, y: null, index: null, xoff: 0, yoff: 0, side: null, c: "default"};

canvas.onmousedown = function(e) {
    let checkbox = document.getElementById("write").checked;
    let resize = document.getElementById("resize").checked;
    if (checkbox) {
        render();
        for (let i = 0; i < lines.length; i++) {
            let x = e.pageX - canvas.offsetLeft;
            let y = e.pageY - canvas.offsetTop;
            if (lines[i].check(x, y, i)) {
                return;
            }
        }
    }
    else if (!checkbox && !draw) {
        let x = e.pageX - canvas.offsetLeft;
        let y = e.pageY - canvas.offsetTop
        changeCursor("crosshair");
        lines.push(new Line());
        lines[lines.length - 1].addPoint({x: x, y: y});
        draw = true;
    }
}

canvas.onmousemove = function(e) {
    let checkbox = document.getElementById("write").checked;
    if (draw) {
        let x = e.pageX - canvas.offsetLeft;
        let y = e.pageY - canvas.offsetTop;
        changeCursor("crosshair");
        lines[lines.length - 1].addPoint({x: x, y: y});
        render();
    }
    else if (checkbox && active.index != null) {
        changeCursor("move");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let x = e.pageX - canvas.offsetLeft;
        let y = e.pageY - canvas.offsetTop;
        lines[active.index].move(x - active.xoff, y - active.yoff);
        render();
        lines[active.index].border();
    }
};

canvas.onmouseup = function(e) {
    draw = false;
    render();
    active.index = null;
};

canvas.onmouseleave = function(e) {

};

function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < lines.length; i++) {
        lines[i].draw();
    }
}

function changeCursor(c) {
    switch (c) {
        case "ew-resize":
            document.body.style.cursor = "ew-resize";
            break;
        case "ns-resize":
            document.body.style.cursor = "ns-resize";
            break;
        case "move":
            document.body.style.cursor = "move";
            break;
        case "crosshair":
            document.body.style.cursor  = "crosshair";
            break;
        default :
            document.body.style.cursor = "default";
    }
}