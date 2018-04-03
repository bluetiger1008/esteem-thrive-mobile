import styled from 'styled-components';

const HeaderWrapper = styled.div`
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
		.btn-back {
			position: absolute;
			color: black;
			left: 30px;
			top: 35px;
		}
	}
`;

export default HeaderWrapper;