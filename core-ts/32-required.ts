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
console.log(mario);
