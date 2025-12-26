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
