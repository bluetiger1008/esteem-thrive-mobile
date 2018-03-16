import React from 'react';
import { Route, Router } from 'react-router-dom';

import Login from './components/Login';

const PublicRoutes = ({ history }) => {
  return (
    <Router history={history}>
      <div>
        <Route
          exact
          path={'/'}
          component={Login}
        />
      </div>
    </Router>
  );
};

export default PublicRoutes;