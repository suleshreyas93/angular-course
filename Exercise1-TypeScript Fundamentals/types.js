var a;
var b;
var c;
var d = [1, 2, 3];
var e = [1.5, true, 'shreyas', false];
for (var i = 0; i < e.length; i++) {
    console.log(e[i]);
}
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 0] = "Red";
    Colors[Colors["Green"] = 1] = "Green";
    Colors[Colors["Blue"] = 2] = "Blue";
})(Colors || (Colors = {}));
;
var backgroundColor = Colors.Blue;
console.log("Background Color = " + backgroundColor + " " + Colors[2]);
