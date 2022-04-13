import React from 'react';
import { Link } from 'react-router-dom';
import { RouteNames } from 'routes/RoutesUtils';

import { renderIcon } from 'assets/icons';
import { useGlobalContext } from 'global/GlobalContext';
import { Switch } from 'components/Switch/Switch';
import { Header } from './styles.HeaderApp';

export const HeaderApp: React.FC = () => {
  const { userName, toggleTheme } = useGlobalContext();

  return (
    <Header>
      <Link to={RouteNames.home}>
        <div className="go-back-div">
          {renderIcon('ArrowBackIcon')} <span>Go back</span>
        </div>
      </Link>
      <h3 data-testid="header-username">Hello {userName}!</h3>
      <Switch onToggle={toggleTheme} dataTestId="toggle-theme-switch" />
    </Header>
  );
};
