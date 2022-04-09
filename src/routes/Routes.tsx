import React from 'react';
import { Route, Routes as DomRoutes } from 'react-router-dom';
// // pages
import Breweries from 'pages/Breweries/Breweries';
import Home from 'pages/Home/Home';
import { RouteNames } from './RoutesUtils';

const Routes: React.FC = () => {
  return (
    <DomRoutes>
      <Route path={RouteNames.home} element={<Home />} />
      <Route path={RouteNames.breweries} element={<Breweries />} />
    </DomRoutes>
  );
};

export default Routes;
