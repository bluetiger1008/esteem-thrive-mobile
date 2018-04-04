import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'font-awesome/css/font-awesome.css';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';

import { Div } from '../common';
import logo from '../../assets/images/logo_black.png';
import HeaderWrapper from './header.style';

class Header extends Component {
	render() {
		const { selectedChildren } = this.props;

		return (
			<HeaderWrapper>
				<Div className="header" direction="column" justifyContent="center" alignItems="center">
					<Link to="/children" className="btn-back">
            <FontAwesome
			        name='angle-left'
			        size='2x'
			      />
          </Link>
          { selectedChildren ? (
          	<p>{selectedChildren.name}</p>
          ): (
          	<p style={{ fontSize: '0.9em' }}>Children Not Selected</p>
          )}
					
					<img src={logo} alt="logo" className="logo"/>
				</Div>
			</HeaderWrapper>
		);
	}
}

export default connect(
  state => ({
    ...state.App.toJS()
  }),
  { }
)(Header);