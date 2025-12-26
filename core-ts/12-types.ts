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
