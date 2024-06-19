'use client';
import {
  createContext,
  useState,
  useContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react';

type CountContextType = {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
};
const CountContext = createContext<CountContextType | undefined>(undefined);

export function CountWrapper({ children }: { children: ReactNode }) {
  let [count, setCount] = useState<number>(50);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
}

export function useCountContext() {
  const countContext = useContext(CountContext);
  if (countContext === undefined) {
    throw new Error('useCountContext must be inside a CountWrapper');
  }
  return countContext;
}
