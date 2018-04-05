import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import logo from '../../assets/images/logo.png'
import LoginWrapper from './login.style.js'
import { Div } from '../common'
import authAction from '../../redux/auth/actions'

const { login } = authAction

class Login extends Component {
  constructor() {
    super()

    this.state = {
      email: '',
      password: '',
      redirectToReferrer: false
    }
  }

  componentDidMount() {
    if (this.props.isLoggedIn === true) {
      this.setState({ redirectToReferrer: true })
    }
  }

  handleEmailChange = e => {
    this.setState({ email: e.target.value })
  }

  handlePasswordChange = e => {
    this.setState({ password: e.target.value })
  }

  handleLogin = e => {
    e.preventDefault()

    const { email, password } = this.state
    const { login } = this.props
    const authData = { email, password }

    login(authData)
  }

  render() {
    const { email, password, redirectToReferrer } = this.state
    const { loginError } = this.props

    const from = { pathname: '/children' }

    if (redirectToReferrer) {
      return <Redirect to={from} />
    }
    return (
      <LoginWrapper>
        <Div alignItems="center" justifyContent="center" className="header">
          <img src={logo} alt="logo" className="logo" />
        </Div>
        <Div alignItems="center" className="authContainer">
          <form onSubmit={this.handleLogin}>
            <Div direction="column" className="form-group">
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                className="form-input"
                onChange={this.handleEmailChange}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                password={password}
                className="form-input"
                onChange={this.handlePasswordChange}
              />
              {loginError && <p className="form-validation">user email or password is not correct</p>}
            </Div>
            <button type="submit" className="btn-login">
              Login
            </button>
          </form>
        </Div>
      </LoginWrapper>
    )
  }
}

export default connect(
  state => ({
    isLoggedIn: state.Auth.get('idToken') !== null ? true : false,
    ...state.Auth.toJS()
  }),
  { login }
)(Login)
