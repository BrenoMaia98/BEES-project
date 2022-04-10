import React, { useEffect } from 'react';
// import { WebIcon } from 'assets/icons';

import { HeaderApp } from 'components/HeaderApp/HeaderApp';
import BrewerieCard from './components/BrewerieCard/BrewerieCard';
import { Container, MainContent } from './styles.Breweries';
import {
  BreweryContextProvider,
  useBreweryContext,
} from './Context/BreweriesContext';

const BreweriesPage: React.FC = () => {
  const { listBreweries } = useBreweryContext();

  useEffect(() => {
    listBreweries();
  }, []);

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
      </MainContent>
    </Container>
  );
};
const Breweries = () => (
  <BreweryContextProvider>
    <BreweriesPage />
  </BreweryContextProvider>
);

export default Breweries;
