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
