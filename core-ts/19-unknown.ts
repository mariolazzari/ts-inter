let vAny: any = 10;
let vUnknown: unknown = 10;

vAny = true;
vAny = "string";
vAny = [];

vUnknown = true;
vUnknown = "string";
vUnknown = [];

// invalid assignments
// let s1: string = vUnknown;
// let n1: number = vUnknown + 10;
// vUnknown.toUpperCase();

const printUnknown = (val: unknown) => {
  if (typeof val === "string") {
    console.log(val.toUpperCase());
    return;
  }
  console.log("Not a string:", val);
};
