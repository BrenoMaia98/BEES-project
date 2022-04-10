/* eslint-disable camelcase */
import { api } from 'services/api';
import {
  AutocompleteItem,
  BreweryDetail,
  BreweryDetailResponseAPI,
} from './type.BreweriesService';

export class BreweriesService {
  private baseUrl = 'breweries';

  ListBreweries() {
    console.log('Service > ListBreweries');
    return api.get<BreweryDetailResponseAPI[]>(`${this.baseUrl}`);
  }

  GetBrewery(breweryId: string | number) {
    console.log('Service > GetBrewery');
    return api.get<BreweryDetailResponseAPI>(
      `${this.baseUrl}/${String(breweryId)}`
    );
  }

  SearchBreweries(searchString: string) {
    console.log('Service > SearchBreweries');
    return api.get<BreweryDetailResponseAPI[]>(
      `${this.baseUrl}/search?query=${searchString}`
    );
  }

  Autocomplete(autocompleteString: string) {
    console.log('Service > Autocomplete');
    return api.get<AutocompleteItem[]>(
      `${this.baseUrl}/autocomplete?query=${autocompleteString}`
    );
  }
}

export const mapBreweryDetailResponseAPI = ({
  brewery_type,
  city,
  country,
  id,
  name,
  phone,
  postal_code,
  state,
  street,
  website_url,
  county_province,
}: BreweryDetailResponseAPI): BreweryDetail => ({
  id,
  name,
  breweryType: brewery_type,
  street,
  city,
  state,
  countyProvince: county_province,
  postalCode: postal_code,
  country,
  phone,
  websiteUrl: website_url,
});
