class Point2
{
    private x: number;
    private y: number;

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

let newpoint1 = new Point2(2,3);
let newpoint2 = new Point2();
newpoint1.draw();
newpoint2.draw();