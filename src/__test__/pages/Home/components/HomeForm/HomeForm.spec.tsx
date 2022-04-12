import React from 'react';
import { fireEvent, render, RenderResult } from '@testing-library/react';
import { GlobalThemeProvider } from 'global/theme/globalThemeProvider';
import { HomeForm } from 'pages/Home/components/HomeForm/HomeForm';

const mockOnSubmit = jest.fn();

const renderForm = (): RenderResult => {
  return render(
    <GlobalThemeProvider>
      <HomeForm onSubmit={mockOnSubmit} />
    </GlobalThemeProvider>
  );
};
const testIds = {
  input: 'name-input',
  checkbox: 'age-checkbox',
  submitButton: 'submit-button',
};

describe('Home Form', () => {
  describe('Should display', () => {
    it.each`
      fieldName          | testId
      ${'name input'}    | ${testIds.input}
      ${'age checkbox'}  | ${testIds.checkbox}
      ${'submit button'} | ${testIds.submitButton}
    `('$fieldName', ({ testId }) => {
      const { queryByTestId } = renderForm();

      const component = queryByTestId(testId);

      expect(component).not.toBeNull();
    });
  });

  describe('Should display error messages when', () => {
    describe('user name input', () => {
      it.each`
        scenario                                                            | testString
        ${'is empty'}                                                       | ${''}
        ${'has only one word'}                                              | ${'BrenoCruz'}
        ${'has two words, but one is smaller than 3 characters'}            | ${'Ab Cde'}
        ${'has two words and both are smaller than 3 characters'}           | ${'Ab Cd'}
        ${'has more than two words, but all are smaller than 3 characters'} | ${'Ab Cd Ef Gh'}
      `('$scenario', ({ testString }) => {
        const { getByTestId, queryByText } = renderForm();

        const input = getByTestId(testIds.input);

        fireEvent.change(input, { target: { value: testString } });

        const submitButton = getByTestId(testIds.submitButton);

        fireEvent.click(submitButton);

        const errorMessage = queryByText(
          'You must enter your full name properly!'
        );

        expect(errorMessage).not.toBeNull();
      });
    });

    it('age checkbox is not checked', () => {
      const { getByTestId, queryByText } = renderForm();
      const submitButton = getByTestId(testIds.submitButton);

      fireEvent.click(submitButton);

      const checkboxError = queryByText('You must be over 18!');

      expect(checkboxError).not.toBeNull();
    });
  });

  it('Should call onSubmit when form pass on validation test', () => {
    const validUserName = 'Breno Cruz';
    const { getByTestId } = renderForm();

    const input = getByTestId(testIds.input);
    fireEvent.change(input, { target: { value: validUserName } });

    const checkbox = getByTestId(testIds.checkbox);
    fireEvent.click(checkbox);

    const submitButton = getByTestId(testIds.submitButton);

    fireEvent.click(submitButton);

    expect(mockOnSubmit).toHaveBeenNthCalledWith(1, validUserName);
  });
});
