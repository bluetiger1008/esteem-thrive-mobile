import { all, takeEvery, put, fork, call } from 'redux-saga/effects'
import { push } from 'react-router-redux'

import {
  listAllChildrenAssessments,
  listAssessmentsAPI,
  getQuestionnaireAPI,
  createAssessmentAPI
} from '../../helpers/apis'

import actions from './actions'

export function* getChildren() {
  yield takeEvery('GET_CHILDREN', function*() {
    let children

    try {
      children = yield call(listAllChildrenAssessments)

      yield put({
        type: actions.GET_CHILDREN_SUCCESS,
        children: children
      })
    } catch (error) {
      yield put({ type: actions.GET_CHILDREN_FAIL })
    } finally {
    }
  })
}

export function* getAssessments() {
  yield takeEvery('GET_ASSESSMENTS_REQUEST', function*() {
    let assessments

    try {
      assessments = yield call(listAssessmentsAPI)

      yield put({
        type: actions.GET_ASSESSMENTS_SUCCESS,
        assessments: assessments
      })
    } catch (error) {
      yield put({
        type: actions.GET_ASSESSMENTS_FAIL
      })
    }
  })
}

export function* selectChildren() {
  yield takeEvery('SELECT_CHILDREN', function*(payload) {
    yield put(push('/assessments'))
  })
}

export function* selectAssessment() {
  yield takeEvery('SELECT_ASSESSMENT', function*(payload) {
    let questionnaires
    try {
      questionnaires = yield call(getQuestionnaireAPI, payload.assessment.id)

      yield put({
        type: actions.GET_QUESTIONNAIRES_SUCCESS,
        questionnaires
      })

      yield put(push('/questionnaires'))
    } catch (error) {
      yield put({
        type: actions.GET_QUESTIONNAIRES_FAIL
      })
    }
  })
}

export function* resetQuestionnaires() {
  yield takeEvery('RESET_QUESTIONNAIRES', function*(payload) {
    yield put(push('/questionnaires'))
  })
}

export function* editQuestionnaire() {
  yield takeEvery('EDIT_QUESTIONNAIRE', function*(payload) {
    yield put(push('/questionnaires/edit'))
  })
}

export function* changeAnswer() {
  yield takeEvery('CHANGE_ANSWER', function*(payload) {
    yield put(push('/questionnaires/responses'))
  })
}

export function* submitResponses() {
  yield takeEvery('SUBMIT_RESPONSES', function*(payload) {
    let createAssessment
    console.log('submit responses', payload.assessmentData)

    try {
      createAssessment = yield call(createAssessmentAPI, payload.assessmentData)

      // console.log(JSON.stringify(createAssessment.data.assessment));
      yield put({
        type: actions.COMPLETED_QUESTIONNAIRES_SUCCESS,
        assessmentData: payload.assessmentData
      })

      yield put(push('/questionnaires/instant_scores'))
    } catch (error) {}
  })
}

export function* selectLastAnswer() {
  yield takeEvery('SELECT_LAST_ANSWER', function*(payload) {
    yield put(push('/questionnaires/responses'))
  })
}

export function* continueAssessment() {
  yield takeEvery('CONTINUE_ASSESSMENTS', function*() {
    yield put(push('/assessments'))
  })
}

export default function* rootSaga() {
  yield all([
    fork(getChildren),
    fork(getAssessments),
    fork(selectChildren),
    fork(selectAssessment),
    fork(selectLastAnswer),
    fork(resetQuestionnaires),
    fork(editQuestionnaire),
    fork(changeAnswer),
    fork(submitResponses),
    fork(continueAssessment)
  ])
}
