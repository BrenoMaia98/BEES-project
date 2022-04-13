/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useContext, useEffect, useMemo, useReducer } from 'react';
import BreweriesService, {
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

const MyBreweryContext = React.createContext<ContextDefaultValue>(
  {} as ContextDefaultValue
);

const breweriesReducer = (
  state: BreweryStateValue,
  action: BreweriesAction
): BreweryStateValue => {
  const { payload, type } = action;
  switch (type) {
    case 'SET_BREWERIES_LIST':
      return {
        ...state,
        breweriesList: payload || state.breweriesList,
      };

    case 'REMOVE_BREWERY_BY_ID':
      return {
        ...state,
        breweriesList: state.breweriesList.filter(
          (brewery) => brewery.id !== payload.id
        ),
      };
    case 'ADD_MORE_INFO_TO_BREWERY':
      return {
        ...state,
        breweriesList: state.breweriesList.map((brewery) => {
          if (brewery.id !== payload.breweryId) {
            return brewery;
          }
          return {
            ...brewery,
            moreInfo: [...brewery.moreInfo, payload.newInfo],
          };
        }),
      };
    case 'REMOVE_INFO_FROM_BREWERY':
      return {
        ...state,
        breweriesList: state.breweriesList.map((brewery) => {
          if (brewery.id !== payload.breweryId) {
            return brewery;
          }
          const newArray = [...brewery.moreInfo];
          newArray.splice(payload.infoIndex, 1);
          return {
            ...brewery,
            moreInfo: newArray,
          };
        }),
      };
    default:
      return state;
  }
};

export const BreweryContextProvider: React.FC = ({ children }) => {
  const service = new BreweriesService();
  const [state, dispatch] = useReducer(breweriesReducer, defaultValues);

  const listBreweries = async () => {
    const resp = await service.ListBreweries();
    dispatch({
      type: BreweryActionType.SET_BREWERIES_LIST,
      payload: resp.data.map((item) => mapBreweryDetailResponseAPI(item)),
    });
  };

  const deleteBreweryById = (id: string | number) => {
    dispatch({
      type: BreweryActionType.REMOVE_BREWERY_BY_ID,
      payload: { id },
    });
  };

  const addMoreInfo = ({
    breweryId,
    newInfo,
  }: {
    breweryId: string | number;
    newInfo: string;
  }) => {
    dispatch({
      type: BreweryActionType.ADD_MORE_INFO_TO_BREWERY,
      payload: { breweryId, newInfo },
    });
  };
  const removeInfoByIndex = ({
    breweryId,
    infoIndex,
  }: {
    breweryId: string | number;
    infoIndex: number;
  }) => {
    dispatch({
      type: BreweryActionType.REMOVE_INFO_FROM_BREWERY,
      payload: { breweryId, infoIndex },
    });
  };

  const contextValues = useMemo(
    () => ({
      state,
      listBreweries,
      deleteBreweryById,
      addMoreInfo,
      removeInfoByIndex,
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
