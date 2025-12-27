# TypeScript coding interview

## TypeScript introduction

### TypeScript setup

```sh
pnpm create vite@latest
```

### JavaScript vs TypeScript

- JavaScript
  - Dynamically typed
  - Type errors happen at runtime
- TypeScript
  - Statically typed (optional but recommended)
  - Type errors caught at compile time

### Does TypeScript improve your code?

TypeScript doesn’t magically make code perfect—but it:

- Prevents entire classes of bugs
- Makes codebases easier to maintain
- Pays off more as your project grows

## Core TypeScript

### How to define basic types inside Typescript?

```ts
const myName: string = "Mario";
const age: number = 30;
const isAdmin: boolean = true;

const user: {
  name: string;
  age: number;
  isAdmin: boolean;
} = {
  name: myName,
  age,
  isAdmin,
};

const myNumbers: number[] = [1, 2, 3, 4, 5];
```

### Explicit vs implicit types

Write the type yourself vs letting TypeScript infer it

```ts
const myName = "Mario";
const age = 30;
const isAdmin = true;
```

### Type function getFullName

```ts
function getFullName(fistName: string, lastName: string): string {
  return `${fistName} ${lastName}`;
}
```

### What is interface

Contract that specifies what properties and methods an object should have

```ts
interface User {
  name: string;
  age: number;
  isAdmin: boolean;
}

const user: User = {
  name: "Mario",
  age: 30,
  isAdmin: true,
};

function getUserInfo(user: User): string {
  return `Name: ${user.name}, Age: ${user.age}, Admin: ${user.isAdmin}`;
}
```

### Types in TypeScript

Describe what kind of values your variables, functions, or objects can hold

```ts
type Numbers = number[];

const nums: Numbers = [1, 2, 3, 4, 5];

type User = {
  name: string;
  age: number;
  isAdmin: boolean;
};

const user: User = {
  name: "Mario",
  age: 30,
  isAdmin: true,
};

type Users = User[];

const users: Users = [
  {
    name: "Mario",
    age: 30,
    isAdmin: true,
  },
  {
    name: "Luigi",
    age: 28,
    isAdmin: false,
  },
];
```

### Types vs interfaces

Two ways to define the shape of data, but they have subtle differences

Use interface:

- When defining object shapes
- When you want extensibility or merging
- When designing public APIs

Use type:

- For unions or intersections
- For tuples
- For primitive aliases or complex compositions

```ts
interface IUser {
  id: number;
  name: string;
}

type User = {
  id: number;
  name: string;
};

// interface can be extended
interface IPerson {
  name: string;
}

interface IEmployee extends IPerson {
  employeeId: number;
}

// type composition using intersection
type PersonType = {
  name: string;
};

type EmployeeType = PersonType & {
  employeeId: number;
};

// interface merging
interface Car {
  make: string;
}

interface Car {
  model: string;
}

const myCar: Car = {
  make: "Toyota",
  model: "Corolla",
};

// type merging
type Person = { name: string };
type Employee = Person & { employeeId: number };

// class implementing interface
class Manager implements IEmployee {
  name: string;
  employeeId: number;

  constructor(name: string, employeeId: number) {
    this.name = name;
    this.employeeId = employeeId;
  }
}
```

### What is union

Union is a type that allows a value to be one of several possible types

```ts
type StringOrNumber = string | number;

type UserID = StringOrNumber;

function getUserById(id: UserID): string {
  if (typeof id === "string") {
    return id;
  }
  return id.toFixed(0);
}

// discriminated union
type LoadingState = {
  state: "loading";
};

type FailedState = {
  state: "failed";
  error: string;
};

type SuccessState = {
  state: "success";
  data: {
    title: string;
  };
};

type DataState = LoadingState | FailedState | SuccessState;
```

### Narrow union

Type narrowing in TypeScript is how you reduce a broad type (like a union) into a more specific type so you can safely use type-specific properties or methods.

```ts
const getState = (state: DataState) => {
  switch (state.state) {
    case "loading":
      return "Loading...";

    case "failed":
      return `Error: ${state.error}`;

    case "success":
      return `Title: ${state.data.title}`;
  }
};

const formatDate = (date: Date | string): string => {
  if (date instanceof Date) {
    return date.toUTCString();
  }
  return new Date(date).toUTCString();
};
```

### What is void

Type used to indicate that a function does not return a meaningful value

```ts
const log = (message: string): void => {
  console.log(message);
};
```

### What is never

