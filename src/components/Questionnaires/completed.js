import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../../assets/images/logo_black.png';
import { Div } from '../common';
import ProgressBar from './progressBar';
import CompletedQuestionnaireWrapper from './completed.style';

class CompletedQuestionnaire extends Component {
	render() {
		const { questionnaires, selectedChildren, current_questionnaire_step, questionnaire_responses } = this.props;

		return (
			<CompletedQuestionnaireWrapper>
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
					<button className="btn-reset">
						Reset Questionnaire
					</button>
					<button className="btn-submit">
						Submit Responses
					</button>
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