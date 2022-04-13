import { useGlobalContext } from 'global/GlobalContext';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import globalThemesPalette from './theme';

export const GlobalThemeProvider: React.FC = ({ children }) => {
  const { globalTheme: selectedTheme } = useGlobalContext();

  return (
    <ThemeProvider
      theme={globalThemesPalette[selectedTheme as 'light' | 'dark']}
    >
      {children}
    </ThemeProvider>
  );
};
