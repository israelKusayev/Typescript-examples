// all types
let str: string;

let num: number;

let boo: boolean;

let arr: Array<any>;
let arr1: any[];

let obj: Object;
let obj1: { a: string };
let func: Function;
let func1: () => void;
interface B {
  func2(arg: string); // won't compile in strict mode
}

let nill: null;

let undef: undefined;

let any: any;

// never
let never: never;

// Function returning never must have unreachable end point
function error(message: string): never {
  throw new Error(message);
}

function loop(): never {
  while (true) {}
}

// Inferred return type is never
function fail(param: unknown) {
  if (typeof param === "number") console.log(param);
}

// Function returning never must have unreachable end point
function infiniteLoop(): [string, number,string] {
  while (true) {}
}

const [,,st] =  infiniteLoop()

let voi: void;

let un: unknown;
let tuple: [, number] = ["", 1];
let pro: Promise<>
// enum. by default starting at 0.

enum Color {
  Red = 1,
  Green = 9,
  Blue,
}

let c: Color = Color.Green;
let colorName = Color[10]; // should be blue

// type assertions
let someValue: any = "this is a string";
(someValue as string).
let strLength: number = (<string>someValue).length;
