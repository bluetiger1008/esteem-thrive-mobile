import React, { Component } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import styled from 'styled-components';

import ProgressBar from './progressBar';
import QuestionnairesWrapper from './index.style';
import appActions from '../../redux/app/actions';

const { select_answer, select_last_answer, go_previous_question, completed_questionnaires } = appActions;

Modal.setAppElement('#root');

class Questionnaires extends Component {
	constructor () {
    super();
    this.state = {
      showModal: false,
      percentage: 1
    };
    
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  componentDidMount() {
  	this.handleOpenModal();
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }

  onSelectAnswer = (question_response, question) => e => {
  	console.log(question_response, question);
  	const { selectedChildren, questionnaire_responses, selectedQuestionnaireID } = this.props;

  	if(this.props.current_questionnaire_step === this.props.questionnaires.questions.length) {
  		// let assessmentData = {
  		// 	child_id: selectedChildren.id,
  		// 	questionnaire_id: selectedQuestionnaireID,
  		// 	questionnaire_responses: questionnaire_responses
  		// };

  		// console.log('assessment', assessmentData);
			// this.props.completed_questionnaires(assessmentData);
			this.props.select_last_answer(question_response, question);
  	} else {
  		this.props.select_answer(question_response, question);
  	}
  }

  previousQuestion = () => {
  	this.props.go_previous_question();
  }

	render() {
		const { questionnaires, selectedChildren, current_questionnaire_step } = this.props;
		const { percentage } = this.state;

		return (
			<QuestionnairesWrapper>
				<Modal 
           isOpen={this.state.showModal}
           contentLabel="Minimal Modal Example"
           className="startModal"
        >
        	<div className="modal-header">
	        	<p>{questionnaires.title}</p>
	        </div>
	        <div className="modal-content">
	        	<p>{questionnaires.description}</p>
	        </div>
	        <div className="modal-footer" onClick={this.handleCloseModal}>
	          <p>Start Questionnaire</p>
	        </div>
        </Modal>
        { questionnaires.questions && 
        	(
        		<div>
	        		<div className="header">
			        	<p>{questionnaires.title}</p>
								<ProgressBar percentage={current_questionnaire_step} questionLength={questionnaires.questions.length} />
			        </div>

							<div className="questionnaire-content">
								<div className="question">
									<h3>{questionnaires.questions[current_questionnaire_step - 1].title}</h3>
									<ul>
										{
											questionnaires.questions[current_questionnaire_step - 1].question_responses.map((response, j) => {
												return (
													<li key={j} onClick={this.onSelectAnswer(response, questionnaires.questions[current_questionnaire_step-1])}><p>{response.name}</p></li>
												);
											})
										}
									</ul>
								</div>
								{ current_questionnaire_step > 1 && (
									<div className="question-navigator" onClick={this.previousQuestion}>
										<div className="previous-question">
											<p>Previous Question</p>
										</div>
									</div>
								)}
							</div>
						</div>
        	)
        }
			</QuestionnairesWrapper>
		);
	}
}

export default connect(
  state => ({
    ...state.App.toJS()
  }),
  { select_answer, select_last_answer, go_previous_question, completed_questionnaires }
)(Questionnaires);