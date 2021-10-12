//   Routes code
export const BASE_URL = 'https://api.boydaround.students.nomoreparties.site';

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
      return checkResponse(response);
    })
    .then((res) => {
      return res;
    })
};

export const authorize = ({ email, password }) => {
  console.log('Boogah Boogah')
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
    .then(response => {
      return checkResponse(response)
    })
    .then((data) => {
      console.log(data);
      if (data.token) {
        localStorage.setItem('token', data.token);
        return data;
      }
    })
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
    .then(response => {
      return checkResponse(response)
    })
    .then(data => data)
}

// Check if response is valid
const checkResponse = (response) => {
  if (response.ok) {
    return response.json()
  }
  else {
    return Promise.reject(`Error: ${response.status}`)
  }
}