Type that represents values that never occur.
It’s used when something cannot happen or a function never successfully returns.

```ts
const throwError = (message: string): never => {
  console.log(message);
  throw new Error(message);
};

// exhaustiveness check using never
const handleResult = (result: Result) => {
  switch (result) {
    case "success":
      return "Operation was successful";

    case "error":
      return "An error occurred";

    default:
      return throwError(`Unhandled case: ${result}`);
  }
};
```

### What is any

Turns off type checking for a value.

```ts
const all = (val: any) => {
  return val;
};
```

### What is unknown

Type that represents a value whose type is not known yet, but unlike any, it is type-safe.

```ts
let vAny: any = 10;
let vUnknown: unknown = 10;

vAny = true;
vAny = "string";
vAny = [];

vUnknown = true;
vUnknown = "string";
vUnknown = [];

// invalid assignments
// let s1: string = vUnknown;
// let n1: number = vUnknown + 10;
// vUnknown.toUpperCase();

const printUnknown = (val: unknown) => {
  if (typeof val === "string") {
    console.log(val.toUpperCase());
    return;
  }
  console.log("Not a string:", val);
};
```

### DOM in TypeScript

DOM (Document Object Model) is fully typed, which means you get type safety, autocomplete, and error checking when working with browser APIs

```ts
const someEl: HTMLInputElement | null = document.querySelector(".foo");
if (someEl) {
  console.log(someEl.value);

  someEl.addEventListener("blur", (event: FocusEvent) => {
    const target = event.target as HTMLInputElement;
    console.log("Blurred:", target.value);
  });
}
```

### Classes in TypeScript

Blueprints for creating objects, just like in JavaScript—but with types, access control, and safer structure

```ts
interface IUser {
  getFullName(): string;
}

class User implements IUser {
  private readonly firstName: string;
  private readonly lastName: string;
  static readonly maxAge: number = 50;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Admin extends User {
  private readonly isAdmin: boolean;

  constructor(firstName: string, lastName: string, isAdmin: boolean) {
    super(firstName, lastName);
    this.isAdmin = isAdmin;
  }

  getAdminStatus(): boolean {
    return this.isAdmin;
  }
}

const user1 = new User("Mario", "Lazzari");
console.log(user1.getFullName()); // Mario Lazzari
console.log(User.maxAge); // 50

const admin1 = new Admin("Luigi", "Verdi", true);
console.log(admin1.getFullName());
console.log(admin1.getAdminStatus());
console.log(Admin.maxAge);
```

### What is enum

A way to define a set of named constants—useful when a variable can only have one value from a fixed list

```ts
enum Status {
  Active,
  Inactive,
  Pending,
}

let stat: Status = Status.Active;
console.log(stat); // Output: 0

stat = Status.Pending;
console.log(stat); // Output: 2

interface User {
  name: string;
  status: Status;
}

const user: User = {
  name: "Alice",
  status: Status.Inactive,
};
```

### What are generics

Generics let you write reusable, type-safe code that works with many types instead of just one

```ts
const addId = <T>(obj: T): T & { id: string } => {
  const id = Math.random().toString(16);
  return { ...obj, id };
};

type User<T> = {
  name: string;
  data: T;
};

const user: User<{ meta: string }> = {
  name: "Mario",
  data: {
    meta: "meta",
  },
};

const userWithId = addId(user);
```

### What is tuple

Fixed-length arrays where each position has a specific type: useful when the order matters

```ts
const names: [string, string, string] = ["Mario", "Mariarosa", "Maria"];
const failedResponse: [string, number] = ["Not found", 404];

console.log(names[0]);
```

### What is optional prop

Property that may or may not exist on an object

```ts
type User = {
  firstName: string;
  lastName: string;
  age?: number;
};

const mario: User = {
  firstName: "Mario",
  lastName: "Lazzari",
  age: 50,
};

const maria: User = {
  firstName: "Maria",
  lastName: "Lazzari",
};

console.log(mario.age?.toFixed(0));
```

### How to type dynamic keys

```ts
type StringMap = {
  [key: string]: string;
};

const labels: StringMap = {
  save: "Save",
  cancel: "Cancel",
};

type StringRecord = Record<string, string>;

const labels2: StringRecord = {
  save: "Save",
  cancel: "Cancel",
};

interface User {
  id: number;
  name: string;
  age: number;
}

const users: User[] = [
  { id: 1, name: "Jack", age: 20 },
  { id: 2, name: "John", age: 30 },
  { id: 3, name: "Mike", age: 50 },
];

const columns: Array<keyof User> = ["id", "name", "age"];

const result = users.map(user => {
  return columns.map(column => {
    return user[column];
  });
});

console.log("result", result);
```

