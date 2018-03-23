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
	return client.get('/children')
		.then(response => response.data.children)
		.catch(err => {
			throw err
		});
}

function listAssessmentsAPI() {
  return client.get('/questionnaires')
    .then(response => response.data.questionnaires)
    .catch(err => {
      throw err
    });
}

function listOutstandingAssessmentsAPI(selectedChild) {
  console.log(selectedChild);
  return client.get('/assessments/outstanding_assessments', {"child_id": 1})
    .then(response => response.data.assessments)
    .catch(err => {
      throw err
    }); 
}

function getQuestionnaireAPI(assessmentID) {
  return client.get('/questionnaires/' + assessmentID)
    .then(response => response.data.questionnaire)
    .catch(err => {
      throw err
    });
}

export { 
  loginAPI,
  listChildrenAPI,
  listAssessmentsAPI,
  listOutstandingAssessmentsAPI,
  getQuestionnaireAPI 
};