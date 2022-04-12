import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { GlobalThemeProvider } from 'global/theme/globalThemeProvider';
import { BreweryCard } from 'pages/Breweries/components/BreweryCard/BreweryCard';
import { IconsDataTestIdEnum } from 'assets/icons';
import { mockBreweryDetails } from '__mock__/breweriesMockObjs';

const renderComponent = (): RenderResult => {
  return render(
    <GlobalThemeProvider>
      <BreweryCard {...mockBreweryDetails} />
    </GlobalThemeProvider>
  );
};

const testIds = {
  title: 'brewery-title',
  removeIcon: IconsDataTestIdEnum.TrashIcon,
  address: 'brewery-address',
  breweryTypeTag: 'brewery-brewery-type-tag',
  zipcodeTag: 'brewery-zipcode-tag',
  phoneTag: 'brewery-phone-tag',
  addMoreInfoTag: 'brewery-add-more-info-tag',
};

describe('HeaderApp', () => {
  describe('Should display', () => {
    it.each`
      componentName         | testId
      ${'title'}            | ${testIds.title}
      ${'remove icon'}      | ${testIds.removeIcon}
      ${'address'}          | ${testIds.address}
      ${'brewery type tag'} | ${testIds.breweryTypeTag}
      ${'zipcode tag'}      | ${testIds.zipcodeTag}
      ${'phone tag'}        | ${testIds.phoneTag}
      ${'addMoreInfo tag'}  | ${testIds.addMoreInfoTag}
    `('$componentName', ({ testId }) => {
      const { queryByTestId } = renderComponent();

      const component = queryByTestId(testId);

      expect(component).not.toBeNull();
    });
  });
});
