//   Routes code
export const BASE_URL = 'https://register.nomoreparties.co';

// auth.js

export const register = ({ email, password }) => {
    return fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
    .then((response) => {
        const regex = /2[0-9]+/g;
      try {
        if (regex.test(response.status)){
            console.log(response)
          return response.json();
        }
      } catch(event){
          return (event)
      }
    })
    .then((res) => {
      return res;
    })
    .catch((err) => console.log(err));
  };

export const authorize = ({ email, password }) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
  .then(response => response.json())
  .then((data) => {
      console.log(data);
    if (data.token){
      localStorage.setItem('token', data.token);
      return data;
    }
  })
  .catch(err => console.log(err))
};

export const checkToken = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    })
    .then(res => res.json())
    .then(data => data)
  }