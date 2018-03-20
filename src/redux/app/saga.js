import { all, takeEvery, takeLatest, put, fork, call } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import axios from 'axios';

import { clearToken } from '../../helpers/utility';
import { listChildrenAPI } from '../../helpers/apis';
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

export function* getChildrenFail() {
  yield takeEvery(actions.GET_CHILDREN_FAIL, function*() {});
}

export default function* rootSaga() {
  yield all([
    fork(getChildren)
  ]);
}
