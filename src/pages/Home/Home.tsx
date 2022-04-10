import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { RouteNames } from 'routes/RoutesUtils';
import Button, { ButtonProps } from 'components/Button/Button';

import { BeeSrcImg } from 'assets/imgs';
import { useGlobalContext } from 'global/GlobalContext';
import {
  Container,
  Title,
  HomeForm,
  LoginsContainer,
  BeeImg,
} from './styles.Home';

const fullNameRegex = new RegExp(
  /([A-Za-z]{3,})+(\s[(A-Za-z)]{2,})*(\s[(A-Za-z)]{3,})+/
);

const Home: React.FC = () => {
  const navigate = useNavigate();

  const [olderThatEigtheen, setOlderThatEigtheen] = useState(false);
  const [nameValue, setNameValue] = useState('');
  const [error, setError] = useState({
    name: '',
    age: '',
  });
  const { setUserName } = useGlobalContext();

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
      setUserName(nameValue);
      navigate(RouteNames.breweries, { replace: true }); // replace prevents the user to logout accidentally
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
    <Container>
      <Title>Welcome!</Title>
      <LoginsContainer>
        <p>Please, enter your full name below</p>
        <p>Only alphabetical characters are accepted</p>
        <HomeForm>
          <input
            type="text"
            name="full-name"
            placeholder="Full name"
            id="name-input"
            value={nameValue}
            onChange={handleChangeInput}
          />
          <span className="error">{error.name}</span>
          <div className="div-checkbox">
            <input
              type="checkbox"
              checked={olderThatEigtheen}
              onChange={toggleCheckBox}
            />
            <p>Are you older than 18 years old?</p>
          </div>
          <span className="error">{error.age}</span>
          <div className="div-submit-button">
            <Button
              onClick={handleEnter}
              title="Enter"
              type="submit"
              id="button-submit"
            />
          </div>
        </HomeForm>
      </LoginsContainer>
      <BeeImg src={BeeSrcImg} />
    </Container>
  );
};

export default Home;
