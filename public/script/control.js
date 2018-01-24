let draw = false;

canvas.onmousedown =  function(e) {
    if (!draw) {
        let x = e.pageX - canvas.offsetLeft;
        let y = e.pageY - canvas.offsetTop;
        lines.push(new Line());
        lines[index].addPoint({x: x, y: y});
        draw = !draw;
    }
};

canvas.onmousemove = function(e) {
    if (draw) {
        let x = e.pageX - canvas.offsetLeft;
        let y = e.pageY - canvas.offsetTop;
        lines[index].addPoint({x: x, y: y});
        lines[index].draw();
        //console.log(one.points);
    }
};


canvas.onmouseup = function(e) {
    draw = !draw;
    lines[index].draw();
    index++;
};
canvas.onmouseleave = function(e) {
    draw = !draw;
    lines[index].draw();
    index++;
};
