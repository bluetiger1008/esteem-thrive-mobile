import { Map } from 'immutable';
import actions from './actions';
import { push } from 'react-router-redux';

const initState = new Map({
  children: [],
  selectedChildren: {
    "id": 89,
    "name": "João Pedro",
    "outstanding_assessments_size": 9,
    "questionnaires": [
      {
          "id": 4,
          "title": "Emotional Assessment"
      },
      {
          "id": 5,
          "title": "Medication Side Effects"
      },
      {
          "id": 14,
          "title": "Vanderbilt - Parent"
      },
      {
          "id": 17,
          "title": "Sleep Profile"
      },
      {
          "id": 1,
          "title": "Self Sufficiency"
      },
      {
          "id": 2,
          "title": "Self Control"
      },
      {
          "id": 3,
          "title": "Academic Performance"
      },
      {
          "id": 25,
          "title": "DESSA - Parent"
      },
      {
          "id": 20,
          "title": "Sleep ADL"
      }
    ]},
  assessments: [],
  selectedQuestionnaireID: null,
  questionnaires: [],
  current_questionnaire_step: 1,
  questionnaire_responses: {
    ids: [],
    names: []
  }
});

export default function appReducer(state = initState, action) {
  switch (action.type) {
    case actions.SELECT_CHILDREN:
      return state
        .set('selectedChildren', action.children)
        .set('current_questionnaire_step', 1);
    case actions.GET_CHILDREN_SUCCESS:
      return state.set('children', action.children); 
    case actions.SELECT_ASSESSMENT:
      console.log(action.assessment);
      return state
        .set('selectedQuestionnaireID', action.assessment.id)
        .set('questionnaire_responses', { ids: [], names: []});
    case actions.GET_ASSESSMENTS_SUCCESS:
    	return state.set('assessments', action.assessments);
    case actions.GET_QUESTIONNAIRES_SUCCESS:
      return state.set('questionnaires', action.questionnaires);
    case actions.SELECT_ANSWER:
      let nextStep = state.toJS().current_questionnaire_step + 1;
      state.toJS().questionnaire_responses.ids.push({ question_response_id: action.payload.question_response.id, question_id: action.payload.question.id});
      state.toJS().questionnaire_responses.names.push({ question_response_name: action.payload.question_response.name, question_title: action.payload.question.title});
      return state
        .set('current_questionnaire_step', nextStep);
    case actions.SELECT_LAST_ANSWER:
      state.toJS().questionnaire_responses.ids.push({ question_response_id: action.payload.question_response.id, question_id: action.payload.question.id});
      state.toJS().questionnaire_responses.names.push({ question_response_name: action.payload.question_response.name, question_title: action.payload.question.title});
      return state;
    case actions.PREVIOUS_QUESTION:
      let prevStep = state.toJS().current_questionnaire_step - 1;
      return state.set('current_questionnaire_step', prevStep);

    case actions.RESET_QUESTIONNAIRES:
      return state
        .set('questionnaire_responses', { ids: [], names: []})
        .set('current_questionnaire_step', 1);
    default:
      return state;
  }
}