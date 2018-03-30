import styled from 'styled-components';

const QuestionResponsesWrapper = styled.div`
	.header {
		height: 50px;
		background-color: #24293c;
		padding: 10px 20px;
		text-align: left;
		p {
			color: white;
			margin-top: 0;
			margin-bottom: 5px;
		}
	}
	.content {
		padding: 0 20px;
		text-align: left;
		.response-table {
			width: 100%;
			.pt-question {
				width: 60%;
				padding-right: 10px;
			}
			.pt-response {
				width: 40%;
			}
			.tb-header {
				.th {
					font-weight: bold;
					font-size: 0.9em;
				}
			}
			.tb-body {
				.td-row {
					font-size: 0.8em;
					background: #f3f3f3;
					margin: 3px 0;
				}
			}
		}
	}

	.footer {
		position: fixed;
		bottom: 0px;
		width: 100%;
		height: 30px;
		button {
			height: 100%;
			width: 50%;
			color: white;
			&.btn-reset {
				background-image: linear-gradient(to right, #f05b7c, #f35574, #f54e6b, #f74862, #f94159);
			}
			&.btn-submit {
				background-image: linear-gradient(to right, #5bf08f, #4ce07b, #3dd067, #2cc053, #17b03f);
			}
		}
	}
`;

export default QuestionResponsesWrapper;