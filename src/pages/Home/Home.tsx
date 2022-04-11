import React from 'react';
import { useNavigate } from 'react-router-dom';

import { RouteNames } from 'routes/RoutesUtils';

import { BeeSrcImg } from 'assets/imgs';
import { useGlobalContext } from 'global/GlobalContext';
import { Switch } from 'components/Switch/Switch';
import { Container, Title, LoginsContainer, BeeImg } from './styles.Home';
import { HomeForm } from './components/HomeForm/HomeForm';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { toggleTheme } = useGlobalContext();
  const { setUserName } = useGlobalContext();

  const onSubmitForm = (nameValue: string) => {
    setUserName(nameValue);
    navigate(RouteNames.breweries, { replace: true });
  };

  return (
    <Container>
      <div className="toggle-theme-switch">
        <Switch onToggle={toggleTheme} />
      </div>
      <Title>Welcome!</Title>
      <LoginsContainer>
        <p>Please, enter your full name below</p>
        <p>Only alphabetical characters are accepted</p>
        <HomeForm onSubmit={onSubmitForm} />
      </LoginsContainer>
      <BeeImg src={BeeSrcImg} />
    </Container>
  );
};

export default Home;
