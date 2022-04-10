/* eslint-disable camelcase */
export type BreweryDetailResponseAPI = {
  id: string | number;
  name: string;
  brewery_type: string;
  street: string;
  // address_2?: string;
  // address_3?: string;
  city: string;
  state: string;
  county_province?: string;
  postal_code: string;
  country: string;
  // longitude: string;
  // latitude: string;
  phone: string;
  website_url: string;
  // updated_at: string;
  // created_at: string;
};

export type AutocompleteItem = {
  id: string | number;
  name: string;
};

export type BreweryDetail = {
  id: string | number;
  name: string;
  breweryType: string;
  street: string;
  // address2?: string;
  // address3?: string;
  city: string;
  state: string;
  countyProvince?: string;
  postalCode: string;
  country: string;
  // longitude: string;
  // latitude: string;
  phone: string;
  websiteUrl: string;
  // updatedAt: string;
  // createdAt: string;
};
