import { push } from 'react-router-redux';

const appActons = {
  SELECT_CHILDREN: 'SELECT_CHILDREN',
  GET_CHILDREN: 'GET_CHILDREN',
  GET_CHILDREN_SUCCESS: 'GET_CHILDREN_SUCCESS',
  GET_CHILDREN_FAIL: 'GET_CHILDREN_FAIL',

  GET_ASSESSMENTS_REQUEST: 'GET_ASSESSMENTS_REQUEST',
  GET_ASSESSMENTS_SUCCESS: 'GET_ASSESSMENTS_SUCCESS',
  GET_ASSESSMENTS_FAIL: 'GET_ASSESSMENTS_FAIL',

  GET_OUTSTANDING_ASSESSMENTS_REQUEST: 'GET_OUTSTANDING_ASSESSMENTS_REQUEST',
  GET_OUTSTANDING_ASSESSMENTS_SUCCESS: 'GET_OUTSTANDING_ASSESSMENTS_SUCCESS',
  GET_OUTSTANDING_ASSESSMENTS_FAILED: 'GET_OUTSTANDING_ASSESSMENTS_FAILED',

  SELECT_ASSESSMENT: 'SELECT_ASSESSMENT',
  GET_QUESTIONNAIRES_SUCCESS: 'GET_QUESTIONNAIRES_SUCCESS',
  GET_QUESTIONNAIRES_FAIL: 'GET_QUESTIONNAIRES_FAIL',

  SELECT_ANSWER: 'SELECT_ANSWER',
  SELECT_LAST_ANSWER: 'SELECT_LAST_ANSWER',
  PREVIOUS_QUESTION: 'PREVIOUS_QUESTION',

  RESET_QUESTIONNAIRES: 'RESET_QUESTIONNAIRES',
  EDIT_QUESTIONNAIRE: 'EDIT_QUESTIONNAIRE',
  CHANGE_ANSWER: 'CHANGE_ANSWER',
  COMPLETED_QUESTIONNAIRES: 'COMPLETED_QUESTIONNAIRES',
  COMPLETED_QUESTIONNAIRES_SUCCESS: 'COMPLETED_QUESTIONNAIRES_SUCCESS',
  
  CONTINUE_ASSESSMENTS: 'CONTINUE_ASSESSMENTS',

  select_children: ( children ) => ({
    type: appActons.SELECT_CHILDREN,
    children  
  }),

  get_children: () => ({
    type: appActons.GET_CHILDREN,
  }),

  get_assessments: () => ({
  	type: appActons.GET_ASSESSMENTS_REQUEST
  }),

  select_assessment: (assessment) => ({
    type: appActons.SELECT_ASSESSMENT,
    assessment
  }),

  select_answer: (question_response, question) => ({
    type: appActons.SELECT_ANSWER,
    payload: {
      question_response,
      question
    }
  }),

  select_last_answer: (question_response, question) => ({
    type: appActons.SELECT_LAST_ANSWER,
    payload: {
      question_response,
      question
    }
  }),

  go_previous_question: () => ({
    type: appActons.PREVIOUS_QUESTION
  }),

  reset_questionnaires: () => ({
    type: appActons.RESET_QUESTIONNAIRES
  }),

  edit_questionnaire: (questionnaire_id) => ({
    type: appActons.EDIT_QUESTIONNAIRE,
    questionnaire_id
  }),

  change_answer: (answer, selectedQuestionnaire) => ({
    type: appActons.CHANGE_ANSWER,
    payload: {
      answer,
      selectedQuestionnaire
    }
  }),

  completed_questionnaires: (assessmentData) => ({
    type: appActons.COMPLETED_QUESTIONNAIRES,
    assessmentData
  }),

  continue_assessments: () => ({
    type: appActons.CONTINUE_ASSESSMENTS
  })
};

export default appActons;
