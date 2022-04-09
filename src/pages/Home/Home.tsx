/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { WebIcon } from 'assets/icons';

import { Link } from 'react-router-dom';
import { RouteNames } from 'routes/RoutesUtils';
import { useGlobalContext } from 'global/GlobalContext';
import { Container, Title } from './styles.Home';

const Home: React.FC = () => {
  const { toggleTheme } = useGlobalContext();
  return (
    <Container>
      <Title>Home Page</Title>
      <Link to={RouteNames.breweries}>Go to {RouteNames.breweries}</Link>
      <button name="button" onClick={toggleTheme}>
        <label htmlFor="button">ToggleTheme Test</label>
      </button>
      <WebIcon />
    </Container>
  );
};

export default Home;
