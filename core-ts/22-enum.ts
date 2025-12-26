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
console.log(user); // Output: { name: 'Alice', status: 1 }
