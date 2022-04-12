import React from 'react';
import { fireEvent, render, RenderResult } from '@testing-library/react';
import { GlobalThemeProvider } from 'global/theme/globalThemeProvider';
import { IconsDataTestIdEnum } from 'assets/icons';
import {
  InfoTag,
  InfoTagProps,
} from 'pages/Breweries/components/BreweryCard/InfoTag';

const mockDefaultTag: InfoTagProps = {
  type: 'default',
  icon: 'GraphIcon',
  text: 'mockDefaultTag',
  'data-testid': 'default-tag',
};
const mockAddInfoTag: InfoTagProps = {
  type: 'addInfo',
  text: 'mockAddInfoTag',
  'data-testid': 'add-tag',
  action: jest.fn(),
};
const mockRemoveableTag: InfoTagProps = {
  type: 'removeable',
  text: 'mockRemoveableTag',
  'data-testid': 'removeable-tag',
  action: jest.fn(),
};

const renderComponent = (
  type: InfoTagProps['type'],
  text?: string
): RenderResult => {
  return render(
    <GlobalThemeProvider>
      {type === 'addInfo' && (
        <InfoTag {...mockAddInfoTag} text={text || mockAddInfoTag.text} />
      )}
      {type === 'default' && (
        <InfoTag {...mockDefaultTag} text={text || mockDefaultTag.text} />
      )}
      {type === 'removeable' && (
        <InfoTag {...mockRemoveableTag} text={text || mockRemoveableTag.text} />
      )}
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
    `(`text when type=$type`, ({ type }) => {
      const { queryByTestId } = renderComponent(type);
      const component = queryByTestId(testIds.text);
      expect(component).not.toBeNull();
    });

    it(`display Icon from parameter when type = “default”`, () => {
      const { queryByTestId } = renderComponent('default');
      const component = queryByTestId(testIds.icon);
      expect(component).not.toBeNull();
    });

    it(`"PlusOutlineIcon" when type = “addInfo”`, () => {
      const { queryByTestId } = renderComponent('addInfo');
      const component = queryByTestId(testIds.addIcon);
      expect(component).not.toBeNull();
    });

    it(`"TrashIcon" when type = “removeable”`, () => {
      const { queryByTestId } = renderComponent('removeable');
      const component = queryByTestId(testIds.removeIcon);
      expect(component).not.toBeNull();
    });
  });

  describe('InfoTag type="addInfo"', () => {
    it('Should display InputText when clicked on InfoTag', () => {
      const { queryByTestId } = renderComponent('addInfo');
      const infoAddTag = queryByTestId(mockAddInfoTag['data-testid'] || '');

      expect(infoAddTag).not.toBeNull();

      if (infoAddTag) {
        fireEvent.click(infoAddTag);
      }

      const inputText = queryByTestId('input-text');

      expect(inputText).not.toBeNull();
    });
  });
});
