import React, { Component } from 'react'

import MedSideEffectWrapper from './medSideEffect.style'

class MedSideEffect extends Component {
  state = {
    responseBubbles: []
  }

  componentDidMount() {
    const { scoreData } = this.props
    
    scoreData.questionnaire_responses.map((item, idx) => {
      if(item.question_response.rating !== 'strength') {
        switch (item.question_response.rating) {
          case 'need':
            this.setState((prevState) => {
              prevState.responseBubbles.push({ color: 'red', name: item.question.title })
              return prevState
            })
            break
          case 'typical':
            this.setState((prevState) => {
              prevState.responseBubbles.push({ color: 'yellow', name: item.question.title })
              return prevState
            })
            break
          default:
            break
        }
      }
    })
  }

  render() {
    const { responseBubbles } = this.state

    console.log(responseBubbles)
    
    return (
      <MedSideEffectWrapper>
        <p className="info">You've identified { responseBubbles.length } potential side effects. Be sure that your child's physician is aware of your child's potential medication side effects</p>
        <div className="bubbles">
          { responseBubbles.map((item, idx) => {
            return (
              <div className={"bubble " + item.color} key={idx}>
                <p>{item.name}</p>
              </div>
            )
          })}
        </div>
      </MedSideEffectWrapper>
    )
  }
}

export default MedSideEffect