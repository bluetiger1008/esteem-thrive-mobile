import { all, takeEvery, takeLatest, put, fork, call } from 'redux-saga/effects'
import { push } from 'react-router-redux'

import { clearToken } from '../../helpers/utility'
import { loginAPI, logoutAPI } from '../../helpers/apis'
import actions from './actions'

export function* loginRequest() {
  yield takeLatest('LOGIN_REQUEST', function*(payload) {
    const authData = payload.authData

    let user

    try {
      user = yield call(loginAPI, authData)
      yield put({
        type: actions.LOGIN_SUCCESS,
        token: user.token,
        user: user
      })

      yield put(push('/children'))
    } catch (error) {
      yield put({ type: actions.LOGIN_ERROR })
    }
  })
}

export function* loginSuccess() {
  yield takeEvery(actions.LOGIN_SUCCESS, function*(payload) {
    yield localStorage.setItem('id_token', payload.token)
    yield localStorage.setItem('user_email', payload.user.email)
  })
}

export function* loginError() {
  yield takeEvery(actions.LOGIN_ERROR, function*() {})
}

export function* logout() {
  yield takeEvery(actions.LOGOUT, function*() {
    let user

    try {
      user = yield call(logoutAPI)
      clearToken()
      yield put(push('/'))
    } catch (error) {}
  })
}

export default function* rootSaga() {
  yield all([fork(loginRequest), fork(loginSuccess), fork(loginError), fork(logout)])
}
