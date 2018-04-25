import styled from 'styled-components'

const MedSideEffectWrapper = styled.div`
  .bubbles {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .bubble {
      width: 100px;
      height: 100px;
      border-radius: 100px;
      overflow: hidden;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      p {
        padding: 10px;
        font-size: 0.7em;
        margin: 0;
      }
      &.red {
        background-color: #ff5c33;
      }
      &.yellow {
        background-color: #e6da00;
      }
    }
  }
`

export default MedSideEffectWrapper