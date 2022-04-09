import React from 'react';
import { WebIcon } from 'assets/icons';

import { Link } from 'react-router-dom';
import { RouteNames } from 'routes/RoutesUtils';
import { Container } from './styles.Breweries';

const Breweries: React.FC = () => (
  <Container>
    <h1>Breweries Page</h1>
    <Link to={RouteNames.home}>
      Go to
      {RouteNames.home}
    </Link>
    <WebIcon />
  </Container>
);

export default Breweries;
