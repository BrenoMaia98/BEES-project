import { BreweryStateValue } from 'pages/Breweries/Context/BreweryContextTypes';

export const mockDefaultValues: BreweryStateValue = {
  searchString: '',
  breweriesList: [],
  breweriesDetail: null,
  autocompleteSuggestion: [],
};

export const mockContextDefaultValue = {
  state: mockDefaultValues,
  listBreweries: jest.fn(),
  deleteBreweryById: jest.fn(),
  addMoreInfo: jest.fn(),
  removeInfoByIndex: jest.fn(),
};
