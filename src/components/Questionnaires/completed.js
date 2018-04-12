import React, { Component } from 'react'
import { connect } from 'react-redux'

import QuestionnaireCompletedWrapper from './completed.style'
import { Div } from '../common'
import Header from '../Header/header'

import appActions from '../../redux/app/actions'
import authActions from '../../redux/auth/actions'
import _ from 'lodash'

const { get_assessments, get_children, select_assessment, continue_assessments, select_children } = appActions
const { logout } = authActions

class QuestionnaireCompleted extends Component {
  constructor() {
    super()

    this.state = {
      remainingAssessmentNumber: 0
    }
  }

  componentDidMount() {
    this.props.get_children()
  }

  componentWillReceiveProps(nextProps) {
    const { selectedChildren } = this.props

    let completedAssessment = _.find(nextProps.children, {
      id: selectedChildren.id
    })

    this.setState({
      remainingAssessmentNumber: completedAssessment.outstanding_assessments_size
    })
  }

  logout = () => {
    this.props.logout()
  }

  continueAssessment = () => {
    this.props.continue_assessments()
  }

  onSelectChildren = item => {
    this.props.select_children(item)
  }

  render() {
    const { selectedChildren, questionnaires, children } = this.props
    const { remainingAssessmentNumber } = this.state

    return (
      <QuestionnaireCompletedWrapper>
        <Header />
        <Div className="content" direction="column" alignItems="center">
          <h2 className="questionnaire-title">
            <img src={questionnaires.image} alt="image" />
            {questionnaires.title}
          </h2>
          <h2>Completed</h2>
          <button className="btn btn-continue" onClick={this.continueAssessment}>
            Continue
            <p className="due-notification">{remainingAssessmentNumber}</p>
          </button>

          {children.map((item, index) => {
            return (
              <div key={index}>
                {item.id !== selectedChildren.id && (
                  <button className="btn btn-switch" onClick={this.onSelectChildren.bind(undefined, item)}>
                    {item.name}
                    <p className="due-notification">{item.outstanding_assessments_size}</p>
                  </button>
                )}
              </div>
            )
          })}

          <button className="btn btn-logout" onClick={this.logout}>
            Log Out
          </button>
        </Div>
      </QuestionnaireCompletedWrapper>
    )
  }
}

export default connect(
  state => ({
    ...state.App.toJS()
  }),
  {
    get_assessments,
    get_children,
    select_children,
    select_assessment,
    continue_assessments,
    logout
  }
)(QuestionnaireCompleted)
