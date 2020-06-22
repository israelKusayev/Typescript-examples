//literal types
type Move = "ROCK" | "PAPER" | "SCISSOR";

type First = {
  a: string;
};

type Second = {
  b: string;
};
// intersection types
type FirstAndSecond = First & Second;

// union types
type FirstOrSecond = First | Second;

interface Bird {
  fly();
  die();
}

interface Fish {
  swim();
  die();
}

function getSmallPet(): Fish | Bird {
  // ...
}

let pet = getSmallPet();
pet.die(); // okay
pet.swim(); // errors

//Not working
// if (pet.swim) {
//   pet.swim();
// } else if (pet.fly) {
//   pet.fly();
// }

// Working
// if ((pet as Fish).swim) {
//   (pet as Fish).swim();
// } else if ((pet as Bird).fly) {
//   (pet as Bird).fly();
// }

// Type Guards
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

// now OK
// if (isFish(pet)) {
//   pet.swim();
// } else {
//   pet.fly();
// }

function move(pet: Fish | Bird) {
  if ("swim" in pet) {
    return pet.swim();
  }
  return pet.fly();
}

// not need to put type assertion in Type Guards
function padLeft(value: string, padding: string | number) {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  }
  if (typeof padding === "string") {
    return padding + value;
  }
  throw new Error(`Expected string or number, got '${padding}'.`);
}

const dictionary = {
  header: "page header",
  footer: "page footer",
};

// typeof
type DictionaryType = typeof dictionary;

// Keyof
type DictionaryKeys = keyof typeof dictionary;

// generic
function getParam<T>(params: T) {
  return params;
}

const t = getParam(dictionary);

// generic and extend
function clone<T extends { [key: string]: any }>(params: T) {
  return { ...params };
}

clone<number>(1);

// generic and keyof
function printKey<T>(params: keyof T) {
  return params;
}

printKey<typeof dictionary>("footer");

//
const nestedDictionary = {
  ...dictionary,
  nested: { a: "aa", b: "bb" },
};

type NestedDictionaryType = typeof nestedDictionary["nested"];

// valueOf

type ValueOf<T> = T[keyof T];

// null types
// type assertion
// ! operator

// mapped types
type Keys = "option1" | "option2";
type Flags = { [K in Keys]: boolean };
