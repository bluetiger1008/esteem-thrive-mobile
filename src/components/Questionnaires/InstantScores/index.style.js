import styled from 'styled-components'

const InstantScoresWrapper = styled.div`
  .footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 30px;
    background-color: #2bd96b;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
    a {
      margin: 0;
      color: white;
      text-decoration: none;
      width: 100%;
      height: 100%;
      line-height: 30px;
    } 
  }
  .content {
    padding: 20px 20px 40px;
    .loading {
      p {
        margin-top: 150px;
      }
    }
  }
`

const MainBar = styled.div`
  display: inline-block;
  height: 300px;
  width: 30px;
  position: relative;
  .block {
    width: 100%;
    &.red {
      height: 25%;
      background-color: #ff5c33;
      border-top-right-radius: 15px;
      border-top-left-radius: 15px;
    }
    &.yellow {
      height: 25%;
      background-color: #e6da00;  
    }
    &.green {
      height: 50%;
      background-color: #2bd96b;
      border-bottom-right-radius: 15px;
      border-bottom-left-radius: 15px;
    }
  }
  .marker {
    position: absolute;
    width: 100px;
    height: 5px;
    &.inattentive {
      background: ${props => props.inattentive_severity_score < 2 ? '#2bd96b' : 
      (props.inattentive_severity_score > 2.5 ? '#ff5c33' : '#e6da00')};
      bottom: ${props => props.inattentive_severity_score < 2 ? props.inattentive_severity_score / 2 * 50 : 
        (props.inattentive_severity_score > 2.5 ? 75 + (props.inattentive_severity_score - 2.5)/0.5 * 25 : 
        50 + (props.inattentive_severity_score - 2)/0.5 * 25)}%;
      right: 30px;
    }
    &.hyperactive {
      background: ${props => props.hyperactive_severity_score < 2 ? '#2bd96b' : 
      (props.hyperactive_severity_score > 2.5 ? '#ff5c33' : '#e6da00')};
      bottom: ${props => props.hyperactive_severity_score < 2 ? props.hyperactive_severity_score / 2 * 50 : 
        (props.hyperactive_severity_score > 2.5 ? 75 + (props.hyperactive_severity_score - 2.5)/0.5 * 25 : 
        50 + (props.hyperactive_severity_score - 2)/0.5 * 25)}%;
      left: 30px;
    }
    p {
      font-size: 0.8em;
      span {
        display: block;
      }
    }
  }
`

export { InstantScoresWrapper, MainBar }