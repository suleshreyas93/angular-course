class Point1
{
    x: number;
    y: number;

    constructor(x?: number, y?: number)
    {
        this.x = x;
        this.y = y;
    }

    draw()
    {
        console.log("X: "+this.x+", Y:"+this.y);
    }
}

let point1 = new Point1(2,3);
let point2 = new Point1();
point1.draw();
point2.draw();