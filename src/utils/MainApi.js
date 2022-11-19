const baseUrl =
  'https://api.news-explorer-hartsek.students.nomoredomainssbs.ru';
const headers = {
  'content-type': 'application/json',
};

export const sendRequest = (url, options) => {
  return fetch(url, options).then(checkResponse);
};

export const checkResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

export const signup = (email, password, name) => {
  return sendRequest(`${baseUrl}/signup`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
      name: name,
      email: email,
      password: password,
    }),
  });
};

export const signin = (email, password) => {
  return sendRequest(`${baseUrl}/signin`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
      password: password,
      email: email,
    }),
  });
};

export const checkToken = (token) => {
  return sendRequest(`${baseUrl}/users/me`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  });
};

export const getSavedArticles = (token) => {
  return sendRequest(`${baseUrl}/articles`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  });
};

export const saveArticle = (token, article, keyword) => {
  const { title, description, publishedAt, source, url, urlToImage } = article;
  return sendRequest(`${baseUrl}/articles`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      keyword: keyword,
      title: title,
      text: description,
      date: publishedAt,
      source: source.name,
      link: url,
      image: urlToImage,
    }),
  });
};

export const deleteArticle = (token, articleId) => {
  return sendRequest(`${baseUrl}/articles/${articleId}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  });
};
