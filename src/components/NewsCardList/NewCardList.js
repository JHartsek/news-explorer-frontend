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
}) {
  return (
    <section className='news-card-list'>
      <h1 className='news-card-list__title'>Search results</h1>
      <div className='news-card-list__results'>
        {displayedCards.map((card) => {
          return (
            <NewsCard
              newsCard={card}
              key={card.title}
              keyword={keyword}
              date={card.date}
              imageUrl={card.urlToImage}
              title={card.title}
              description={card.description}
              source={card.source.name}
              onSignInClick={onSignInClick}
              isLoggedIn={isLoggedIn}
              onBookmarkClick={onBookmarkClick}
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
