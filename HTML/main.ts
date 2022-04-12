// let x=42;
// console.log(x);

//type string
// var x="42"; 
//  console.log(typeof x);

// type object
// var firstname:null=null;
// console.log(typeof firstname);   

// let v:any = "true"; // type string
// console.log(typeof v) ;  

//add value to string object
//  const firstname= [];
//  firstname.push("42");
//  console.log(firstname);
// const names:any= [];
// names.push("karn");
// console.log(names);

// Arithmetic operation
// let x=3;// multiplication
// let y=4;
// console.log(x*y);

// array
// let cars=["bmw","ford"];
// console.log(cars[0]);

// Tuple array
// let ourTuple: [number, boolean,string];
// ourTuple=[5,true,"dk"];
// console.log(ourTuple);
// let ourTuple:[number, boolean,string];
// ourTuple=[3,true,""];
// ourTuple.push(4);
// console.log(ourTuple);

//named tuples
// const graph: [x: number, y: number] = [55.2, 41.3];
// console.log(graph);

// const graph: [number, string] = [55.2, "41.3"];
// console.log(graph);

// object type1
// const car: { type: string, model: string, year: number } 
// = {type:"Toyota",model:"Corolla",year:2009};
// console.log(car);

// object type2
// const car: [ type: string, model: string, year: number ] 
// = ["Toyota","Corolla",2009];
// console.log(car);

// object type3
// const car: [ string, string, number ] 
// = ["Toyota","Corolla",2009];
// console.log(car);

// object type4
// const car:string="bmw";
// console.log(car);

// numeric Enums example1
// enum Direction {
//     North,
//     East,
//     South,
//     West
//   };
//   let currentDirection = Direction.South;
//   // North is the first value so it logs '0'
//   console.log(currentDirection);

// example2(default intial value)
// enum Direction {
//     North,
//       East,
//       South,
//    West};
// let currentDirection = Direction.West;
//  console.log(currentDirection);

// example3(set intialized value)
// enum CardinalDirections {
//     North = 1,
//     East,
//     South,
//     West
//   };
  
// let currentDirection=CardinalDirections.West;
//    console.log(currentDirection);

// example4(set intialized value )
// enum CardinalDirections {
//     North = 1,
//     East,
//     South,
//     West
//   };
  
//   // logs 1 since we initialized the first value to something other than '0'
//   console.log(CardinalDirections.North);
  
//   // logs 4 as it continued on from the initial '1' value
//   console.log(CardinalDirections.West);


// enum fully intialized
// enum CardinalDirections{
//     East=1,
//     West=2,
//     North=0,
//     South=3
// }
// console.log(CardinalDirections.North);
// console.log(CardinalDirections.South);


// string enum
enum CardinalDirections {
    North = 0,
    East,
    South = "south",
    West = "west"
  };
  // logs "North"
  console.log(CardinalDirections.North);
  // logs "West"
  console.log(CardinalDirections.East);