import { DataState } from "./14-union";

export const getState = (state: DataState) => {
  switch (state.state) {
    case "loading":
      return "Loading...";

    case "failed":
      return `Error: ${state.error}`;

    case "success":
      return `Title: ${state.data.title}`;
  }
};

const formatDate = (date: Date | string): string => {
  if (date instanceof Date) {
    return date.toUTCString();
  }
  return new Date(date).toUTCString();
};
