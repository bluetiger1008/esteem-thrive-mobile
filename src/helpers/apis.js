import axios from 'axios';
import { getToken } from './utility';

const apiURL = 'https://esteem-thrive-api.herokuapp.com/v1/';

const client = axios.create({
	baseURL: 'https://esteem-thrive-api.herokuapp.com/v1'
});

client.interceptors.request.use(
  config => {
    if (getToken().toJS() !== null) {
      config.headers['X-User-Token'] = getToken().toJS().idToken;
      config.headers['X-User-Email'] = getToken().toJS().user_email;
    }

    return config;
  },
  error => {
    return error
  }
)

function loginAPI(authData) {
  return client.post('/sessions', authData )
    .then(response => {
    	return response.data.user;
    })
    .catch(err => {
      throw err
    });
}

function listChildrenAPI() {
	console.log(getToken().toJS());
	return client.get('/children')
		.then(response => response.data.children)
		.catch(err => {
			throw err
		});
}

export { loginAPI, listChildrenAPI };