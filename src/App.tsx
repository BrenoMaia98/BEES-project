import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from 'routes/Routes';
import { GlobalContextProvider } from 'global/GlobalContext';
import { GlobalThemeProvider } from 'global/theme/globalThemeProvider';

function App() {
  return (
    <BrowserRouter>
      <GlobalContextProvider>
        <GlobalThemeProvider>
          <Routes />
        </GlobalThemeProvider>
      </GlobalContextProvider>
    </BrowserRouter>
  );
}

export default App;
