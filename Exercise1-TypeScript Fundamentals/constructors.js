var Point1 = /** @class */ (function () {
    function Point1(x, y) {
        this.x = x;
        this.y = y;
    }
    Point1.prototype.draw = function () {
        console.log("X: " + this.x + ", Y:" + this.y);
    };
    return Point1;
}());
var point1 = new Point1(2, 3);
var point2 = new Point1();
point1.draw();
point2.draw();
