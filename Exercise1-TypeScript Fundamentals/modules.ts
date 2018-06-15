export class Point4
{
    constructor(private _x?:number, private _y?:number)
    {

    }

    draw()
    {
        console.log("X: "+this._x+",Y:"+this._y);
    }

    getX()
    {
        return this._x;
    }

    setX(value:number)
    {
        if(value < 0)
        {
            throw new Error("Values must be greater than 0");
        }

        this._x = value;
    }
}