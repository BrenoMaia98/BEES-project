import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import Home from 'pages/Home/Home';
import { MemoryRouter } from 'react-router-dom';
import { GlobalContextProvider } from 'global/GlobalContext';
import { GlobalThemeProvider } from 'global/theme/globalThemeProvider';

const renderHomepage = (): RenderResult => {
  // const history = createMemoryHistory();
  return render(
    <MemoryRouter>
      <GlobalContextProvider>
        <GlobalThemeProvider>
          <Home />
        </GlobalThemeProvider>
      </GlobalContextProvider>
    </MemoryRouter>
  );
};
const testIds = {
  input: 'name-input',
  checkbox: 'age-checkbox',
  submitButton: 'submit-button',
};

describe('Home Form', () => {
  it('test', () => {
    expect(true).toBeTruthy();
  });
});
