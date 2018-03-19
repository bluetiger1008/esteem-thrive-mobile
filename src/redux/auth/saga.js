import { all, takeEvery, takeLatest, put, fork, call } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import axios from 'axios';

import { clearToken } from '../../helpers/utility';
import { loginAPI } from '../../helpers/apis';
import actions from './actions';

const fakeApiCall = true; // auth0 or express JWT

export function* loginRequest() {
  yield takeLatest('LOGIN_REQUEST', function*(payload) {
    const authData = payload.authData;

    let user;
    
    try {
      user = yield call(loginAPI, authData);
      console.log(user);
      yield put({
        type: actions.LOGIN_SUCCESS,
        token: user.token,
        user: user
      });
    } 
    catch (error) {
      yield put({ type: actions.LOGIN_ERROR });
    }
    finally {

    }
  });
}

export function* loginSuccess() {
  yield takeEvery(actions.LOGIN_SUCCESS, function*(payload) {
    yield localStorage.setItem('id_token', payload.token);
  });
}

export function* loginError() {
  yield takeEvery(actions.LOGIN_ERROR, function*() {});
}

export function* logout() {
  yield takeEvery(actions.LOGOUT, function*() {
    clearToken();
    yield put(push('/'));
  });
}
export default function* rootSaga() {
  yield all([
    fork(loginRequest),
    fork(loginSuccess),
    fork(loginError),
    fork(logout)
  ]);
}
