import React from 'react'
import styled from 'styled-components'

import ProgressBar from './progressBar'

const QuestionnaireHeaderWrapper = styled.div`
  height: 50px;
  background-color: #24293c;
  padding: 10px 20px;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    color: white;
    margin-top: 0;
    margin-bottom: 5px;
  }
  .questionnaire-image {
    img {
      max-width: 50px;
      max-height: 50px;
    }
  }
`

const QuestionnaireHeader = ({ questionnaires, current_questionnaire_step }) => (
  <QuestionnaireHeaderWrapper>
    <div className="questionnaire-info">
      <p>{questionnaires.title}</p>
      <ProgressBar percentage={current_questionnaire_step} questionLength={questionnaires.questions.length} />
    </div>
    <div className="questionnaire-image">
      <img src={questionnaires.image} alt="questionnaire" />
    </div>
  </QuestionnaireHeaderWrapper>
)

export default QuestionnaireHeader
