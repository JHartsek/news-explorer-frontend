const baseUrl = 'https://newsapi.org/v2/everything';
const pageSize = 100;
const apiKey = '1c5bbf6914524ce7941f074a37886f53';

export const checkResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

export const searchForNews = (keyword) => {
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1;
  const currentDate = today.getDate();
  const to = `${currentYear}-${currentMonth}-${currentDate}`;

  const oneWeekAgo = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );
  const previousYear = oneWeekAgo.getFullYear();
  const previousMonth = oneWeekAgo.getMonth();
  const previousDate = oneWeekAgo.getDate();
  const from = `${previousYear}-${previousMonth}-${previousDate}`;

  return fetch(
    `${baseUrl}?q=${keyword}&apiKey=${apiKey}&from=${from}&to=${to}&pageSize=${pageSize}`
  ).then(checkResponse);
};

