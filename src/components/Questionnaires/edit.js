import React, { Component } from 'react';
import { connect } from 'react-redux';

import QuestionnaireHeader from './questionnaireHeader';
import EditWrapper from './edit.style';
import appActions from '../../redux/app/actions';
import Header from '../Header/header';

const { change_answer } = appActions;

class QuestionnaireEdit extends Component {
	onChangeAnswer = (response, selectedQuestionnaire) => e => {
		console.log(response, selectedQuestionnaire);
		this.props.change_answer(response, selectedQuestionnaire);
	}

	render() {
		const { selectedQuestionnaire } = this.props;

		return (
			<EditWrapper>
				<Header />
				<div className="questionnaire-content">
					<div className="question">
						<h3>{selectedQuestionnaire.title}</h3>
						<ul>
							{
								selectedQuestionnaire.question_responses.map((response, j) => {
									return (
										<li key={j} onClick={this.onChangeAnswer(response, selectedQuestionnaire)}><p>{response.name}</p></li>
									);
								})
							}
						</ul>
					</div>
				</div>
			</EditWrapper>
		);
	}
}

export default connect(
  state => ({
    ...state.App.toJS()
  }),
  { change_answer }
)(QuestionnaireEdit);