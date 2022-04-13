import React from 'react';
import { fireEvent, render, RenderResult } from '@testing-library/react';
import { GlobalThemeProvider } from 'global/theme/globalThemeProvider';
import { BreweryCard } from 'pages/Breweries/components/BreweryCard/BreweryCard';
import { IconsDataTestIdEnum } from 'assets/icons';
import { mockBreweryDetails } from '__mock__/breweriesMockObjs';
import '@testing-library/jest-dom/extend-expect';
import { useBreweryContext } from 'pages/Breweries/Context/BreweriesContext';
import { mockContextDefaultValue } from '__mock__/breweriesContextMocks';

const mockDeleteBreweryById = jest.fn();
jest.mock('pages/Breweries/Context/BreweriesContext', () => ({
  ...jest.requireActual('pages/Breweries/Context/BreweriesContext'),
  useBreweryContext: jest.fn(),
}));

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
  beforeEach(() => {
    (useBreweryContext as jest.Mock).mockImplementation(() => ({
      ...mockContextDefaultValue,
      deleteBreweryById: mockDeleteBreweryById,
    }));
  });

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
  it('Remove icon should have an onclick function', () => {
    const { queryByTestId } = renderComponent();

    const icon = queryByTestId(testIds.removeIcon);

    expect(icon?.onclick).toBeDefined();
  });

  it('Should call remove function from context from TrashIcon', () => {
    const { getByTestId } = renderComponent();

    const icon = getByTestId(testIds.removeIcon);

    fireEvent.click(icon);
    expect(mockDeleteBreweryById).toHaveBeenCalledTimes(1);
  });
});
