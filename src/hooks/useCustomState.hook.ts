import { Dispatch, SetStateAction, useState } from 'react';

type CustomState<T> = Record<keyof T, string>;

type StateUpdater<T> = Dispatch<SetStateAction<CustomState<T>>>;

export function useCustomState<T>(
  initialState: T
): [CustomState<T>, StateUpdater<T>] {
  const [state, setState] = useState<CustomState<T>>(() => {
    const initialCustomState = {} as CustomState<T>;
    for (const key in initialState) {
      if (Object.prototype.hasOwnProperty.call(initialState, key)) {
        initialCustomState[key] = initialState[key] as string;
      }
    }
    return initialCustomState;
  });

  return [state, setState];
}
