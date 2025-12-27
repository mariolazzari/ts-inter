type CustomRetirnType<T> = T extends (...args: any[]) => infer T ? T : any;

type A = CustomRetirnType<() => string>; // string
type B = CustomRetirnType<(x: number, y: number) => boolean>; // boolean
type C = CustomRetirnType<string>; // any

type FirstArgument<T> = T extends (arg1: infer U, ...args: any[]) => any
  ? U
  : any;
type D = FirstArgument<(x: number, y: string) => void>; // number
type E = FirstArgument<() => void>; // any

type PromiseType<T> = T extends Promise<infer U> ? U : T;
type F = PromiseType<Promise<string>>; // string
type G = PromiseType<number>; // number

type ArrayElementType<T> = T extends Array<infer U> ? U : T;
type H = ArrayElementType<number[]>; // number
type I = ArrayElementType<string>; // string
