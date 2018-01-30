class Line {
    constructor() {
        this.points = [];
        this.x = canvas.width;
        this.y = canvas.height;
        this.endx = 0;
        this.endy = 0;
        this.color = document.getElementById("color").value;
        this.width = document.getElementById("numb").value;
    }

    addPoint(coord) {
        let x = coord.x;
        let y = coord.y;
        this.points.push({x: x, y: y});
        if (x < this.x) {
            this.x = x;
        }
        if (y < this.y) {
            this.y = y;
        }
        if (x > this.endx) {
            this.endx = x;
        }
        if (y > this.endy) {
            this.endy = y;
        }
    }

    draw() {
        ctx.beginPath();
        ctx.moveTo(0, 0);
        for (let i = 0; i < this.points.length; i++) {
            let x =  this.points[i].x;
            let y =  this.points[i].y;
            if (i == 0) {
                ctx.moveTo(x, y);
            }
            else {
                ctx.lineTo(x, y);
            }
        }
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.lineWidth = this.width;
        ctx.strokeStyle = this.color;
        //ctx.shadowBlur = 10;
        //ctx.shadowColor = 'rgb(0, 0, 0)';
        ctx.stroke();
        //console.log(this.x + " "+ this.y);
        //console.log(this.endx + " "+ this.endy);
    }

    check(ex, ey, i) {
        let x = this.x;
        let y = this.y;
        let endx = this.endx;
        let endy = this.endy;
        let xoff = ex - x;
        let yoff = ey - y;
        if (ex >= x && ex <= endx && ey >= y && ey <= endy) {
            active.side = null;
            //Left
            if (xoff < 10) {
                active.side = "LEFT";
            }
            //Up
            else if (yoff < 10) {
                active.side = "UP";
            }
            //Right
            else if (ex - endx > - 10) {
                active.side = "RIGHT";
            }
            //Lower
            else if (ey - endy > - 10) {
                active.side = "LOWER";
            }
            this.border();
            active.x = x;
            active.y = y;
            active.index = i;
            active.xoff = xoff;
            active.yoff = yoff;
            return true;
        }
    }

    move(newx, newy) {
        if (active.side != null) {
            let oldDist = 0;
            let newDist = 0;
            switch (active.side) {
                case "LOWER":
                    oldDist = this.endy - this.y;
                    newDist = newy + active.yoff- this.y;
                    for (let i = 0; i < this.points.length; i++) {
                        this.points[i].y = this.points[i].y / oldDist * newDist;
                    }
                    this.y = this.y / oldDist * newDist;
                    this.endy = this.endy / oldDist * newDist;
                    active.c = "ew-resize";
                    return;
                    break;
                case "RIGHT":
                    oldDist = this.endx - this.x;
                    newDist = newx + active.xoff- this.x;
                    for (let i = 0; i < this.points.length; i++) {
                        this.points[i].x = this.points[i].x / oldDist * newDist;
                    }
                    this.x = this.x / oldDist * newDist;
                    this.endx = this.endx / oldDist * newDist;
                    active.c = "ns-resize";
                    return;
                    break;
            }
        }
        let distx = newx - this.x;
        let disty = newy - this.y;
        for (let i = 0; i < this.points.length; i++) {
            this.points[i].x += distx;
            this.points[i].y += disty;
        }
        this.x = this.x += distx;
        this.y = this.y += disty;
        this.endx = this.endx += distx;
        this.endy = this.endy += disty;
    }

    border() {
        ctx.lineWidth = 5;
        ctx.strokeStyle = "#4a6";
        ctx.rect(this.x, this.y, this.endx - this.x, this.endy - this.y);
        ctx.stroke();
    }
}
