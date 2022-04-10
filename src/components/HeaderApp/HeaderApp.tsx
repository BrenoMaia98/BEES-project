import React from 'react';
import { Link } from 'react-router-dom';
import { RouteNames } from 'routes/RoutesUtils';

import { ArrowBackIcon } from 'assets/icons';
import { useGlobalContext } from 'global/GlobalContext';
import { Switch } from 'components/Switch/Switch';
import { Header } from './styles.HeaderApp';

export const HeaderApp: React.FC = () => {
  const { userName, toggleTheme } = useGlobalContext();

  return (
    <Header>
      <Link to={RouteNames.home}>
        <div className="go-back-div">
          <ArrowBackIcon /> <span>Go back</span>
        </div>
      </Link>
      <h3>Hello {userName}!</h3>
      <Switch onToggle={toggleTheme} />
    </Header>
  );
};