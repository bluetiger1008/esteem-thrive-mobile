import React, { Component } from 'react';
import { connect } from 'react-redux';

import AssessmentsWrapper from './index.style';
import { Div } from '../common';
import appActions from '../../redux/app/actions';
import Header from '../Header/header';

const { get_assessments, get_children, select_assessment } = appActions;

class Assessments extends Component {
	constructor() {
		super();
	}

	handleSelectAssessment = (item) => {
		if(!item.completed && item.completed === undefined) {
			this.props.select_assessment(item);	
		}
	}

	render() {
		const { selectedChildren } = this.props;

		return (
			<AssessmentsWrapper>
				<Header />
				<Div className="content">
					{ selectedChildren ? (
						selectedChildren.questionnaires.length > 0 ? (
							<ul>
								{ selectedChildren.questionnaires.map((item, index) => {
									return (
										<li key={index} onClick={this.handleSelectAssessment.bind(undefined, item)} className={item.completed && 'completed'}>
											<div className="img-assessment">
												<img src={item.image} />
											</div>
											<div className="assessment-info">
												<p className="assessment-name">{item.title}</p>
												<p className="assessment-time">{item.completed ? 'completed' : item.time}</p>
											</div>
										</li>
									);
								})}
							</ul>
						): (
							<h3>
								Great Job! <br/>
								You've completed all due assessments.
							</h3>
						)
					) : (
						<div className='error'>
							<p>Please selct a children</p>
						</div>
					)}
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