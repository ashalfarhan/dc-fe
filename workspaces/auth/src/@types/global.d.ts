type Flatten<T> = {
  [K in keyof T]: T[K];
};

type RequiredPick<T, K extends keyof T> = Flatten<
  {
    [P in K]-?: T[P];
  } & Omit<T, K>
>;

type NonNullablePick<T, K extends keyof T> = Flatten<
  {
    [P in K]-?: NonNullable<T[P]>;
  } & Omit<T, K>
>;
