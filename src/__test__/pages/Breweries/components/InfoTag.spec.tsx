import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { GlobalThemeProvider } from 'global/theme/globalThemeProvider';
import { IconsDataTestIdEnum } from 'assets/icons';
import {
  InfoTag,
  InfoTagProps,
} from 'pages/Breweries/components/BreweryCard/InfoTag';

const mockDefaultTag: InfoTagProps = {
  type: 'default',
  icon: 'GraphIcon',
  text: 'mock_defaultTag',
  action: jest.fn(),
};
const mockAddInfoTag: InfoTagProps = {
  type: 'addInfo',
  text: 'mock_addInfoTag',
  action: jest.fn(),
};
const mockRemoveableTag: InfoTagProps = {
  type: 'removeable',
  text: 'mock_removeableTag',
  action: jest.fn(),
};

const renderBreweryDetail = (
  type: InfoTagProps['type'],
  text?: string
): RenderResult => {
  return render(
    <GlobalThemeProvider>
      {type === 'addInfo' && <InfoTag {...mockAddInfoTag} />}
      {type === 'default' && <InfoTag {...mockDefaultTag} />}
      {type === 'removeable' && <InfoTag {...mockRemoveableTag} />}
    </GlobalThemeProvider>
  );
};

const testIds = {
  text: 'text-tag-info',
  icon: IconsDataTestIdEnum.GraphIcon,
  addIcon: IconsDataTestIdEnum.PlusOutlineIcon,
  removeIcon: IconsDataTestIdEnum.TrashIcon,
};

describe('InfoTag', () => {
  describe('Should display ', () => {
    it.each`
      type
      ${'addInfo'}
      ${'default'}
      ${'removeable'}
    `(`text in all info tags`, ({ type }) => {
      const { queryByTestId } = renderBreweryDetail(type);
      const component = queryByTestId(testIds.text);
      expect(component).not.toBeNull();
    });

    it(`display Icon rfom parameter when type = “default”`, () => {
      const { queryByTestId } = renderBreweryDetail('default');
      const component = queryByTestId(testIds.icon);
      expect(component).not.toBeNull();
    });

    it(`"PlusOutlineIcon" when type = “addInfo”`, () => {
      const { queryByTestId } = renderBreweryDetail('addInfo');
      const component = queryByTestId(testIds.addIcon);
      expect(component).not.toBeNull();
    });

    it(`"TrashIcon" when type = “removeable”`, () => {
      const { queryByTestId } = renderBreweryDetail('removeable');
      const component = queryByTestId(testIds.removeIcon);
      expect(component).not.toBeNull();
    });
  });
});
