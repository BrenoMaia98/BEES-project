import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { GlobalThemeProvider } from 'global/theme/globalThemeProvider';
import { BreweryCard } from 'pages/Breweries/components/BreweryCard/BreweryCard';
import { BreweryDetail } from 'services/services/BreweriesService/type.BreweriesService';
import { IconsDataTestIdEnum } from 'assets/icons';

const mockBreweryDetails: BreweryDetail = {
  id: 299,
  name: 'Almanac Beer Company',
  breweryType: 'micro',
  street: '651B W Tower Ave',
  city: 'Alameda',
  state: 'California',
  countyProvince: '',
  postalCode: '94501-5047',
  country: 'United States',
  phone: '4159326531',
  websiteUrl: 'http://almanacbeer.com',
  moreInfo: [],
};

const renderBreweryDetail = (): RenderResult => {
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
      const { queryByTestId } = renderBreweryDetail();

      const component = queryByTestId(testId);

      expect(component).not.toBeNull();
    });
  });
});
