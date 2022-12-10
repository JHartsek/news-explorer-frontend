export const getSavedTitles = (titlesArray, cardsArray) => {
  cardsArray.forEach((card) => {
    const { title } = card;
    if (!titlesArray.includes(title)) {
      titlesArray.push(title);
    }
  });
};
