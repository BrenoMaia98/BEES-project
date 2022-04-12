import React from 'react';
import { render, RenderResult, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { GlobalThemeProvider } from 'global/theme/globalThemeProvider';
import { BreweriesPage } from 'pages/Breweries/Breweries';
import { useBreweryContext } from 'pages/Breweries/Context/BreweriesContext';
import { BreweryStateValue } from 'pages/Breweries/Context/BreweryContextTypes';
import { BreweryDetail } from 'services/services/BreweriesService/type.BreweriesService';

const mockListBreweries = jest.fn();

jest.mock('pages/Breweries/Context/BreweriesContext', () => ({
  ...jest.requireActual('pages/Breweries/Context/BreweriesContext'),
  useBreweryContext: jest.fn(),
}));

const renderBreweriesPage = (): RenderResult => {
  return render(
    <MemoryRouter>
      <GlobalThemeProvider>
        <BreweriesPage />
      </GlobalThemeProvider>
    </MemoryRouter>
  );
};

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

const defaultValues: BreweryStateValue = {
  searchString: '',
  breweriesList: [],
  breweriesDetail: null,
  autocompleteSuggestion: [],
};

export const contextDefaultValue = {
  state: defaultValues,
  listBreweries: mockListBreweries,
  getBreweryById: jest.fn(),
  searchBreweriesByName: jest.fn(),
  getSearchSuggestionList: jest.fn(),
  deleteBreweryById: jest.fn(),
  addMoreInfo: jest.fn(),
  removeInfoByIndex: jest.fn(),
};

describe('Breweries Page', () => {
  it('Should list breweries on load', async () => {
    (useBreweryContext as jest.Mock).mockImplementation(
      () => contextDefaultValue
    );

    renderBreweriesPage();

    expect(mockListBreweries).toHaveBeenCalledTimes(1);
  });

  it('Should display breweries list correctly', async () => {
    (useBreweryContext as jest.Mock).mockImplementation(() => ({
      ...contextDefaultValue,
      state: {
        ...defaultValues,
        breweriesList: Array(5)
          .fill(null)
          .map((_, index) => ({
            ...mockBreweryDetails,
            id: index,
          })),
      },
    }));

    const { queryAllByTestId } = renderBreweriesPage();

    const cards = queryAllByTestId('brewery-card');

    expect(cards.length).toBe(5);
  });
});