### What is index signature

A way to type objects that have unknown or dynamic property names

```ts
type Names = {
  [key: string]: string;
};

const names: Names = {
  mario: "Mario",
  maria: "Maria",
};
```

### What is record type

Utility type used to create an object type where:

- keys come from a specific set
- values all have the same type

It’s a clean, readable alternative to index signatures.

```ts
type Names = Record<string, string>;

const names: Names = {
  mario: "Mario",
  maria: "Maria",
};

type NumericRecord = Record<string, number>;

const salary: NumericRecord = {
  annual: 50000,
  bonus: 10000,
};
```

### What is omit and pick?

Pick and Omit are utility types used to create new types from existing ones by selecting or excluding properties

```ts
type User = {
  id: string;
  name: string;
  age: number;
};

type Profile = Omit<User, "age">;
type Name = Omit<User, "id" | "age">;

type Staff = Pick<User, "id" | "age">;
```

### What is readonly

Modifier that makes a property immutable after it’s set: you can read it, but you cannot reassign it

```ts
type User = {
  id: number;
  name: string;
};

type ReadonlyUser = Readonly<User>;
```

### What is partial

Utility type that makes all properties of a type optional.

```ts
type User = {
  id: number;
  name: string;
};

const mario: Partial<User> = {
  name: "Mario",
};
```

### What is required?

Utility type that makes all properties of a type required

```ts
type User = {
  id: string;
  name?: string;
  age?: number;
};

const mario: Required<User> = {
  id: "1",
  name: "Mario",
  age: 50,
};
```

### TypeScript with React

```tsx
import type { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button">;

const Button = ({ children, ...props }: ButtonProps) => {
  return <button {...props}>{children}</button>;
};

export default Button;
```

### What is type inference

Process where the compiler automatically figures out the type of a variable, function return, or expression without you explicitly specifying it.

```ts
const x = 1;
const y = "hello";
const z = [1, 2, 3];

function add(a: number, b: number) {
  return a + b;
}
```

### What is literal type?

Type that represents exact values, rather than general type

```ts
const zero = 0;
const falsy = false;

type Easing = "ease-in" | "ease-out" | "ease-in-out";
type CardinalDirection = "North" | "East" | "South" | "West";

function animate(ease: Easing) {
  switch (ease) {
    case "ease-in":
      console.log("Animating with ease-in");
      break;
    case "ease-out":
      console.log("Animating with ease-out");
      break;
    case "ease-in-out":
      console.log("Animating with ease-in-out");
      break;
  }
}
```

### What is tsconfig

Configuration file for the TypeScript compiler: it tells TypeScript how to compile your code and how strict it should be
[Docs](https://www.typescriptlang.org/tsconfig/)

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["DOM", "ES2020"],
    "jsx": "react-jsx",
    "module": "ESNext",
    "moduleResolution": "Node",
    "strict": true,
    "skipLibCheck": true,
    "noEmit": true
  },
  "include": ["src"]
}
```

### Core components

#### Language

- Type syntax (string, number, union, interface, etc.)
- Type system rules (narrowing, inference, generics)
- Extensions on top of JavaScript

#### Compiler

- Type-checks your code
- Transforms TypeScript → JavaScript
- Reports errors

#### Service

- Autocomplete
- Inline errors
- Go-to-definition
- Rename symbol
- Refactoring
- Hover type info

### How do TypeScript transpile

```sh
tsc --help
```

### What is d.ts file

File that contains only type information

### What is map file

File that maps compiled/transpiled JavaScript back to the original source code

## Advanced TypeScript

### Function overloading

```ts
function great(person: string): string;
function great(person: string[]): string[];

function great(person: unknown): unknown {
  if (typeof person === "string") {
    return `Hello, ${person}!`;
  }

  if (Array.isArray(person)) {
    return person.map(name => `Hello, ${name}!`);
  }

  throw new Error("Invalid input");
}
```

### What is extends?

- classes (inheritance)
- extends in interfaces
- extends in generics
- extends in conditional types

```ts
type StringFromType<T> = T extends string ? string : never;

type TextType = StringFromType<"hello">; // string
type NumberType = StringFromType<42>; // never

type NullableString = string | null | undefined;
type NonNullableString<T> = T extends string ? T : never;
```
