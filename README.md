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
