import {
  AutocompleteItem,
  BreweryDetail,
} from 'services/services/BreweriesService/type.BreweriesService';

export type BreweryStateValue = {
  searchString: string;
  breweriesList: Array<BreweryDetail>;
  breweriesDetail: BreweryDetail | null;
  autocompleteSuggestion: Array<AutocompleteItem>;
};

export type ContextDefaultValue = {
  state: BreweryStateValue;
  listBreweries: () => Promise<void>;
  getBreweryById: (breweryId: string | number) => Promise<void>;
  searchBreweriesByName: (searchString: string) => Promise<void>;
  getSearchSuggestionList: (searchString: string) => Promise<void>;
};

export enum BreweryActionType {
  SET_SEARCH_VALUE = 'SET_SEARCH_VALUE',
  SET_BREWERIES_LIST = 'SET_BREWERIES_LIST',
  CONCAT_BREWERIES_LIST = 'CONCAT_BREWERIES_LIST',
  SET_BREWERIES_DETAIL = 'SET_BREWERIES_DETAIL',
  SET_AUTOCOMPLETE_SUGGESTION = 'SET_AUTOCOMPLETE_SUGGESTION',
}

export type BreweriesAction =
  | {
      type: BreweryActionType.SET_SEARCH_VALUE;
      payload: BreweryStateValue['searchString'];
    }
  | {
      type: BreweryActionType.SET_BREWERIES_LIST;
      payload: BreweryStateValue['breweriesList'];
    }
  | {
      type: BreweryActionType.CONCAT_BREWERIES_LIST;
      payload: BreweryStateValue['breweriesList'];
    }
  | {
      type: BreweryActionType.SET_BREWERIES_DETAIL;
      payload: BreweryStateValue['breweriesDetail'];
    }
  | {
      type: BreweryActionType.SET_AUTOCOMPLETE_SUGGESTION;
      payload: BreweryStateValue['autocompleteSuggestion'];
    };
