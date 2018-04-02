import styled from 'styled-components';

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
    h2 {
      color: #888;
    }
    .btn-continue {
      width: 200px;
      height: 50px;
      background: #4781b7;
      border: none;
      border-radius: 50px;
      color: white;
      font-size: 20px;
      margin-bottom: 30px;
    }
    .btn-logout {
      font-size: 20px;
      color: black;
      text-decoration: underline;
      margin: 10px 0;
    }
  }
`;

export default QuestionnaireCompletedWrapper;