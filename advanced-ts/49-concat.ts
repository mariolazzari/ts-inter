type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U];

type Result = Concat<[1], [2]>;
