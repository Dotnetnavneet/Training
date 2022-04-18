//Partial
// interface Point {
//   x: number;
//   y: number;
// }
    
// let pointPart: Partial<Point> = {}; // `Partial` allows x and y to be optional
// pointPart.x = 10;
// console.log(pointPart);

//Required changes all the properties in an object to be required
 interface Point {
   x: number;
   y: number;
   z?:number;
 }
             
 let pointPart: Required<Point> = {
   x : 10,
   
  y:10,
 z:10
 }; // `Partial` allows x and y to be optional
    console.log(pointPart);