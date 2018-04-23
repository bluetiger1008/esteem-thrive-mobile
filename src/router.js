import React from 'react'
import { Route, Redirect, Router } from 'react-router-dom'
import { connect } from 'react-redux'

import Login from './components/Login'
import Children from './components/Children'
import Assessments from './components/Assessments'
import Questionnaires from './components/Questionnaires'
import QuestionResponses from './components/Questionnaires/responses'
import QuestionnaireEdit from './components/Questionnaires/edit'
import InstantScores from './components/Questionnaires/instantScores'
import QuestionnaireCompleted from './components/Questionnaires/completed'

const RestrictedRoute = ({ component: Component, isLoggedIn, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isLoggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/',
            state: { from: props.location }
          }}
        />
      )
    }
  />
)

const PublicRoutes = ({ history, isLoggedIn }) => {
  return (
    <Router history={history}>
      <div>
        <Route exact path={'/'} component={Login} />
        <RestrictedRoute path="/children" component={Children} isLoggedIn={isLoggedIn} />
        <RestrictedRoute path="/assessments" component={Assessments} isLoggedIn={isLoggedIn} />
        <RestrictedRoute exact path="/questionnaires" component={Questionnaires} isLoggedIn={isLoggedIn} />
        <RestrictedRoute path="/questionnaires/edit" component={QuestionnaireEdit} isLoggedIn={isLoggedIn} />
        <RestrictedRoute path="/questionnaires/responses" component={QuestionResponses} isLoggedIn={isLoggedIn} />
        <RestrictedRoute path="/questionnaires/instant_scores" component={InstantScores} />
        <RestrictedRoute path="/questionnaires/completed" component={QuestionnaireCompleted} isLoggedIn={isLoggedIn} />
      </div>
    </Router>
  )
}

export default connect(state => ({
  isLoggedIn: state.Auth.get('idToken') !== null
}))(PublicRoutes)
