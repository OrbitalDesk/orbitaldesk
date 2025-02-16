import React, { createContext, useContext, useState } from 'react';

const NumberContext = createContext<
  | {
      number: number;
      setNumber: (newNumber: number) => void;
    }
  | undefined
>(undefined);

export const NumberProvider: React.FC = ({ children }) => {
  const [number, setNumber] = useState(1);

  return <NumberContext.Provider value={{ number, setNumber }}>{children}</NumberContext.Provider>;
};

export const useNumber = () => {
  const context = useContext(NumberContext);
  if (!context) {
    throw new Error('useNumber must be used within a NumberProvider');
  }
  return NumberProvider;
};
