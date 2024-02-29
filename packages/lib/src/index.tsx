import { FC, ReactNode } from "react";

export interface Contextual<T> {
  Provider: FC<{ value: T; children: ReactNode }>;
  get: () => T;
}

let storedValue: any;

export function createContextual<T>(): Contextual<T> {
  const Provider: FC<{ value: T; children: ReactNode }> = ({ value, children }) => {
    storedValue = value;

    return <>{children}</>;
  };

  function get(): T {
    if (storedValue == null) {
      throw Error(`Unable to find contextual value in cache`);
    }

    return storedValue;
  }

  return { Provider, get };
}
