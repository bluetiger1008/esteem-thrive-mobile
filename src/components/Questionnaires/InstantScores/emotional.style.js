import styled from 'styled-components'

const EmotionalWrapper = styled.div`
`

const EmotionalBar = styled.div`
  display: inline-block;
  height: 300px;
  width: 30px;
  position: relative;
  margin-left: -150px;
  .block {
    width: 100%;
    &.red {
      height: 30%;
      background-color: #ff5c33;
      border-top-right-radius: 15px;
      border-top-left-radius: 15px;
    }
    &.yellow {
      height: 30%;
      background-color: #e6da00;  
    }
    &.green {
      height: 40%;
      background-color: #2bd96b;
      border-bottom-right-radius: 15px;
      border-bottom-left-radius: 15px;
    }
  }
  .marker {
    position: absolute;
    width: 150px;
    height: 5px;
    &.raw_score {
      background: ${props => props.raw_score < 28 ? '#2bd96b' : 
      (props.raw_score > 48 ? '#ff5c33' : '#e6da00')};
      bottom: ${props => props.raw_score < 28 ? props.raw_score / 28 * 40 : 
        (props.raw_score > 28 ? 70 + (props.raw_score - 48)/21 * 30 : 
        40 + (props.raw_score - 28)/19 * 30)}%;
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

export { EmotionalWrapper, EmotionalBar }