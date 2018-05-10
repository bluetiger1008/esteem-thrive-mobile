import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import {
  createAssessmentAPI
} from '../../../helpers/apis'
import QuestionnaireHeader from '../common/questionnaireHeader'
import { InstantScoresWrapper } from './index.style'
import appActions from '../../../redux/app/actions'
import DessaParent from './dessaParent'
import MedSideEffect from './medSideEffect'
import ADL from './ADL'
import Vanderbilt from './vanderbilt'
import Emotional from './emotional'
import Header from '../../Header/header'

const { setAssessmentCompleted, continue_assessments } = appActions

class InstantScores extends Component {
	state = {
		instantScoresData: null,
		questionnaireName: null
	}

	async componentDidMount() {
		const { submittingAssessmentData, selectedChildren } = this.props;

    try {
      const createdAssessment = await createAssessmentAPI(submittingAssessmentData)
			
      this.setState({
      	instantScoresData: createdAssessment.data.assessment,
      	questionnaireName: createdAssessment.data.assessment.questionnaire.name
      }, () => {
      	console.log(this.state.instantScoresData)
			})

			this.props.setAssessmentCompleted(createdAssessment.data.assessment)
    } catch(error) {
      // do something with error
    }
	}

	onContinue = () => {
		this.props.continue_assessments()
	}

	render() {
		const { instantScoresData, questionnaireName } = this.state
		const { questionnaires, current_questionnaire_step } = this.props

		return (
			<InstantScoresWrapper>
				<Header />
        {questionnaires && (
					<div className="instant-content">
						<QuestionnaireHeader
							questionnaires={questionnaires}
							current_questionnaire_step={current_questionnaire_step}
						/>

						<div className="content">
							{ questionnaireName !== null ? (
									<div>
										{/* <p className="title">Good Job! You just completed the {questionnaireName}</p> */}
										{ questionnaireName === 'DESSA - Parent' &&
											<DessaParent scoreData={instantScoresData} />
										}
										{ (questionnaireName === 'Self Sufficiency' || questionnaireName === 'Sleep ADL' || questionnaireName === 'Academic Performance' || questionnaireName === 'Self Control') &&
											<div>
												<p className="title">Here are the results from your assessment. Visit the parent dashboard on a tablet or other larger screen device</p>
												<ADL scoreData={instantScoresData}/>
											</div>
										}
										{ questionnaireName === 'Medication Side Effects' &&
											<MedSideEffect scoreData={instantScoresData} />
										}
										{ questionnaireName === 'Vanderbilt - Parent'  && 
											<Vanderbilt scoreData={instantScoresData} />
										}
										{ questionnaireName === 'Emotional Assessment' &&
											<Emotional scoreData={instantScoresData} />
										}
									</div>
								) : (
									<div className="loading">
										<p>Generating score...</p>
									</div>
								)
							}
						</div>

						{ questionnaireName !== null && (
							<div className="footer" onClick={this.onContinue}>
								<p>Continue</p>
							</div>
						)}
					</div>
				)}
			</InstantScoresWrapper>
		);
	}
}

export default connect(
  state => ({
    ...state.App.toJS()
  }),
  { setAssessmentCompleted, continue_assessments }
)(InstantScores)