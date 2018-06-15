class Point3
{
    constructor(private _x?:number, private _y?:number)
    {

    }

    draw()
    {
        console.log("X: "+this._x+",Y:"+this._y);
    }

    get x()
    {
        return this._x;
    }

    set x(value:number)
    {
        if(value < 0)
        {
            throw new Error("Values must be greater than 0");
        }

        this._x = value;
    }
}

let p = new Point3(1,2);
p.x = 10;
let x_co = p.x; 