import React, { Component } from 'react'
import { connect } from 'react-redux'
import 'font-awesome/css/font-awesome.css'
import FontAwesome from 'react-fontawesome'

import { Div } from '../common'
import Header from '../Header/header'
import QuestionnaireHeader from './questionnaireHeader'
import QuestionResponsesWrapper from './responses.style'
import appActions from '../../redux/app/actions'

const { completed_questionnaires, reset_questionnaires, edit_questionnaire } = appActions

class QuestionResponses extends Component {
  submitResponses = () => {
    const { selectedChildren, questionnaire_responses, selectedQuestionnaireID } = this.props

    let assessmentData = {
      child_id: selectedChildren.id,
      questionnaire_id: selectedQuestionnaireID,
      questionnaire_responses: questionnaire_responses.ids
    }

    this.props.completed_questionnaires(assessmentData)
  }

  resetQuestionnaire = () => {
    this.props.reset_questionnaires()
  }

  onResponseEdit = item => {
    this.props.edit_questionnaire(item.questionnaire_id)
  }

  render() {
    const { questionnaires, current_questionnaire_step, questionnaire_responses, responseSubmitting } = this.props

    return (
      <QuestionResponsesWrapper>
        <Header />
        {questionnaires && (
          <div>
            <QuestionnaireHeader
              questionnaires={questionnaires}
              current_questionnaire_step={current_questionnaire_step}
            />

            <Div className="content" direction="column">
              <p>
                You've answered all the questions in this questionnaire <br />
                You can review your answers below, and submit them with the "Submit Answers" button
              </p>
              <div className="response-table">
                <Div className="tb-header">
                  <div className="th pt-question">Question</div>
                  <div className="th pt-response">Response</div>
                </Div>
                <div className="tb-body">
                  {questionnaire_responses.names.map((item, idx) => {
                    return (
                      <Div key={idx} className="td-row">
                        <div className="td pt-question">{item.question_title}</div>
                        <div className="td pt-response">
                          {item.question_response_name}
                          <FontAwesome
                            name="edit"
                            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                            onClick={this.onResponseEdit.bind(undefined, item)}
                          />
                        </div>
                      </Div>
                    )
                  })}
                </div>
              </div>
            </Div>
            <Div className="footer">
              <button className="btn-reset" onClick={this.resetQuestionnaire}>
                Reset Questionnaire
              </button>
              <button className="btn-submit" onClick={this.submitResponses} disabled={responseSubmitting}>
                {responseSubmitting === true && <FontAwesome name="spinner" spin />}
                Submit Responses
              </button>
            </Div>
          </div>
        )}
      </QuestionResponsesWrapper>
    )
  }
}

export default connect(
  state => ({
    ...state.App.toJS()
  }),
  { completed_questionnaires, reset_questionnaires, edit_questionnaire }
)(QuestionResponses)
