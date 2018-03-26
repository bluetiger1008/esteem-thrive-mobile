import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../../assets/images/logo_black.png';
import ChildrenWrapper from './index.style';
import { Div } from '../common';
import appActions from '../../redux/app/actions';

const { get_children, select_children } = appActions;

class Children extends Component {
	constructor() {
		super();
	}

	componentDidMount() {
		this.props.get_children();
	}

	onSelectChildren = (item) => {
		this.props.select_children(item);
	}

	render() {
		const { children } = this.props;

		return (
			<ChildrenWrapper>
				<Div className="header" direction="column" justifyContent="flex-end">
					<h2>Notifications App</h2>
					<p>Designed to provide easy access to notifications, ask an expert and mom on board.</p>
					<img src={logo} alt="logo" className="logo"/>
				</Div>
				<Div className="content" direction="column" alignItems="center" justifyContent="flex-start">
					{ children.map((item, index) =>
						<button className="btn-notify" key={index} onClick={this.onSelectChildren.bind(undefined, item)}>
							{ item.name }
							<p className="due-notification">{item.outstanding_assessments_size}</p>
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
  { get_children, select_children }
)(Children);