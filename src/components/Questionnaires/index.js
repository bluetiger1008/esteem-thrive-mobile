import React, { Component } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import styled from 'styled-components';

import QuestionnairesWrapper from './index.style';
import appActions from '../../redux/app/actions';

const { select_answer, go_previous_question } = appActions;

Modal.setAppElement('#root');

const ProgressBar = styled.div`
	width: 200px;
	height: 20px;
	background-color: white;
	border-radius: 20px;
	overflow: hidden;
	.current-progress {
		width: ${props => (props.percentage / props.questionLength) * 100}%;
		min-width: 40px;
		height: 20px;
		background-color: #0089ff;
		border-radius: 20px;
		text-align: center;
		p {
			margin: 0;
			font-size: 0.8em;
			line-height: 20px;
		}
	}
`;

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

  renderProgressBar(percentage, questionLength) {
  	return (
  		<ProgressBar percentage={percentage>1 ? percentage : 1} questionLength={questionLength}>
  			<div className="current-progress">
  				<p>{percentage}/{questionLength}</p>
  			</div>
  		</ProgressBar>
  	);
  }

  onSelectAnswer = (response) => e => {
  	console.log(response);
  	this.props.select_answer();
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
			        	{ this.renderProgressBar(current_questionnaire_step, questionnaires.questions.length) }
			        </div>

							<div className="questionnaire-content">
								<div className="question">
									<h3>{questionnaires.questions[current_questionnaire_step - 1].title}</h3>
									<ul>
										{
											questionnaires.questions[current_questionnaire_step - 1].question_responses.map((response, j) => {
												return (
													<li key={j} onClick={this.onSelectAnswer(response)}><p>{response.name}</p></li>
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
  { select_answer, go_previous_question }
)(Questionnaires);