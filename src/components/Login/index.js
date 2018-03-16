import React, { Component } from 'react';
import logo from '../../assets/images/logo.png'
import LoginWrapper from './login.style.js';
import { Div } from '../common';

class Login extends Component {
  render() {
    return (
      <LoginWrapper>
        <Div alignItems="center" justifyContent="center" className="header">
          <img src={logo} alt="logo" className="logo"/>
        </Div>
        <Div alignItems="center" className="authContainer">
          <form>
            <Div direction="column" className="form-group">
              <input type="email" placeholder="Email" className="form-input"/>
              <input type="password" placeholder="Password" className="form-input"/>
            </Div>
            <button type="submit" className="btn-login">Login</button>
          </form>
        </Div>
      </LoginWrapper>
    );
  }
}

export default Login;