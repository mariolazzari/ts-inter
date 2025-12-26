type User = {
  id: string;
  name: string;
  age: number;
};

type Profile = Omit<User, "age">;
type Name = Omit<User, "id" | "age">;

type Staff = Pick<User, "id" | "age">;
