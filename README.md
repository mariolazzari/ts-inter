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

```ts

```
