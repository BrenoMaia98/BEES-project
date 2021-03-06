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
const renderComponent = (): RenderHookResult<
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

  const addInfoToBreweryId = ({
    context,
    id = '1',
    info = 'new info',
  }: {
    context: RenderHookResult<{}, ContextDefaultValue, Renderer<{}>>;
    id?: string;
    info?: string;
  }) => {
    act(() => {
      context.result.current.addMoreInfo({
        breweryId: id,
        newInfo: info,
      });
    });
  };

  it('Function "addMoreInfo" - Should add one info to a specific brewery', async () => {
    const context = renderComponent();

    const addParam = {
      context,
      id: '1',
      info: 'new info',
    };

    await loadBreweriesContext(context);

    addInfoToBreweryId(addParam);

    const updatedBrewery = context.result.current.state.breweriesList.find(
      (item) => item.id === addParam.id
    );

    expect(updatedBrewery?.moreInfo).toStrictEqual([addParam.info]);
  });

  it('Function "removeInfoByIndex" - Should remove one info from a specif brewery on method ', async () => {
    const context = renderComponent();

    await loadBreweriesContext(context);

    const id = '1';

    addInfoToBreweryId({ info: 'info 1', id, context });
    addInfoToBreweryId({ info: 'info 2', id, context });
    addInfoToBreweryId({ info: 'info 3', id, context });

    act(() => {
      context.result.current.removeInfoByIndex({
        breweryId: id,
        infoIndex: 0,
      });
    });

    const updatedBrewery = context.result.current.state.breweriesList.find(
      (item) => item.id === id
    );
    expect(updatedBrewery?.moreInfo).toStrictEqual(['info 2', 'info 3']);
  });

  it('Function "deleteBreweryById" - Should remove specific brewery from state.breweriesList', async () => {
    const context = renderComponent();

    await loadBreweriesContext(context);

    const breweriesList = [...context.result.current.state.breweriesList];
    const firstBrewery = breweriesList[0] || null;

    expect(firstBrewery).not.toBeNull();

    act(() => {
      context.result.current.deleteBreweryById(firstBrewery.id);
    });

    expect(context.result.current.state.breweriesList).toStrictEqual(
      breweriesList.slice(1)
    );
  });
});
