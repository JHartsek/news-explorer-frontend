import './NewsCardList.css';

import NewsCard from '../NewsCard/NewsCard';
import React from 'react';

function NewsCardList({
  displayedCards,
  keyword,
  onBookmarkClick,
  onShowMoreClick,
  showMoreStatus,
  onSignInClick,
  isLoggedIn,
  currentPage,
}) {
  function formatDate(card) {
    const fullDate = new Date(card.publishedAt);
    const year = fullDate.getFullYear();
    const month = fullDate.toLocaleString('default', { month: 'long' });
    const day = fullDate.getDate();
    const date = `${month} ${day}, ${year}`;
    return date;
  }

  return (
    <section className='news-card-list'>
      <h2 className='news-card-list__title'>Search results</h2>
      <div className='news-card-list__results'>
        {displayedCards.map((card) => {
          return (
            <NewsCard
              newsCard={card}
              key={card.title}
              keyword={keyword}
              date={formatDate(card)}
              imageUrl={card.urlToImage}
              title={card.title}
              description={card.description}
              source={card.source.name}
              onSignInClick={onSignInClick}
              isLoggedIn={isLoggedIn}
              onBookmarkClick={onBookmarkClick}
              currentPage={currentPage}
            />
          );
        })}
      </div>
      {showMoreStatus === 'visible' && (
        <button className='news-card-list__expand' onClick={onShowMoreClick}>
          Show more
        </button>
      )}
    </section>
  );
}

export default NewsCardList;
