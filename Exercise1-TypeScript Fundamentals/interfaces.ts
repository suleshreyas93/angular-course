
let drawPoint1 = (point) => {
    //....
}

drawPoint1({
    x : 1,
    y : 2
});

drawPoint1({
    name : "Shreyas"
})

let drawPoint2 = (point : {x: number, y: number}) => {

    //....
}

drawPoint2({
    name:'shreyas';
})

drawPoint2({
    x:1,
    y:2
})

let drawPoint3 = (point: Point) => {
    //....
}

interface Point
{
    x: number;
    y: number;
}