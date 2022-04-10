import React from 'react';
// import { WebIcon } from 'assets/icons';

import { HeaderApp } from 'components/HeaderApp/HeaderApp';
import BrewerieCard from './components/BrewerieCard/BrewerieCard';
import { Container, MainContent } from './styles.Breweries';

const Breweries: React.FC = () => {
  return (
    <Container>
      <HeaderApp />
      <MainContent>
        <BrewerieCard />
        <BrewerieCard />
        <BrewerieCard />
        <BrewerieCard />
        <BrewerieCard />
        <BrewerieCard />
        <BrewerieCard />
        <BrewerieCard />
        {/* <WebIcon /> */}
      </MainContent>
    </Container>
  );
};

export default Breweries;
