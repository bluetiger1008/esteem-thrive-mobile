import { all, takeEvery, takeLatest, put, fork, call } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import axios from 'axios';

import { clearToken } from '../../helpers/utility';
import { listChildrenAPI, listAssessmentsAPI, getQuestionnaireAPI, listOutstandingAssessmentsAPI } from '../../helpers/apis';
import actions from './actions';

export function* getChildren() {
  yield takeEvery('GET_CHILDREN', function*() {
    let children;
    
    try {
      children = yield call(listChildrenAPI);

      yield put({
        type: actions.GET_CHILDREN_SUCCESS,
        children: children
      });
    } 
    catch (error) {
      yield put({ type: actions.GET_CHILDREN_FAIL });
    }
    finally {

    }
  });
}

export function* getAssessments() {
  yield takeEvery('GET_ASSESSMENTS_REQUEST', function*() {
    let assessments;

    try {
      assessments = yield call(listAssessmentsAPI);
      
      yield put({
        type: actions.GET_ASSESSMENTS_SUCCESS,
        assessments: assessments
      });
    }
    catch (error) {
      yield put({
        type: actions.GET_ASSESSMENTS_FAIL
      });
    }
  });
}

export function* selectChildren() {
  yield takeEvery('SELECT_CHILDREN', function*(payload) {
    let outstanding_assessments;

    try {
      outstanding_assessments = yield call(listOutstandingAssessmentsAPI, payload.selectedChildren);
      
      yield put({
        type: actions.GET_OUTSTANDING_ASSESSMENTS_SUCCESS,
        assessments: outstanding_assessments
      });

      yield put(push('/assessments'));
    }
    catch (error) {
      yield put({
        type: actions.GET_OUTSTANDING_ASSESSMENTS_FAILED
      });
    }
    
  });
}

export function* selectAssessment() {
  yield takeEvery('SELECT_ASSESSMENT', function*(payload) {
    let questionnaires;
    try {
      questionnaires = yield call(getQuestionnaireAPI, payload.assessment.id);

      yield put({
        type: actions.GET_QUESTIONNAIRES_SUCCESS,
        questionnaires
      });

      yield put(push('/questionnaires'));
    }
    catch(error) {
      yield put({
        type: actions.GET_QUESTIONNAIRES_FAIL
      });
    }
    
  });
}

export default function* rootSaga() {
  yield all([
    fork(getChildren),
    fork(getAssessments),
    fork(selectChildren),
    fork(selectAssessment)
  ]);
}
