import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { IconsDataTestIdEnum } from 'assets/icons';
import { HeaderApp } from 'components/HeaderApp/HeaderApp';
import { GlobalThemeProvider } from 'global/theme/globalThemeProvider';
import { GlobalContextProvider } from 'global/GlobalContext';
import { MemoryRouter } from 'react-router-dom';

const renderComponent = (): RenderResult => {
  return render(
    <MemoryRouter>
      <GlobalContextProvider>
        <GlobalThemeProvider>
          <HeaderApp />
        </GlobalThemeProvider>
      </GlobalContextProvider>
    </MemoryRouter>
  );
};

const testIds = {
  username: 'header-username',
  arrowBack: IconsDataTestIdEnum.ArrowBackIcon,
  themeSwitch: 'toggle-theme-switch',
};

describe('HeaderApp', () => {
  describe('Should display', () => {
    it.each`
      componentName         | testId
      ${'user name'}        | ${testIds.username}
      ${'arrow back'}       | ${testIds.arrowBack}
      ${'switch app theme'} | ${testIds.themeSwitch}
    `('$componentName', ({ testId }) => {
      const { queryByTestId } = renderComponent();

      const component = queryByTestId(testId);

      expect(component).not.toBeNull();
    });
  });
});
