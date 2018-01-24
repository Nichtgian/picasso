class Line {
    constructor() {
        this.points = [];
        this.x = canvas.width;
        this.y = canvas.height
        this.endx = 0;
        this.endy = 0;
        this.color = "#187";
        this.width = 10;
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
        ctx.lineJoin = "round";
        ctx.lineWidth = this.width;
        ctx.strokeStyle = this.color;
        ctx.stroke();
        //console.log(this.x + " "+ this.y);
        //console.log(this.endx + " "+ this.endy);
    }
}