import styled from 'styled-components'

const PercentileBar = styled.div`
	width: 225px;
	height: 30px;
	display: flex;
	position: relative;
	margin-bottom: 30px;
	.red {
		width: 17%;
		height: 100%;
		background-color: #ff5c33;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
	}
	.yellow {
		width: 66%;
		height: 100%;
		background-color: #e6da00;
	}
	.green {
		width: 17%;
		height: 100%;
		background-color: #2bd96b;
		border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
	}
	.score-bar {
		position: absolute;
		top: -5px;
		left: ${props => props.score / 225 * 100}%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		.bar {
	    height: 40px;
	    width: 3px;
	    background-color: #5ac3bf;
		}
		p {
			margin: 0;
		}
	}
`

const DessaParentWrappper = styled.div`
	.percentile-bar {
		display: flex;
		justify-content: center;
	}
`
export { PercentileBar, DessaParentWrappper }