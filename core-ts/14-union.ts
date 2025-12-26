type StringOrNumber = string | number;

type UserID = StringOrNumber;

function getUserById(id: UserID): string {
  if (typeof id === "string") {
    return id;
  }
  return id.toFixed(0);
}

// discriminated union
type LoadingState = {
  state: "loading";
};

type FailedState = {
  state: "failed";
  error: string;
};

type SuccessState = {
  state: "success";
  data: {
    title: string;
  };
};

export type DataState = LoadingState | FailedState | SuccessState;
