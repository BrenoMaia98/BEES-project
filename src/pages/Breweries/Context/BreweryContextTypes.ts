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
  deleteBreweryById: (breweryId: string | number) => void;
  addMoreInfo: (param: { breweryId: string | number; newInfo: string }) => void;
  removeInfoByIndex: (param: {
    breweryId: string | number;
    infoIndex: number;
  }) => void;
};

export enum BreweryActionType {
  SET_BREWERIES_LIST = 'SET_BREWERIES_LIST',
  REMOVE_BREWERY_BY_ID = 'REMOVE_BREWERY_BY_ID',
  ADD_MORE_INFO_TO_BREWERY = 'ADD_MORE_INFO_TO_BREWERY',
  REMOVE_INFO_FROM_BREWERY = 'REMOVE_INFO_FROM_BREWERY',
}

export type BreweriesAction =
  | {
      type: BreweryActionType.SET_BREWERIES_LIST;
      payload: BreweryStateValue['breweriesList'];
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
