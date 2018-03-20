import { Map } from 'immutable';

export function clearToken() {
  localStorage.removeItem('id_token');
}

export function getToken() {
  try {
    const idToken = localStorage.getItem('id_token');
    const user_email = localStorage.getItem('user_email');
    return new Map({ idToken, user_email });
  } catch (err) {
    clearToken();
    return new Map();
  }
}