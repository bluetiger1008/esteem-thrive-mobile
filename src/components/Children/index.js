import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../../assets/images/logo_black.png';
import ChildrenWrapper from './index.style';
import { Div } from '../common';
import appActions from '../../redux/app/actions';

const { get_children } = appActions;

class Children extends Component {
	constructor() {
		super();
	}

	componentDidMount() {
		this.props.get_children();
	}

	render() {
		const { children } = this.props;
		console.log(children);

		return (
			<ChildrenWrapper>
				<Div className="header" direction="column" justifyContent="flex-end">
					<h2>Notifications App</h2>
					<p>Designed to provide easy access to notifications, ask an expert and mom on board.</p>
					<img src={logo} alt="logo" className="logo"/>
				</Div>
				<Div className="content" direction="column" alignItems="center" justifyContent="flex-start">
					{ children.map((item, index) =>
						<button className="btn-notify" key={index}>
							{ item.name }
						</button>
					)}
					{/* <button className="btn-notify">
					// 	Ozzie Miller
					// 	<p className="due-notification">5</p>
					// </button> */ }
				</Div>
			</ChildrenWrapper>
		);
	}
}

export default connect(
  state => ({
    ...state.App.toJS()
  }),
  { get_children }
)(Children);