type First<T extends any[]> = T extends [] ? never : T[0];

type arr1 = ["a", "b", "c"];
type arr2 = [3, 2, 1];

type first1 = First<arr1>;
type first2 = First<arr2>;
type first3 = First<[]>;

type First2<T extends any[]> = T["length"] extends 0 ? never : T[0];
