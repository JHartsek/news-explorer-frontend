const baseUrl = 'https://http://localhost:3000';
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
