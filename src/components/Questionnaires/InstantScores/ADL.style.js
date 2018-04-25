import styled from 'styled-components'

const ADLWrapper = styled.div`
	.scores {
		.title {
			text-align: left;
		}
		.owl-theme {
			position: relative;
			.item {
				width: 100px;
				height: 100px;
				border-radius: 100px;
				overflow: hidden;
				color: white;
				display: flex;
				align-items: center;
				justify-content: center;
				p {
					padding: 10px;
					font-size: 0.7em;
					margin: 0;
				}
			}
			.owl-item {
				display: flex;
				justify-content: center;
			}
			.owl-nav {
				position: absolute;
		    top: -50px;
		    right: 0;
			}
		}
		&.strengths {
			.owl-theme {
				.item {
					background-color: #2bd96b;
				}
			}
		}
		&.typicals {
			.owl-theme {
				.item {
					background-color: #e6da00;
				}
			}	
		}
		&.needs {
			.owl-theme {
				.item {
					background-color: #ff5c33;
				}
			}	
		}
		
	}
`

export default ADLWrapper
