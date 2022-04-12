import React, { useEffect } from 'react';
// import { WebIcon } from 'assets/icons';

import { HeaderApp } from 'components/HeaderApp/HeaderApp';
import { Container, MainContent } from './styles.Breweries';
import { BreweryCard } from './components/BreweryCard/BreweryCard';
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
          return <BreweryCard key={brewery.id} {...brewery} />;
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
