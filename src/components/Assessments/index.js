import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../../assets/images/logo_black.png';
import AssessmentsWrapper from './index.style';
import { Div } from '../common';
import appActions from '../../redux/app/actions';

const { get_assessments, get_children, select_assessment } = appActions;

class Assessments extends Component {
	constructor() {
		super();
	}

	handleSelectAssessment = (item) => {
		this.props.select_assessment(item);
	}

	render() {
		const { selectedChildren } = this.props;

		return (
			<AssessmentsWrapper>
				<Div className="header" direction="column" justifyContent="center" alignItems="center">
					<p>Ozzie Miller</p>
					<img src={logo} alt="logo" className="logo"/>
				</Div>
				<Div className="content">
					<ul>
						{ selectedChildren ? (
								selectedChildren.questionnaires.map((item, index) => {
								return (
									<li key={index} onClick={this.handleSelectAssessment.bind(undefined, item)}>
										<div className="img-assessment">
											
										</div>
										{item.title}
									</li>
								);
							})) : (
								<div className='error'>
									<p>Please selct a children</p>
								</div>
							)
						}
					</ul>
				</Div>
			</AssessmentsWrapper>
		);
	}
}

export default connect(
  state => ({
    ...state.App.toJS()
  }),
  { get_assessments, get_children, select_assessment }
)(Assessments);