import { mapBreweryDetailResponseAPI } from 'services/services/BreweriesService/BreweriesService';
import {
  AutocompleteItem,
  BreweryDetail,
  BreweryDetailResponseAPI,
} from 'services/services/BreweriesService/type.BreweriesService';

export const mockBreweryDetails: BreweryDetail = {
  id: '299',
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

export const mockBreweryResponseAPI: BreweryDetailResponseAPI = {
  id: '299',
  name: 'Almanac Beer Company',
  brewery_type: 'micro',
  street: '651B W Tower Ave',
  city: 'Alameda',
  state: 'California',
  county_province: '',
  postal_code: '94501-5047',
  country: 'United States',
  phone: '4159326531',
  website_url: 'http://almanacbeer.com',
};

export const mockBreweriesListResponseApi: BreweryDetailResponseAPI[] = Array(5)
  .fill(null)
  .map((_, index) => ({ ...mockBreweryResponseAPI, id: String(index) }));

export const mockMappedResponseBreweriesListApi: BreweryDetail[] =
  mockBreweriesListResponseApi.map((item) => mapBreweryDetailResponseAPI(item));

export const mockAutocompleteList: AutocompleteItem[] = Array(5)
  .fill(null)
  .map((_, index) => ({ id: index, name: 'Almanac Beer Company' }));
