import styled from 'styled-components';

const EditWrapper = styled.div`
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
	}
`;

export default EditWrapper;