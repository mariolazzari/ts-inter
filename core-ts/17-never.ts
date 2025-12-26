const throwError = (message: string): never => {
  console.log(message);
  throw new Error(message);
};

type Result = "success" | "error";

// exhaustiveness check using never
const handleResult = (result: Result) => {
  switch (result) {
    case "success":
      return "Operation was successful";

    case "error":
      return "An error occurred";

    default:
      return throwError(`Unhandled case: ${result}`);
  }
};
