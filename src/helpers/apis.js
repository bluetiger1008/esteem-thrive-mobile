import axios from 'axios';

const apiURL = 'https://esteem-thrive-api.herokuapp.com/v1/';

function loginAPI(authData) {
  return axios.post(apiURL + 'sessions', authData )
    .then(response => response.data.user)
    .catch(err => {
      throw err
    });
}

export { loginAPI };