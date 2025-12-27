type Len<T extends any[]> = T["length"];

type toyota = ["aygo", "yaris", "corolla"];
type fender = ["Stratocaster", "Telecaster"];

type toyotaLen = Len<toyota>;
type fenderLen = Len<fender>;
