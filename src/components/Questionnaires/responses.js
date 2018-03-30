import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../../assets/images/logo_black.png';
import { Div } from '../common';
import ProgressBar from './progressBar';
import QuestionResponsesWrapper from './responses.style';
import appActions from '../../redux/app/actions';

const { completed_questionnaires } = appActions;

class QuestionResponses extends Component {
	resetQuestionnaire = () => {
		console.log('reset questionnaire');
	}

	submitResponses = () => {
		const { selectedChildren, questionnaire_responses, selectedQuestionnaireID } = this.props;

		let assessmentData = {
			child_id: selectedChildren.id,
			questionnaire_id: selectedQuestionnaireID,
			questionnaire_responses: questionnaire_responses.ids
		};

		console.log('submit responses', assessmentData);
		this.props.completed_questionnaires(assessmentData);
	}

	render() {
		const { questionnaires, selectedChildren, current_questionnaire_step, questionnaire_responses } = this.props;

		return (
			<QuestionResponsesWrapper>
				<div className="header">
					<p>{questionnaires.title}</p>
					<ProgressBar percentage={current_questionnaire_step} questionLength={questionnaires.questions.length} />
				</div>
				<Div className="content" direction="column">
					<p>You've answered all the questions in this questionnaire <br/>
					You can review your answers below, and submit them with the "Submit Answers" button</p>
					<div className="response-table">
						<Div className="tb-header">
							<div className="th pt-question">
								Question
							</div>
							<div className="th pt-response">
								Response
							</div>
						</Div>
						<div className="tb-body">
							{ 
								questionnaire_responses.names.map((item, idx) => {
									return (
										<Div key={idx} className="td-row">
											<div className="td pt-question">
												{item.question_title}
											</div>
											<div className="td pt-response">
												{item.question_response_name}
											</div>
										</Div>
									);
								})
							}
						</div>
					</div>
				</Div>
				<Div className="footer">
					<button className="btn-reset" onClick={this.resetQuestionnaire}>
						Reset Questionnaire
					</button>
					<button className="btn-submit" onClick={this.submitResponses}>
						Submit Responses
					</button>
				</Div>
			</QuestionResponsesWrapper>
		);
	}
}

export default connect(
  state => ({
    ...state.App.toJS()
  }),
  { completed_questionnaires }
)(QuestionResponses);