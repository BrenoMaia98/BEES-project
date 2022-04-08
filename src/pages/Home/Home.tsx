import React from 'react';
import { WebIcon } from 'assets/icons';

import { Link } from 'react-router-dom';
import { RouteNames } from 'routes/RoutesUtils';
import { Container } from './styles.Home';

const Home: React.FC = () => {
  return (
    <Container>
      <h1>Home Page</h1>
      <Link to={RouteNames.breweries}>Go to {RouteNames.breweries}</Link>
      <WebIcon />
    </Container>
  );
};

export default Home;
