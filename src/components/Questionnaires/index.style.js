import styled from 'styled-components';

const QuestionnairesWrapper = styled.div`
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
	.questionnaire-content {
		height: calc(100vh - 70px);
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
				align-items: center;
				justify-content: center;
				background-color: red;
				margin-bottom: 10px;
				color: white;
			}
		}
		.question {
			padding-top: 30px;
		}
		.question-navigator {
			position: absolute;
			bottom: 0;
			width: 100%;
			height: 50px;
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