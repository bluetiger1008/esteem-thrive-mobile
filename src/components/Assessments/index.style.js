import styled from 'styled-components';

const AssessmentsWrapper = styled.div`
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
		height: calc(100vh - 101px);
		overflow: auto;
		ul {
			list-style: none;
			width: 100%;
			padding: 0 30px;
			li {
				height: 60px;
				background-color: #45a5d8;
				margin: 10px 0;
				border-top-right-radius: 30px;
				border-bottom-right-radius: 30px;
				display: flex;
				align-items: center;
				color: #fff;
				padding-left: 10px;
				position: relative;
				.img-assessment {
					width: 60px;
					height: 60px;
					background-color: #ffffff73;
					margin-right: 10px;
					display: flex;
					align-items: center;
					justify-content: center;
					img {
						max-width: 80%;
						max-height: 80%;
					}
				}
				.assessment-info {
					flex-grow: 1;
					display: flex;
					align-items: center;
					justify-content: space-between;
					padding-right: 10px;
				}
				&:first-child {
					margin-top: 0;
				}
				&:not(:last-child) {
					&:after {
				    content: "";
				    position: absolute;
				    width: 2px;
				    height: 10px;
				    background-color: black;
				    bottom: -10px;
				    left: 39px;
					}	
				}
			}
		}
	}
`;

export default AssessmentsWrapper;