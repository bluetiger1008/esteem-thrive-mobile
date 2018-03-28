import styled from 'styled-components';

const CompletedQuestionnaireWrapper = styled.div`
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
`;

export default CompletedQuestionnaireWrapper;