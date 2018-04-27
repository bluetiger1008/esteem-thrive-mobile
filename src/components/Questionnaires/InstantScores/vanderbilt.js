import React, { Component } from 'react'

import VanderbiltWrapper from './vanderbilt.style'
import { MainBar } from './index.style'

class Vanderbilt extends Component {
  state = {
    inattentive_severity_score: 1.5,
    hyperactive_severity_score: 2.7
  }

  componentDidMount() {
    const { scoreData } = this.props

    this.setState({
      inattentive_severity_score: scoreData.vanderbilt_score.inattentive_severity_score,
      hyperactive_severity_score: scoreData.vanderbilt_score.hyperactive_severity_score
    })
  }

  render() {
    const { inattentive_severity_score, hyperactive_severity_score } = this.state

    return (
      <VanderbiltWrapper>
        <p className="info">You've identified the following regarding your child's symptom serverity:</p>
        <MainBar inattentive_severity_score={inattentive_severity_score} hyperactive_severity_score={hyperactive_severity_score}> 
          <div className="block red">
          </div>
          <div className="block yellow">
          </div>
          <div className="block green">
          </div>
          <div className="marker inattentive">
            <p className="marker-name">Inattentive Type</p>
            <p className="marker-rating">
              {(inattentive_severity_score > 2 && inattentive_severity_score < 2.5) ? (
                <span>Clinical Rating:</span>
              ) : (
                <span>Rating:</span>
              )}
              {inattentive_severity_score} out of 3
            </p>
          </div>
          <div className="marker hyperactive">
            <p className="marker-name">Hyperactive Type</p>
            <p className="marker-rating">
              {(hyperactive_severity_score > 2 && hyperactive_severity_score < 2.5) ? (
                <span>Clinical Rating:</span>
              ) : (
                <span>Rating:</span>
              )}
              {hyperactive_severity_score} out of 3
            </p>
          </div>
        </MainBar>
      </VanderbiltWrapper>
    )
  }
}

export default Vanderbilt