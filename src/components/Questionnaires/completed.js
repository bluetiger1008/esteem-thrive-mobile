import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../../assets/images/logo_black.png';
import { Div } from '../common';
import CompletedQuestionnaireWrapper from './completed.style';

class CompletedQuestionnaire extends Component {
	render() {
		const { selectedChildren } = this.props;

		return (
			<CompletedQuestionnaireWrapper>
				<Div className="header" direction="column" justifyContent="center" alignItems="center">
					<p>{selectedChildren.name}</p>
					<img src={logo} alt="logo" className="logo"/>
				</Div>
				<Div className="content">
					<h1>Completed Questionnaires</h1>
				</Div>
			</CompletedQuestionnaireWrapper>
		);
	}
}

export default connect(
  state => ({
    ...state.App.toJS()
  }),
  { }
)(CompletedQuestionnaire);