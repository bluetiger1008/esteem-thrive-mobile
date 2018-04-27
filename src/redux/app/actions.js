const appActions = {
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
  
  SUBMIT_RESPONSES: 'SUBMIT_RESPONSES',
  COMPLETED_QUESTIONNAIRES_SUCCESS: 'COMPLETED_QUESTIONNAIRES_SUCCESS',
  SET_ASSESSMENT_COMPLETED: 'SET_ASSESSMENT_COMPLETED',

  CONTINUE_ASSESSMENTS: 'CONTINUE_ASSESSMENTS',

  select_children: children => ({
    type: appActions.SELECT_CHILDREN,
    children
  }),

  get_children: () => ({
    type: appActions.GET_CHILDREN
  }),

  get_assessments: () => ({
    type: appActions.GET_ASSESSMENTS_REQUEST
  }),

  select_assessment: assessment => ({
    type: appActions.SELECT_ASSESSMENT,
    assessment
  }),

  select_answer: (question_response, question) => ({
    type: appActions.SELECT_ANSWER,
    payload: {
      question_response,
      question
    }
  }),

  select_last_answer: (question_response, question) => ({
    type: appActions.SELECT_LAST_ANSWER,
    payload: {
      question_response,
      question
    }
  }),

  go_previous_question: () => ({
    type: appActions.PREVIOUS_QUESTION
  }),

  reset_questionnaires: () => ({
    type: appActions.RESET_QUESTIONNAIRES
  }),

  edit_questionnaire: questionnaire_id => ({
    type: appActions.EDIT_QUESTIONNAIRE,
    questionnaire_id
  }),

  change_answer: (answer, selectedQuestionnaire) => ({
    type: appActions.CHANGE_ANSWER,
    payload: {
      answer,
      selectedQuestionnaire
    }
  }),

  submit_responses: assessmentData => ({
    type: appActions.SUBMIT_RESPONSES,
    assessmentData
  }),

  setAssessmentCompleted: (assessmentData) => ({
    type: appActions.SET_ASSESSMENT_COMPLETED,
    assessmentData
  }),

  continue_assessments: () => ({
    type: appActions.CONTINUE_ASSESSMENTS
  })
}

export default appActions
