import React, { Component } from 'react'
import { connect } from 'react-redux'
import $ from 'jquery'

import AssessmentsWrapper from './index.style'
import { Div } from '../common'
import appActions from '../../redux/app/actions'
import Header from '../Header/header'

const { get_assessments, get_children, select_assessment } = appActions

class Assessments extends Component {
  handleSelectAssessment = item => {
    if (!item.completed && item.completed === undefined) {
      this.props.select_assessment(item)
    }
  }

  componentDidMount() {
    var target = $('.todo:first')
    if ($('.completed').length > 0) {
      if (target.length) {
        setTimeout(function() {
          $('html, body')
            .stop()
            .animate(
              {
                scrollTop: target.offset().top
              },
              1000
            )
        }, 300)
      }
    }
  }

  render() {
    const { selectedChildren, completedQuestionnairesLength } = this.props

    return (
      <AssessmentsWrapper>
        <Header />
        <Div className="content">
          {selectedChildren ? (
            selectedChildren.questionnaires.length > 0 ? (
              <div className="assessments">
                {selectedChildren.questionnaires.length === completedQuestionnairesLength && (
                  <h3>
                    Great Job! <br />
                    You've completed all due assessments.
                  </h3>
                )}
                <ul>
                  {selectedChildren.questionnaires.map((item, index) => {
                    return (
                      <li
                        key={index}
                        onClick={this.handleSelectAssessment.bind(undefined, item)}
                        className={item.completed ? 'completed' : 'todo'}
                      >
                        <div className="img-assessment">
                          <img src={item.image} alt="assessment" />
                        </div>
                        <div className="assessment-info">
                          <p className="assessment-name">{item.title}</p>
                          <p className="assessment-time">{item.completed ? 'completed' : item.time}</p>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </div>
            ) : (
              <h3>
                Great Job! <br />
                You've completed all due assessments.
              </h3>
            )
          ) : (
            <div className="error">
              <p>Please go back and select a child.</p>
            </div>
          )}
        </Div>
      </AssessmentsWrapper>
    )
  }
}

export default connect(
  state => ({
    ...state.App.toJS()
  }),
  { get_assessments, get_children, select_assessment }
)(Assessments)
