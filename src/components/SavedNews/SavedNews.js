import './SavedNews.css';

import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import { SavedArticlesContext } from '../../contexts/SavedArticlesContext';

function SavedNews({ currentPage, sortedKeywords, onDeleteClick }) {
  const savedCards = React.useContext(SavedArticlesContext);
  let sortedCards = [];
  function sortCards() {
    sortedKeywords.forEach((word) => {
      savedCards.forEach((card) => {
        if (card.keyword === word) {
          sortedCards.push(card);
        }
      });
    });
  }
  sortCards();

  return (
    <section className='saved-news'>
      <div className='saved-news__cards'>
        {sortedCards.map((card) => {
          const { keyword, date, image, title, text, source } = card;
          return (
            <NewsCard
              newsCard={card}
              key={card._id}
              keyword={keyword}
              date={date}
              imageUrl={image}
              title={title}
              description={text}
              source={source}
              currentPage={currentPage}
              isLoggedIn={true}
              onDeleteClick={onDeleteClick}
            />
          );
        })}
      </div>
    </section>
  );
}

export default SavedNews;
