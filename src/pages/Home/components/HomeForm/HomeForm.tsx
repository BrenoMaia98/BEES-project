import React, { useState } from 'react';
import Button, { ButtonProps } from 'components/Button/Button';
import InputText from 'components/InputText/InputText';
import { Form } from './styles.HomeForm';

const fullNameRegex = new RegExp(
  /([A-Za-z]{3,})+(\s[(A-Za-z)]{2,})*(\s[(A-Za-z)]{3,})+/
);

type HomeFormProps = {
  onSubmit: (name: string) => void;
};

export const HomeForm: React.FC<HomeFormProps> = ({ onSubmit }) => {
  const [olderThatEigtheen, setOlderThatEigtheen] = useState(false);
  const [nameValue, setNameValue] = useState('');
  const [error, setError] = useState({
    name: '',
    age: '',
  });

  const checkFullName = () => fullNameRegex.test(nameValue);

  const validateForm = () => {
    const err = {
      name: '',
      age: '',
    };
    err.age = (!olderThatEigtheen && `You must be over 18!`) || '';
    err.name =
      (!checkFullName() && `You must enter your full name properly!`) || '';

    if (err.name || err.age) throw new Error(JSON.stringify(err));
  };

  const handleEnter: ButtonProps['onClick'] = (event) => {
    try {
      event.preventDefault();
      validateForm();
      onSubmit(nameValue);
    } catch ({ message }) {
      setError(
        JSON.parse(message as string) || {
          name: '',
          age: '',
        }
      );
    }
  };

  const handleChangeInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    // prevent user to type non-alphabetical values
    const newValue = e.target.value.replace(/[^A-Za-z\s]/, '');
    if (newValue !== nameValue) {
      setError({
        name: '',
        age: '',
      });
    }
    setNameValue(newValue);
  };

  const toggleCheckBox = () => {
    setOlderThatEigtheen((value) => !value);
  };
  return (
    <Form>
      <InputText
        customOnChangeMask={/[^A-Za-z\s]/g}
        data-testid="name-input"
        placeholder="Full name"
        name="full-name"
        id="name-input"
        value={nameValue}
        onChange={handleChangeInput}
      />
      <span className="error">{error.name}</span>
      <div className="div-checkbox">
        <input
          data-testid="age-checkbox"
          type="checkbox"
          checked={olderThatEigtheen}
          onChange={toggleCheckBox}
        />
        <p>Are you older than 18 years old?</p>
      </div>
      <span className="error">{error.age}</span>
      <div className="div-submit-button">
        <Button
          data-testid="submit-button"
          onClick={handleEnter}
          title="Enter"
          type="submit"
          id="button-submit"
        />
      </div>
    </Form>
  );
};
