import styled from 'styled-components'

const QuestionnaireCompletedWrapper = styled.div`
  .header {
    border-bottom: 1px solid grey;
    padding: 0 30px;
    height: 100px;
    text-align: center;
    position: relative;
    p {
      margin: 0;
      color: black;
      font-size: 30px;
    }
    .logo {
      position: absolute;
      right: 10px;
      top: 10px;
      width: 80px;
    }
  }
  .content {
    padding: 0 30px;
    h2 {
      color: #888;
      &.questionnaire-title {
        display: flex;
        align-items: center;
        img {
          max-width: 50px;
          max-height: 50px;
          margin-right: 10px;
        }
      }
    }
    .btn {
      position: relative;
      border: none;
      background: transparent;
      &.btn-continue {
        width: 200px;
        height: 50px;
        background: #4781b7;
        border: none;
        border-radius: 50px;
        color: white;
        font-size: 20px;
        margin-bottom: 50px;
      }
      &.btn-logout {
        font-size: 20px;
        color: black;
        text-decoration: underline;
        margin-top: 50px;
      }
      &.btn-switch {
        font-size: 20px;
        text-decoration: underline;
        width: auto;
        height: 50px;
        .due-notification {
          right: -30px;
        }
      }
      .due-notification {
        position: absolute;
        width: 30px;
        height: 30px;
        right: 0px;
        top: -15px;
        background-color: #000;
        border-radius: 50%;
        margin: 0;
        line-height: 30px;
        border: 3px solid #fff;
        color: white;
      }
    }
  }
`

export default QuestionnaireCompletedWrapper
