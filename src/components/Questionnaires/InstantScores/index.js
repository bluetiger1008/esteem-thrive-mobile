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

const { setAssessmentCompleted } = appActions

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

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

	render() {
		const { instantScoresData, questionnaireName } = this.state
		const { questionnaires, current_questionnaire_step } = this.props

		return (
			<InstantScoresWrapper>
				<Header />
        {questionnaires && (
					<div>
						<QuestionnaireHeader
							questionnaires={questionnaires}
							current_questionnaire_step={current_questionnaire_step}
						/>

						<div className="content">
							{ questionnaireName !== null ? (
									<div>
										<p className="title">Good Job! You just completed the {questionnaireName}</p>
										{ questionnaireName === 'DESSA - Parent' &&
											<DessaParent scoreData={instantScoresData} />
										}
										{ (questionnaireName === 'Self Sufficiency' || questionnaireName === 'Sleep ADL' || questionnaireName === 'Academic Performance' || questionnaireName === 'Self Control') &&
											<ADL scoreData={instantScoresData}/>
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
										<p>Loading...</p>
									</div>
								)
							}
						</div>

						{ questionnaireName !== null && (
							<div className="footer">
								<Link to="/questionnaires/completed" disabled={ questionnaireName === null }>
									Continue
								</Link>
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
  { setAssessmentCompleted }
)(InstantScores)