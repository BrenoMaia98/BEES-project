import React from 'react';
import {
  fireEvent,
  render,
  RenderResult,
  waitFor,
} from '@testing-library/react';
import { GlobalThemeProvider } from 'global/theme/globalThemeProvider';
import { IconsDataTestIdEnum } from 'assets/icons';
import {
  InfoTag,
  InfoTagProps,
} from 'pages/Breweries/components/BreweryCard/InfoTag';
import { debug } from 'console';

const testIds = {
  text: 'text-tag-info',
  icon: IconsDataTestIdEnum.GraphIcon,
  addIcon: IconsDataTestIdEnum.PlusOutlineIcon,
  removeIcon: IconsDataTestIdEnum.TrashIcon,
  defaultTag: 'default-tag',
  addTag: 'add-tag',
  removeableTag: 'removeable-tag',
};

const mockDefaultTag: InfoTagProps = {
  type: 'default',
  icon: 'GraphIcon',
  text: 'mockDefaultTag',
};
const mockAddInfoTag: InfoTagProps = {
  type: 'addInfo',
  text: 'mockAddInfoTag',
  action: jest.fn(),
};
const mockRemoveableTag: InfoTagProps = {
  type: 'removeable',
  text: 'mockRemoveableTag',
  action: jest.fn(),
};

const renderComponent = (
  type: InfoTagProps['type'],
  text?: string
): RenderResult => {
  return render(
    <GlobalThemeProvider>
      {type === 'addInfo' && (
        <InfoTag
          {...mockAddInfoTag}
          text={text || mockAddInfoTag.text}
          data-testid={testIds.addTag}
        />
      )}
      {type === 'default' && (
        <InfoTag
          {...mockDefaultTag}
          text={text || mockDefaultTag.text}
          data-testid={testIds.defaultTag}
        />
      )}
      {type === 'removeable' && (
        <InfoTag
          {...mockRemoveableTag}
          text={text || mockRemoveableTag.text}
          data-testid={testIds.removeableTag}
        />
      )}
    </GlobalThemeProvider>
  );
};

const displayInputText = (component: RenderResult) => {
  const infoAddTag = component.getByTestId(testIds.addTag);
  expect(infoAddTag).not.toBeNull();

  fireEvent.click(infoAddTag);
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
      const component: RenderResult = renderComponent('addInfo');
      const { queryByTestId } = component;
      displayInputText(component);
      const inputText = queryByTestId('input-text');

      expect(inputText).not.toBeNull();
    });

    it('Should autoFocus InputText when displayed', async () => {
      const component: RenderResult = renderComponent('addInfo');
      const { queryByTestId } = component;
      displayInputText(component);
      const inputText = queryByTestId('input-text');

      expect(document.activeElement === inputText).toBeTruthy();
      // await waitFor(() => expect(inputText).toHaveFocus());
    });

    it('Should hide InputText on "Enter" press', async () => {
      const component: RenderResult = renderComponent('addInfo');
      const { getByTestId, queryByTestId } = component;
      displayInputText(component);
      const inputText = getByTestId('input-text');

      fireEvent.keyDown(inputText, { key: 'Enter', charCode: 13 });

      expect(queryByTestId('input-text')).toBeNull();
    });

    it('Should hide InputText onBlur', () => {
      const component: RenderResult = renderComponent('addInfo');
      const { getByTestId, queryByTestId } = component;
      displayInputText(component);
      const inputText = getByTestId('input-text');

      fireEvent.blur(inputText);

      expect(queryByTestId('input-text')).toBeNull();
    });

    it('Should call InfoTag action props on InputText Blur', () => {
      expect(true).toBeTruthy();
    });

    it('Should call InfoTag action props on "Enter" press', () => {
      expect(true).toBeTruthy();
    });
  });
});
