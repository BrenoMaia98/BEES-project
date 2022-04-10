/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useContext, useMemo, useState } from 'react';

type MyGlobalContextValue = {
  globalTheme: 'light' | 'dark';
  toggleTheme: () => void;
  userName: string;
  setUserName: (param: string) => void;
};

const defaultValues: MyGlobalContextValue = {
  globalTheme: 'light',
  toggleTheme: () => {},
  userName: '',
  setUserName: (name: string) => {},
};

const MyGlobalContext =
  React.createContext<MyGlobalContextValue>(defaultValues);

export const GlobalContextProvider: React.FC = ({ children }) => {
  const [globalTheme, setGlobalTheme] = useState<'light' | 'dark'>('light');
  const [userName, setUserName] = useState('');

  const toggleTheme = () => {
    setGlobalTheme(globalTheme === 'light' ? 'dark' : 'light');
  };

  const contextValues = useMemo(
    () => ({ globalTheme, toggleTheme, userName, setUserName }),
    [globalTheme, userName]
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
