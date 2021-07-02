import axios from 'axios';

const API_URL = 'https://fractalepasswordkeeper.herokuapp.com/api/auth/';

class AuthService {
  login(user) {
    return axios
      .post(API_URL + 'login', {
        email: user.email,
        password: user.password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(user) {
    return axios.post(API_URL + 'register', {
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      adresse: user.adresse,
      password:user.password,
      roles: user.roles
    });
  }
}

export default new AuthService();
