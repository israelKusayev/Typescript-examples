interface PageInfo {
  title: string;
}

type Page = "home" | "about" | "contact";

// Pick<T,K>

interface Todo extends c {
  completed: boolean;
}

interface c {
  title: string;
  description: string;
}

type TodoPreview = Pick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};
// Omit<T,K>

type TodoPreviewOmit = Omit<Todo, "description">;

// Exclude<T,U>

type Drinks = "a" | "b" | "c" | "d";
type OrensDrinks = "b" | "c";

type T00 = Exclude<Drinks, OrensDrinks>; // "b" | "c"
type T11 = Exclude<"a" | "b" | "c", "a" | "b">; // "c"
type T22 = Exclude<string | number | (() => void), Function>; // string | number

// Extract<T,U>

type T000 = Extract<"a" | "b" | "c", "a" | "f">; // "a"
type T111 = Extract<string | number | (() => void), Function>; // () => void

type numbersAndStrings = "a" | "b" | "c" | 1 | 2;
type t = Extract<numbersAndStrings, number>;

// NonNullable<T>
// only works when strict null check is true

type AAA = { [k: string]: string } | undefined | null;

function AAAA(params: NonNullable<AAA>) {
  params.s.charAt(1);
}
type T0 = NonNullable<AAA>; // string | number
type T1 = NonNullable<string[] | null | undefined>; // string[]

// Parameters<T>
// ConstructorParameters<T>
// ReturnType<T>
// InstanceType<T>
// Required<T>
// ThisParameterType
// OmitThisParameter
// ThisType<T>

// Partial<T>

// https://github.com/piotrwitek/utility-types
