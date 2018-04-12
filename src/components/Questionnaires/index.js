import React, { Component } from 'react'
import Modal from 'react-modal'
import { connect } from 'react-redux'

import QuestionnaireHeader from './questionnaireHeader'
import QuestionnairesWrapper from './index.style'
import appActions from '../../redux/app/actions'
import Header from '../Header/header'

const { select_answer, select_last_answer, go_previous_question, completed_questionnaires } = appActions

Modal.setAppElement('#root')

class Questionnaires extends Component {
  constructor() {
    super()
    this.state = {
      showModal: false,
      percentage: 1
    }

    this.handleOpenModal = this.handleOpenModal.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
  }

  componentDidMount() {
    this.handleOpenModal()
  }

  handleOpenModal() {
    this.setState({ showModal: true })
  }

  handleCloseModal() {
    this.setState({ showModal: false })
  }

  onSelectAnswer = (question_response, question) => e => {
    if (this.props.current_questionnaire_step === this.props.questionnaires.questions.length) {
      this.props.select_last_answer(question_response, question)
    } else {
      this.props.select_answer(question_response, question)
    }
  }

  previousQuestion = () => {
    this.props.go_previous_question()
  }

  render() {
    const { questionnaires, current_questionnaire_step } = this.props

    const colors = {
      blue: '#00a8ff',
      red: '#ff5c33',
      orange: '#ff8000',
      yellow: '#e6da00',
      green: '#2bd96b'
    }

    return (
      <QuestionnairesWrapper>
        <Header />
        {questionnaires && (
          <div>
            <Modal isOpen={this.state.showModal} contentLabel="Minimal Modal Example" className="startModal">
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

            <QuestionnaireHeader
              questionnaires={questionnaires}
              current_questionnaire_step={current_questionnaire_step}
            />

            <div className="questionnaire-content">
              <div className="question">
                <h3>{questionnaires.questions[current_questionnaire_step - 1].title}</h3>
                <ul>
                  {questionnaires.questions[current_questionnaire_step - 1].question_responses
                    .sort((a, b) => a.position - b.position)
                    .map((response, j) => {
                      return (
                        <li
                          key={j}
                          onClick={this.onSelectAnswer(
                            response,
                            questionnaires.questions[current_questionnaire_step - 1]
                          )}
                          style={{
                            backgroundColor: response.color ? colors[response.color] : 'red'
                          }}
                        >
                          <p>{response.name}</p>
                        </li>
                      )
                    })}
                </ul>
              </div>
              {current_questionnaire_step > 1 && (
                <div className="question-navigator" onClick={this.previousQuestion}>
                  <div className="previous-question">
                    <p>Previous Question</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </QuestionnairesWrapper>
    )
  }
}

export default connect(
  state => ({
    ...state.App.toJS()
  }),
  {
    select_answer,
    select_last_answer,
    go_previous_question,
    completed_questionnaires
  }
)(Questionnaires)
