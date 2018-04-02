import styled from 'styled-components';

const Div = styled.div`
	display: flex;
	flex-direction: ${props => props.direction || 'row'};
	align-items: ${props => props.alignItems || 'flex-start'};
	justify-content: ${props => props.justifyContent || 'flex-start'};
`;

const QuestionnaireHeader = styled.div`
	height: 50px;
	background-color: #24293c;
	padding: 10px 20px;
	text-align: left;
	display: flex;
	align-items: center;
	justify-content: space-between;
	p {
		color: white;
		margin-top: 0;
		margin-bottom: 5px;
	}
	.questionnaire-image {
		img {
			max-width: 50px;
			max-height: 50px;	
		}
	}
`;

export { Div, QuestionnaireHeader };