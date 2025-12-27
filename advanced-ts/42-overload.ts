function great(person: string): string;
function great(person: string[]): string[];

function great(person: unknown): unknown {
  if (typeof person === "string") {
    return `Hello, ${person}!`;
  }

  if (Array.isArray(person)) {
    return person.map(name => `Hello, ${name}!`);
  }

  throw new Error("Invalid input");
}
