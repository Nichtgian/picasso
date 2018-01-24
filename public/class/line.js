class Line {
    constructor() {
        this.points = [
            {x: 10, y: 10},
            {x: 50, y: 10},
            {x: 70, y: 100},
            {x: 40, y: 70}
        ];
        this.x = 10;
        this.y = 10;
    }

    addPoint(x, y) {
        this.points.push({x: x, y: y});
        if (x < this.x) {
            this.x = x;
        }
        if (y < this.y) {
            this.y = y;
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
        ctx.stroke();
    }
}