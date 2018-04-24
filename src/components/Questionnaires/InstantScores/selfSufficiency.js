import React, { Component } from 'react'
import OwlCarousel from 'react-owl-carousel'

import ADLWrapper from './ADLWrapper.style'

class SelfSufficiency extends Component {
	state = {
		strengths: [],
		typicals: [],
		needs: []
	}

	componentDidMount() {
		const { scoreData } = this.props;

		scoreData.questionnaire_responses.map((response, idx) => {
			let question_title

			switch (response.question_response.rating) {
				case 'strength':
					this.setState((prevState) => {
						prevState.strengths.push(response.question.title.substring(0,50)+'...');
						return prevState
					})
					break
				case 'typical':
					this.setState((prevState) => {
						prevState.typicals.push(response.question.title.substring(0,50)+'...')
						return prevState
					})
					break
				case 'need':
					this.setState((prevState) => {
						prevState.needs.push(response.question.title.substring(0,50)+'...')
						return prevState
					})
					break
			}
		})
	}

	render() {
		const { strengths, typicals, needs } = this.state

		console.log(strengths)

		return (
			<ADLWrapper>
				<h1>Self Sufficiency</h1>
				<div className="scores strengths">
					<p className="title">{strengths.length} Strengths</p>
					{ strengths.length > 0 && 
						<OwlCarousel 
							className="owl-theme"
							loop margin={5} nav
						>
					    { strengths.map((item, idx) => {
								return (
									<div className="item" key={idx}>
										<p>{item}</p>
									</div>
								)
							})}
						</OwlCarousel>
					}
				</div>
				
				<div className="scores typicals">
					<p className="title">{typicals.length} Typicals</p>
					{ typicals.length > 0 && 
						<OwlCarousel 
							className="owl-theme"
							loop margin={5} nav
						>
					    { typicals.map((item, idx) => {
								return (
									<div className="item" key={idx}>
										<p>{item}</p>
									</div>
								)
							})}
						</OwlCarousel>
					}
				</div>

				<div className="scores needs">
					<p className="title">{needs.length} Needs</p>
					{ needs.length > 0 && 
						<OwlCarousel 
							className="owl-theme"
							loop margin={5} nav
						>
					    { needs.map((item, idx) => {
								return (
									<div className="item" key={idx}>
										<p>{item}</p>
									</div>
								)
							})}
						</OwlCarousel>
					}
				</div>
			</ADLWrapper>
		)
	}
}

export default SelfSufficiency