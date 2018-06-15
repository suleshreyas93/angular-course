"use strict";
exports.__esModule = true;
var likes_1 = require("./likes");
var like = new likes_1.Likes(0, false);
console.log(like.getNoOfLikes() + " " + like.getState());
like.click();
console.log(like.getNoOfLikes() + " " + like.getState());
