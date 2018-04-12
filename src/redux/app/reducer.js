import { Map } from 'immutable'
import actions from './actions'
import _ from 'lodash'

const initState = new Map({
  children: [],
  selectedChildren: null,
  assessments: [],
  selectedQuestionnaireID: null,
  questionnaires: null,
  selectedQuestionnaire: {},
  completedQuestionnairesLength: 0,
  current_questionnaire_step: 1,
  questionnaire_responses: {
    ids: [],
    names: []
  },
  responseSubmitting: false
})

export default function appReducer(state = initState, action) {
  switch (action.type) {
    case actions.SELECT_CHILDREN:
      return state.set('selectedChildren', action.children).set('current_questionnaire_step', 1)

    case actions.GET_CHILDREN_SUCCESS:
      return state.set('children', action.children)

    case actions.SELECT_ASSESSMENT:
      return state
        .set('selectedQuestionnaireID', action.assessment.id)
        .set('questionnaire_responses', { ids: [], names: [] })

    case actions.GET_ASSESSMENTS_SUCCESS:
      return state.set('assessments', action.assessments)

    case actions.GET_QUESTIONNAIRES_SUCCESS:
      return state.set('questionnaires', action.questionnaires)

    case actions.SELECT_ANSWER:
      let nextStep = state.toJS().current_questionnaire_step + 1
      state.toJS().questionnaire_responses.ids.push({
        question_response_id: action.payload.question_response.id,
        question_id: action.payload.question.id
      })
      state.toJS().questionnaire_responses.names.push({
        questionnaire_id: action.payload.question.id,
        question_response_name: action.payload.question_response.name,
        question_title: action.payload.question.title
      })
      return state.set('current_questionnaire_step', nextStep)

    case actions.SELECT_LAST_ANSWER:
      state.toJS().questionnaire_responses.ids.push({
        question_response_id: action.payload.question_response.id,
        question_id: action.payload.question.id
      })
      state.toJS().questionnaire_responses.names.push({
        questionnaire_id: action.payload.question.id,
        question_response_name: action.payload.question_response.name,
        question_title: action.payload.question.title
      })
      return state

    case actions.PREVIOUS_QUESTION:
      let prevStep = state.toJS().current_questionnaire_step - 1
      return state.set('current_questionnaire_step', prevStep)

    case actions.RESET_QUESTIONNAIRES:
      return state.set('questionnaire_responses', { ids: [], names: [] }).set('current_questionnaire_step', 1)

    case actions.EDIT_QUESTIONNAIRE:
      let selectedQuestionnaire = _.find(state.toJS().questionnaires.questions, { id: action.questionnaire_id })
      return state.set('selectedQuestionnaire', selectedQuestionnaire)

    case actions.CHANGE_ANSWER:
      _.find(state.toJS().questionnaire_responses.ids, {
        question_id: action.payload.selectedQuestionnaire.id
      }).question_response_id =
        action.payload.answer.id
      _.find(state.toJS().questionnaire_responses.names, {
        questionnaire_id: action.payload.selectedQuestionnaire.id
      }).question_response_name =
        action.payload.answer.name
      return state

    case actions.COMPLETED_QUESTIONNAIRES:
      return state.set('responseSubmitting', true)

    case actions.COMPLETED_QUESTIONNAIRES_SUCCESS:
      _.find(state.toJS().selectedChildren.questionnaires, {
        id: action.assessment.questionnaire_id
      }).completed = true
      return state.set('responseSubmitting', false)

    case actions.CONTINUE_ASSESSMENTS:
      let completedQuestionnairesLength = _.filter(state.toJS().selectedChildren.questionnaires, { completed: true })
        .length
      return state
        .set('current_questionnaire_step', 1)
        .set('completedQuestionnairesLength', completedQuestionnairesLength)

    default:
      return state
  }
}
