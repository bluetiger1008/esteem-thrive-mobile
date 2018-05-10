import styled from 'styled-components'

const QuestionnairesWrapper = styled.div`
  height: 100%;
  position: relative;
  .questionnaire-content {
    padding-bottom: 50px;
    h3 {
      margin-top: 0;
    }
    ul {
      list-style: none;
      padding: 0;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;

      li {
        width: 200px;
        display: flex;
        min-height: 40px;
        align-items: center;
        justify-content: center;
        margin-bottom: 10px;
        color: #fafafa;
        border-radius: 4px;
        box-shadow: 0 4px 4px -2px rgba(0, 0, 0, 0.05);
        cursor: pointer;

        p {
          margin: 5px 0;
        }
      }
    }
    .question {
      padding: 30px 50px 0;
    }
    .question-navigator {
      position: absolute;
      bottom: 0;
      width: 100%;

      .previous-question {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-image: linear-gradient(-225deg, #00a8ff 0%, #0097e6 100%);
        color: #fafafa;
      }
    }
  }
`

export default QuestionnairesWrapper
