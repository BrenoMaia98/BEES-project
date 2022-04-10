/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useContext, useEffect, useMemo, useReducer } from 'react';
import {
  BreweriesService,
  mapBreweryDetailResponseAPI,
} from 'services/services/BreweriesService/BreweriesService';
import {
  BreweriesAction,
  BreweryActionType,
  BreweryStateValue,
  ContextDefaultValue,
} from './BreweryContextTypes';

const defaultValues: BreweryStateValue = {
  searchString: '',
  breweriesList: [],
  breweriesDetail: null,
  autocompleteSuggestion: [],
};

const contextDefaultValue = {
  state: defaultValues,
  listBreweries: async () => {},
  getBreweryById: async (_: string | number) => {},
  searchBreweriesByName: async (_: string) => {},
  getSearchSuggestionList: async (_: string) => {},
  deleteBreweryById: async (_: string | number) => {},
};

const MyBreweryContext =
  React.createContext<ContextDefaultValue>(contextDefaultValue);

const breweriesReducer = (
  state: BreweryStateValue,
  action: BreweriesAction
): BreweryStateValue => {
  const { payload, type } = action;
  console.log({ payload, type });
  switch (type) {
    case 'SET_AUTOCOMPLETE_SUGGESTION':
      return {
        ...state,
        autocompleteSuggestion: payload || state.autocompleteSuggestion,
      };
    case 'SET_BREWERIES_DETAIL':
      return {
        ...state,
        breweriesDetail: payload || state.breweriesDetail,
      };
    case 'SET_BREWERIES_LIST':
      return {
        ...state,
        breweriesList: payload || state.breweriesList,
      };
    case 'CONCAT_BREWERIES_LIST':
      return {
        ...state,
        breweriesList: [...state.breweriesList, ...(payload || [])],
      };
    case 'SET_SEARCH_VALUE':
      return {
        ...state,
        searchString: payload || state.searchString,
      };
    case 'REMOVE_BREWERY_BY_ID':
      return {
        ...state,
        breweriesList: state.breweriesList.filter(
          (brewery) => brewery.id !== payload.id
        ),
      };
    default:
      return state;
  }
};

export const BreweryContextProvider: React.FC = ({ children }) => {
  const service = new BreweriesService();
  const [state, dispatch] = useReducer(breweriesReducer, defaultValues);

  useEffect(() => {
    if (state.searchString) {
      service.SearchBreweries(state.searchString).then((resp) => {
        dispatch({
          type: BreweryActionType.SET_BREWERIES_LIST,
          payload: resp.data.map((item) => mapBreweryDetailResponseAPI(item)),
        });
      });
    }
  }, [state.searchString]);

  const listBreweries = async () => {
    console.log('Context ListBreweries > ');
    const resp = await service.ListBreweries();
    dispatch({
      type: BreweryActionType.SET_BREWERIES_LIST,
      payload: resp.data.map((item) => mapBreweryDetailResponseAPI(item)),
    });
  };

  const getBreweryById = async (breweryId: string | number) => {
    console.log('Context GetBreweryById > ');
    const resp = await service.GetBrewery(breweryId);
    dispatch({
      type: BreweryActionType.SET_BREWERIES_DETAIL,
      payload: mapBreweryDetailResponseAPI(resp.data),
    });
  };

  const searchBreweriesByName = async (searchString: string) => {
    console.log('Context > SearchBreweriesByName ');
    dispatch({
      type: BreweryActionType.SET_SEARCH_VALUE,
      payload: searchString,
    });
  };

  const getSearchSuggestionList = async (searchString: string) => {
    console.log('Context > GetSearchSuggestionList ');
    const resp = await service.Autocomplete(searchString);
    dispatch({
      type: BreweryActionType.SET_AUTOCOMPLETE_SUGGESTION,
      payload: resp.data,
    });
  };

  const deleteBreweryById = async (id: string | number) => {
    console.log('Context > onSearchStringChange ');
    dispatch({
      type: BreweryActionType.REMOVE_BREWERY_BY_ID,
      payload: { id },
    });
  };

  const contextValues = useMemo(
    () => ({
      state,
      listBreweries,
      getBreweryById,
      searchBreweriesByName,
      getSearchSuggestionList,
      deleteBreweryById,
    }),
    [state]
  );

  return (
    <MyBreweryContext.Provider value={contextValues}>
      {children}
    </MyBreweryContext.Provider>
  );
};

export const useBreweryContext = () => {
  const context = useContext(MyBreweryContext);
  return context;
};