import React from 'react';
// import { WebIcon } from 'assets/icons';
import { Link } from 'react-router-dom';
import { RouteNames } from 'routes/RoutesUtils';

import { ArrowBackIcon } from 'assets/icons';
import { useGlobalContext } from 'global/GlobalContext';
import BrewerieCard from './components/BrewerieCard/BrewerieCard';
import { Container, Header, MainContent } from './styles.Breweries';

const Breweries: React.FC = () => {
  const { userName } = useGlobalContext();
  return (
    <Container>
      <Header>
        <Link to={RouteNames.home}>
          <div className="go-back-div">
            <ArrowBackIcon /> <span>Go back</span>
          </div>
        </Link>
        <h3>Hello {userName}!</h3>
      </Header>
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
