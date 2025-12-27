type MyReadonly<T> = {
  readonly [K in keyof T]: T[K];
};

type Todo = {
  title: string;
  description: string;
};

const todo: MyReadonly<Todo> = {
  title: "title",
  description: "description",
};

// todo.title = "" -> error
