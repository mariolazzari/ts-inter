const addId = <T>(obj: T): T & { id: string } => {
  const id = Math.random().toString(16);
  return { ...obj, id };
};

type User<T> = {
  name: string;
  data: T;
};

const user: User<{ meta: string }> = {
  name: "Mario",
  data: {
    meta: "meta",
  },
};

const userWithId = addId(user);
