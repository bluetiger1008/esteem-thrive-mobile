import { Map } from 'immutable';

export function clearToken() {
  localStorage.removeItem('id_token');
}

export function getToken() {
  try {
    const idToken = localStorage.getItem('id_token');
    const userEmail = localStorage.getItem('user_email');
    return new Map({ idToken, userEmail });
  } catch (err) {
    clearToken();
    return new Map();
  }
}