/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useContext, useMemo, useState } from 'react';

const defaultValues = {
  globalTheme: 'light',
  toggleTheme: () => {},
};

const MyGlobalContext = React.createContext(defaultValues);

export const GlobalContextProvider: React.FC = ({ children }) => {
  const [globalTheme, setGlobalTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setGlobalTheme(globalTheme === 'light' ? 'dark' : 'light');
  };

  const contextValues = useMemo(
    () => ({ globalTheme, toggleTheme }),
    [toggleTheme, globalTheme]
  );

  return (
    <MyGlobalContext.Provider value={contextValues}>
      {children}
    </MyGlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(MyGlobalContext);
  return context;
};
