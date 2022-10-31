import './NewsCard.css';
import React from 'react';

function NewsCard({
  keyword,
  date,
  imageUrl,
  title,
  description,
  source,
  isLoggedIn,
  onSignInClick,
}) {
  const [isSignInButtonVisible, setIsSignInButtonVisible] =
    React.useState(false);
  const [isBookmarked, setIsBookmarked] = React.useState(false);

  function handleBookmarkClick() {
    if (isLoggedIn === true) {
      setIsBookmarked(true);
    } else {
      setIsSignInButtonVisible(true);
    }
  }

  return (
    <article className='news-card'>
      <div className='news-card__header'>
        <img src={imageUrl} className='news-card__header__image' alt={title} />
        {isLoggedIn === true && (
          <p className='news-card__header__tag'>{keyword}</p>
        )}
        {isSignInButtonVisible === true && (
          <button
            type='button'
            className='news-card__header__button news-card__header__button-sign-in'
            aria-label='sign-in'
            onClick={onSignInClick}
          >
            Sign in to save articles
          </button>
        )}
        <button
          type='button'
          className={`news-card__header__button news-card__header__button-bookmark ${
            isBookmarked === true
              ? 'news-card__header__button-bookmark_marked'
              : ''
          }`}
          aria-label='bookmark article'
          onClick={handleBookmarkClick}
        ></button>
      </div>
      <div className='news-card__details details'>
        <h3 className='deails__date'>{date}</h3>
        <h1 className='details__title'>{title}</h1>
        <p className='details__content'>{description}</p>
        <h2 className='details__source'>{source}</h2>
      </div>
    </article>
  );
}

export default NewsCard;
