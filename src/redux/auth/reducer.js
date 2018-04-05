import { Map } from 'immutable'
import { getToken } from '../../helpers/utility'
import actions from './actions'

const initState = new Map({
  idToken: null,
  userEmail: '',
  loginError: false
})

export default function authReducer(state = initState.merge(getToken()), action) {
  switch (action.type) {
    case action.LOGIN_REQUEST:
      return state.set('loginError', false)
    case actions.LOGIN_SUCCESS:
      return state
        .set('idToken', action.token)
        .set('userEmail', action.user.email)
        .set('loginError', false)
    case actions.LOGIN_ERROR:
      return state.set('loginError', true)
    case actions.LOGOUT:
      return initState
    default:
      return state
  }
}
