import React from 'react'
import styled from 'styled-components'

const ProgressBarWrapper = styled.div`
  width: 200px;
  height: 20px;
  background-color: white;
  border-radius: 20px;
  overflow: hidden;
  .current-progress {
    width: ${props => props.percentage / props.questionLength * 100}%;
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
`

const ProgressBar = ({ percentage, questionLength }) => (
  <ProgressBarWrapper percentage={percentage > 1 ? percentage : 1} questionLength={questionLength}>
    <div className="current-progress">
      <p>
        {percentage}/{questionLength}
      </p>
    </div>
  </ProgressBarWrapper>
)

export default ProgressBar
