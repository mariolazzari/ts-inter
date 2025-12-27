type StringFromType<T> = T extends string ? string : never;

type TextType = StringFromType<"hello">; // string
type NumberType = StringFromType<42>; // never

type NullableString = string | null | undefined;
type NonNullableString<T> = T extends string ? T : never;
