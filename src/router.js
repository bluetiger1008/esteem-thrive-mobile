import React from 'react';
import { Route, Redirect, Router } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { connect } from 'react-redux';

import Login from './components/Login';
import Children from './components/Children';

const RestrictedRoute = ({ component: Component, isLoggedIn, ...rest }) => (
  <Route
    {...rest}
    render={props => isLoggedIn
      ? <Component {...props} />
      : <Redirect
          to={{
            pathname: '/',
            state: { from: props.location },
          }}
        />}
  />
);

const PublicRoutes = ({ history, isLoggedIn }) => {
  return (
    <Router history={history}>
      <div>
        <Route
          exact
          path={'/'}
          component={Login}
        />
        <RestrictedRoute
          path="/children"
          component={Children}
          isLoggedIn={isLoggedIn}
        />
      </div>
    </Router>
  );
};

export default connect(state => ({
  isLoggedIn: state.Auth.get('idToken') !== null,
}))(PublicRoutes);