import styled from 'styled-components';

const QuestionnairesWrapper = styled.div`
	.questionnaire-content {
		padding-bottom: 50px;
		position: relative;
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
				height: 30px;
				align-items: center;
				justify-content: center;
				margin-bottom: 10px;
				color: white;
				p {
					margin: 0;
				}
			}
		}
		.question {
			padding-top: 30px;
		}
		.question-navigator {
			position: fixed;
			bottom: 0;
			width: 100%;
			height: 30px;
			.previous-question {
				width: 100%;
				height: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
				background: rgba(147,206,222,1);
				background: linear-gradient(to right, rgba(147,206,222,1) 0%, rgba(117,189,209,1) 27%, rgba(50,136,207,1) 100%);
				color: #fff;
			}
		}
	}
`;

export default QuestionnairesWrapper;