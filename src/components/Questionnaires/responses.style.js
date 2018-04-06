import styled from 'styled-components';

const QuestionResponsesWrapper = styled.div`
	.content {
		padding: 0 20px;
		text-align: left;
		.response-table {
			width: 100%;
			padding-bottom: 50px;
			.pt-question {
				width: 60%;
				padding-right: 10px;
			}
			.pt-response {
				width: 40%;
				display: flex;
				justify-content: space-between;
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
			border: none;
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
`;

export default QuestionResponsesWrapper;