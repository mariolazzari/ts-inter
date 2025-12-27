type If<T extends boolean, A, B> = T extends true ? A : B;

type A = If<true, "a", "b">;
type B = If<false, "a", "b">;
