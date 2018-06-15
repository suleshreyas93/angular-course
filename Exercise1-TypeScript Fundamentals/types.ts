
let a: number;
let b: boolean;
let c: string;
let d: number[] = [1,2,3];
let e: any[] = [1.5,true,'shreyas',false];

for(let i = 0; i < e.length; i++)
{
    console.log(e[i]);
}
enum Colors{ Red = 0, Green = 1, Blue = 2 };
let backgroundColor = Colors.Blue;
console.log("Background Color = "+backgroundColor+" "+Colors[2]);