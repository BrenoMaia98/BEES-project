import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { GlobalThemeProvider } from 'global/theme/globalThemeProvider';
import { BreweriesPage } from 'pages/Breweries/Breweries';
import { useBreweryContext } from 'pages/Breweries/Context/BreweriesContext';
import { BreweryDetail } from 'services/services/BreweriesService/type.BreweriesService';
import {
  mockContextDefaultValue,
  mockDefaultValues,
} from '__mock__/breweriesContextMocks';

const mockListBreweries = jest.fn();

jest.mock('pages/Breweries/Context/BreweriesContext', () => ({
  ...jest.requireActual('pages/Breweries/Context/BreweriesContext'),
  useBreweryContext: jest.fn(),
}));

const renderComponent = (): RenderResult => {
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

describe('Breweries Page', () => {
  it('Should list breweries on load', async () => {
    (useBreweryContext as jest.Mock).mockImplementation(() => ({
      ...mockContextDefaultValue,
      listBreweries: mockListBreweries,
    }));

    renderComponent();

    expect(mockListBreweries).toHaveBeenCalledTimes(1);
  });

  it('Should display breweries list correctly', async () => {
    (useBreweryContext as jest.Mock).mockImplementation(() => ({
      ...mockContextDefaultValue,
      state: {
        ...mockDefaultValues,
        breweriesList: Array(5)
          .fill(null)
          .map((_, index) => ({
            ...mockBreweryDetails,
            id: index,
          })),
      },
    }));

    const { queryAllByTestId } = renderComponent();

    const cards = queryAllByTestId('brewery-card');

    expect(cards.length).toBe(5);
  });
});
