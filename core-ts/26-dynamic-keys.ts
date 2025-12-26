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
