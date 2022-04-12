/* eslint-disable @typescript-eslint/ban-types */
import { waitFor } from '@testing-library/react';
import {
  act,
  Renderer,
  renderHook,
  RenderHookResult,
} from '@testing-library/react-hooks';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {
  BreweryContextProvider,
  useBreweryContext,
} from 'pages/Breweries/Context/BreweriesContext';
import { ContextDefaultValue } from 'pages/Breweries/Context/BreweryContextTypes';
import { baseUrl } from 'services/api';
import {
  mockBreweriesListResponseApi,
  mockMappedResponseBreweriesListApi,
} from '__mock__/breweriesMockObjs';

const apiMock = new MockAdapter(axios);
const renderContext = (): RenderHookResult<
  {},
  ContextDefaultValue,
  Renderer<{}>
> => {
  apiMock
    .onGet(`${baseUrl}/breweries`)
    .reply(200, mockBreweriesListResponseApi);

  return renderHook(useBreweryContext, {
    wrapper: BreweryContextProvider,
  });
};

describe('Breweries Context', () => {
  const loadBreweriesContext = async (
    context: RenderHookResult<{}, ContextDefaultValue, Renderer<{}>>
  ) => {
    act(() => {
      context.result.current.listBreweries();
    });

    await waitFor(() =>
      expect(context.result.current.state.breweriesList).toStrictEqual(
        mockMappedResponseBreweriesListApi
      )
    );
  };

  it('Should add one info to a specific brewery on method addMoreInfo', async () => {
    const context = renderContext();

    const addParam = {
      context,
      id: '1',
      info: 'new info',
    };

    await loadBreweriesContext(context);

    act(() => {
      context.result.current.addMoreInfo({
        breweryId: addParam.id,
        newInfo: addParam.info,
      });
    });

    const updatedBrewery = context.result.current.state.breweriesList.find(
      (item) => item.id === addParam.id
    );

    expect(updatedBrewery?.moreInfo).toStrictEqual([addParam.info]);
  });

});
