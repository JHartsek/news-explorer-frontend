const baseUrl =
  'https://api.news-explorer-hartsek.students.nomoredomainssbs.ru';
const headers = {
  'content-type': 'application/json',
};

const checkResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

export const signup = (email, password, name) => {
  return fetch(`${baseUrl}/signup`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
      password: password,
      email: email,
      name: name,
    }),
  }).then(checkResponse);
};

export const signin = (email, password) => {
  return fetch(`${baseUrl}/signin`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
      password: password,
      email: email,
    }),
  }).then(checkResponse);
};

export const checkToken = (token) => {
  return fetch(`${baseUrl}/users/me`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
};
