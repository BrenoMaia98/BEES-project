import React from 'react';
import { useNavigate } from 'react-router-dom';

import { RouteNames } from 'routes/RoutesUtils';

import { BeeSrcImg, WelcomeLogoBlack, WelcomeLogoWhite } from 'assets/imgs';
import { useGlobalContext } from 'global/GlobalContext';
import { Switch } from 'components/Switch/Switch';
import { useTheme } from 'styled-components';
import { Palette } from 'global/theme/theme';
import {
  Container,
  AlignContent,
  LoginsContainer,
  BeeImg,
  Logo,
} from './styles.Home';
import { HomeForm } from './components/HomeForm/HomeForm';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { toggleTheme } = useGlobalContext();
  const { setUserName } = useGlobalContext();
  const theme = useTheme() as Palette;

  const onSubmitForm = (nameValue: string) => {
    setUserName(nameValue);
    navigate(RouteNames.breweries, { replace: true });
  };

  return (
    <Container>
      <div className="toggle-theme-switch">
        <Switch onToggle={toggleTheme} />
      </div>
      <AlignContent>
        <Logo src={theme.darkTheme ? WelcomeLogoWhite : WelcomeLogoBlack} />
        <LoginsContainer>
          <p>Please, enter your full name below</p>
          <p>Only alphabetical characters are accepted</p>
          <HomeForm onSubmit={onSubmitForm} />
        </LoginsContainer>
      </AlignContent>
      <BeeImg src={BeeSrcImg} />
    </Container>
  );
};

export default Home;
