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
        <h1>Vanderbilt</h1>
        <MainBar inattentive_severity_score={inattentive_severity_score} hyperactive_severity_score={hyperactive_severity_score}> 
          <div className="block red">
          </div>
          <div className="block yellow">
          </div>
          <div className="block green">
          </div>
          <div className="marker inattentive">
            <div className="bar">
            </div>
            <p>
              {(inattentive_severity_score > 2 && inattentive_severity_score < 2.5) ? (
                <span>Clinical Rating:</span>
              ) : (
                <span>Rating:</span>
              )}
              {inattentive_severity_score} out of 3
            </p>
          </div>
          <div className="marker hyperactive">
            <div className="bar">
            </div>
            <p>
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