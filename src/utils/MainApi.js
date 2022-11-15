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

export const getSavedArticles = (token) => {
  return fetch(`${baseUrl}/articles`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
};

export const savedArticle = (token, article, keyword) => {
  const { title, description, publisedAt, source, url, urlToImage } = article;
  return fetch(`${baseUrl}/articles`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      keyword: keyword,
      title: title,
      text: description,
      date: publisedAt,
      source: source,
      link: url,
      image: urlToImage,
    }),
  }).then(checkResponse);
};
