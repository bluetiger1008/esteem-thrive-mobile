import styled from 'styled-components'

const QuestionResponsesWrapper = styled.div`
  height: 100%;
  .responses-content {
    height: calc(100% - 81px);
    position: relative;
  }
  .content {
    padding: 20px;
    text-align: left;
    height: calc(100% - 110px);
    overflow-y: scroll;

    p {
      margin: 0;

      &:not(:last-child) {
        margin: 0 0 1em 0;
      }
    }

    .response-table {
      width: 100%;
      margin: 0 0 50px 0;
      border: 1px solid #f7f7f7;
      color: #333333;
      border-radius: 4px;

      .pt-question {
        width: 60%;
        padding: 10px;
      }
      .pt-response {
        width: 40%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
      }
      .tb-header {
        background-color: #f7f7f7;

        .th {
          font-weight: 500;
          font-size: 14px;
        }
      }
      .tb-body {
        .td-row {
          font-size: 0.8em;
          display: flex;
          justify-content: flex-start;
          align-items: center;

          &:nth-child(even) {
            background: #f3f3f3;
          }
        }
      }
    }
  }

  .footer {
    position: absolute;
    bottom: 0px;
    width: 100%;

    button {
      width: 50%;
      color: white;
      border: none;
      padding: 10px 0;
      font-size: 14px;

      &.btn-reset {
        background-image: linear-gradient(to right, #f05b7c, #f35574, #f54e6b, #f74862, #f94159);
      }
      &.btn-submit {
        background-color: #2ebd2e;

        span {
          margin-right: 5px;
        }
        &:disabled {
          background-color: #3a6144;
        }
      }
    }
  }
`

export default QuestionResponsesWrapper
