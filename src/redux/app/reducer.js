import { Map } from 'immutable';
import actions from './actions';

const initState = new Map({
  children: [],
  selectedChildren: null,
  assessments: [],
  questionnaires: [],
  current_questionnaire_step: 0
});

export default function appReducer(state = initState, action) {
  switch (action.type) {
    case actions.SELECT_CHILDREN:
      return state.set('selectedChildren', action.payload);
    case actions.GET_CHILDREN_SUCCESS:
      return state.set('children', action.children);   
    case actions.GET_ASSESSMENTS_SUCCESS:
    	return state.set('assessments', action.assessments);
    case actions.GET_QUESTIONNAIRES_SUCCESS:
      return state.set('questionnaires', action.questionnaires);
    case actions.SELECT_ANSWER:
      let nextStep = state.toJS().current_questionnaire_step + 1;
      return state.set('current_questionnaire_step', nextStep);
    default:
      return state;
  }
}