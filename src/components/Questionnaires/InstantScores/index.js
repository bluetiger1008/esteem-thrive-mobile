import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  createAssessmentAPI
} from '../../../helpers/apis'
import QuestionnaireHeader from '../common/questionnaireHeader'
import InstantScoresWrapper from './index.style'
import appActions from '../../../redux/app/actions'
import DessaParent from './dessaParent'
import SelfSufficiency from './selfSufficiency'

const { completed_questionnaires } = appActions

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

const responsesData = {
	"child_id":100,
	"questionnaire_id":1,
	"questionnaire_responses":[
		{"question_response_id":6,"question_id":1},
		{"question_response_id":2,"question_id":2},
		{"question_response_id":2,"question_id":3},
		{"question_response_id":4,"question_id":4},
		{"question_response_id":4,"question_id":5},
		{"question_response_id":5,"question_id":6},
		{"question_response_id":7,"question_id":7},
		{"question_response_id":7,"question_id":8},
		{"question_response_id":5,"question_id":9},
		{"question_response_id":4,"question_id":10},
		{"question_response_id":1,"question_id":11},
		{"question_response_id":1,"question_id":12},
		{"question_response_id":6,"question_id":13},
		{"question_response_id":5,"question_id":14},
		{"question_response_id":6,"question_id":15}
	]
}

class InstantScores extends Component {
	state = {
		instantScoresData: null,
		questionnaireName: null
	}

	async componentDidMount() {
    try {
      const createdAssessment = await createAssessmentAPI(responsesData)

      this.setState({
      	instantScoresData: createdAssessment.data.assessment,
      	questionnaireName: createdAssessment.data.assessment.questionnaire.name
      }, () => {
      	console.log(this.state.instantScoresData)
      })
      // do something with response
    } catch(error) {
      // do something with error
    }
	}

	render() {
		const { instantScoresData, questionnaireName } = this.state

		return (
			<InstantScoresWrapper>
				{/*<QuestionnaireHeader
          questionnaires={questionnaires}
          current_questionnaire_step={current_questionnaire_step}
        />*/}
        

				<h1>InstantScores</h1>

				{ questionnaireName !== null && (
						<div>
							{ questionnaireName === "DESSA - Parent" &&
								<DessaParent scoreData={instantScoresData} />
							}
							{ questionnaireName === "Self Sufficiency" &&
								<SelfSufficiency scoreData={instantScoresData} />
							}
						</div>
					)
				}
			</InstantScoresWrapper>
		);
	}
}

export default connect(
  state => ({
    ...state.App.toJS()
  }),
  { completed_questionnaires }
)(InstantScores)