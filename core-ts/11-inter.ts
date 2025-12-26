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
