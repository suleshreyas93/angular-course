"use strict";
exports.__esModule = true;
var Likes = /** @class */ (function () {
    function Likes(noOfLikes, isSelected) {
        this.noOfLikes = noOfLikes;
        this.isSelected = isSelected;
    }
    Likes.prototype.getNoOfLikes = function () {
        return this.noOfLikes;
    };
    Likes.prototype.getState = function () {
        return this.isSelected;
    };
    Likes.prototype.click = function () {
        if (this.isSelected) {
            this.noOfLikes--;
            this.isSelected = false;
        }
        else {
            this.noOfLikes++;
            this.isSelected = true;
        }
    };
    return Likes;
}());
exports.Likes = Likes;
