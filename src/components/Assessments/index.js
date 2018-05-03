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
    const { selectedChildren, finishedChildren, completedQuestionnairesLength } = this.props

    console.log(selectedChildren, finishedChildren)

    return (
      <AssessmentsWrapper>
        <Header />
        <Div className="content">
          {selectedChildren ? (
            selectedChildren.questionnaires.length > 0 ? (
              <div className="assessments">
                { finishedChildren &&
                  <div>
                    { selectedChildren.id === finishedChildren.id && selectedChildren.questionnaires.length === completedQuestionnairesLength && (
                      <div className="completed-text">
                        <h3>
                          Great Job! <br />
                          You've completed all due assessments.
                        </h3>
                        <p>We’ll notify you when it’s time to complete more assessments so that you can track your child’s progress over time.<br/>
                        Visit esteemthrive.com on a tablet or larger format screen to explore your child’s dashboard and interventions.</p>
                      </div>
                    )}
                  </div>
                }
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
              <div className="completed-text">
                <h3>
                  Great Job! <br />
                  You've completed all due assessments.
                </h3>
                <p>We’ll notify you when it’s time to complete more assessments so that you can track your child’s progress over time.<br/>
                Visit esteemthrive.com on a tablet or larger format screen to explore your child’s dashboard and interventions.</p>
              </div>
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
