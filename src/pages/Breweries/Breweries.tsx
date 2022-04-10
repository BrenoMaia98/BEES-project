import React, { useEffect } from 'react';
// import { WebIcon } from 'assets/icons';

import { HeaderApp } from 'components/HeaderApp/HeaderApp';
import { Container, MainContent } from './styles.Breweries';
import { BrewerieCard } from './components/BrewerieCard/BrewerieCard';
import {
  BreweryContextProvider,
  useBreweryContext,
} from './Context/BreweriesContext';

const BreweriesPage: React.FC = () => {
  const { listBreweries, state } = useBreweryContext();

  useEffect(() => {
    listBreweries();
  }, []);

  return (
    <Container>
      <HeaderApp />
      <MainContent>
        {state.breweriesList.map((brewery) => {
          return <BrewerieCard {...brewery} />;
        })}
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
