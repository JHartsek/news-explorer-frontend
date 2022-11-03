import './NewsCard.css';
import React from 'react';

function NewsCard({
  newsCard,
  keyword,
  date,
  imageUrl,
  title,
  description,
  source,
  isLoggedIn,
  currentPage,
  onSignInClick,
  onBookmarkClick,
}) {
  const [isSignInButtonVisible, setIsSignInButtonVisible] =
    React.useState(false);
  const [isBookmarked, setIsBookmarked] = React.useState(false);

  function onMouseEnter() {
    if (isLoggedIn === false) setIsSignInButtonVisible(true);
  }

  function onMouseLeave() {
    if (isLoggedIn === false) setIsSignInButtonVisible(false);
  }

  function onClick() {
    onBookmarkClick(newsCard);
    if (isLoggedIn === true) {
      setIsBookmarked(true);
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
        {currentPage === 'home' ? (
          <button
            type='button'
            className={`news-card__header__button news-card__header__button_bookmark ${
              isBookmarked === true
                ? 'news-card__header__button_bookmark_status_marked'
                : ''
            }`}
            aria-label='bookmark article'
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          ></button>
        ) : (
          <button
            type='button'
            className='news-card__header__button news-card__header__button-delete'
            aria-label='delete article'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          ></button>
        )}
      </div>
      <div className='news-card__details details'>
        <h5 className='deails__date'>{date}</h5>
        <h3 className='details__title'>{title}</h3>
        <p className='details__content'>{description}</p>
        <h4 className='details__source'>{source}</h4>
      </div>
    </article>
  );
}

export default NewsCard;
