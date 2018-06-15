"use strict";
exports.__esModule = true;
var Point4 = /** @class */ (function () {
    function Point4(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Point4.prototype.draw = function () {
        console.log("X: " + this._x + ",Y:" + this._y);
    };
    Point4.prototype.getX = function () {
        return this._x;
    };
    Point4.prototype.setX = function (value) {
        if (value < 0) {
            throw new Error("Values must be greater than 0");
        }
        this._x = value;
    };
    return Point4;
}());
exports.Point4 = Point4;
