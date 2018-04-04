import axios from 'axios';
import { getToken } from './utility';

const client = axios.create({
	baseURL: 'https://esteem-thrive-api.herokuapp.com/v1'
});

client.interceptors.request.use(
  config => {
    if (getToken().toJS() !== null) {
      config.headers['X-User-Token'] = getToken().toJS().idToken;
      config.headers['X-User-Email'] = getToken().toJS().userEmail;
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

function logoutAPI() {
  return client.delete('/sessions' )
    .then(response => {
      return response;
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

function listAllChildrenAssessments() {
  return client.get('/assessments/outstanding_assessments')
    .then(response => {
      return response.data.children;
    })
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
  return client.get('/assessments/outstanding_assessments', {params: { child_id: selectedChild.id}})
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

function createAssessmentAPI(assessmentData) {
  return client.post('/assessments', assessmentData )
    .then(response => {
      console.log(response);
      return response;
    })
    .catch(err => {
      throw err
    });
}

export { 
  loginAPI,
  logoutAPI,
  listChildrenAPI,
  listAllChildrenAssessments,
  listAssessmentsAPI,
  listOutstandingAssessmentsAPI,
  getQuestionnaireAPI,
  createAssessmentAPI
};