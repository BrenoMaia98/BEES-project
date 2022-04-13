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
  deleteBreweryById: (breweryId: string | number) => void;
  addMoreInfo: (param: { breweryId: string | number; newInfo: string }) => void;
  removeInfoByIndex: (param: {
    breweryId: string | number;
    infoIndex: number;
  }) => void;
};

export enum BreweryActionType {
  SET_SEARCH_VALUE = 'SET_SEARCH_VALUE',
  SET_BREWERIES_LIST = 'SET_BREWERIES_LIST',
  CONCAT_BREWERIES_LIST = 'CONCAT_BREWERIES_LIST',
  SET_BREWERIES_DETAIL = 'SET_BREWERIES_DETAIL',
  SET_AUTOCOMPLETE_SUGGESTION = 'SET_AUTOCOMPLETE_SUGGESTION',
  REMOVE_BREWERY_BY_ID = 'REMOVE_BREWERY_BY_ID',
  ADD_MORE_INFO_TO_BREWERY = 'ADD_MORE_INFO_TO_BREWERY',
  REMOVE_INFO_FROM_BREWERY = 'REMOVE_INFO_FROM_BREWERY',
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
    }
  | {
      type: BreweryActionType.REMOVE_BREWERY_BY_ID;
      payload: { id: string | number };
    }
  | {
      type: BreweryActionType.ADD_MORE_INFO_TO_BREWERY;
      payload: { breweryId: string | number; newInfo: string };
    }
  | {
      type: BreweryActionType.REMOVE_INFO_FROM_BREWERY;
      payload: { breweryId: string | number; infoIndex: number };
    };
