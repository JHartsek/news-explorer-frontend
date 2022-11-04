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
  const [isRemoveButtonVisible, setIsRemoveButtonVisible] =
    React.useState(false);

  function onBookmarkMouseEnter() {
    setIsSignInButtonVisible(true);
  }

  function onBookmarkMouseLeave() {
    setIsSignInButtonVisible(false);
  }

  function onDeleteMouseEnter() {
    setIsRemoveButtonVisible(true);
  }

  function onDeleteMouseLeave() {
    setIsRemoveButtonVisible(false);
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
        {isRemoveButtonVisible === true && (
          <button
            type='button'
            className='news-card__header__button news-card__header__button-remove'
            aria-label='remove-article'
          >
            Remove from saved
          </button>
        )}
        {currentPage === '/' ? (
          <button
            type='button'
            className={`news-card__header__button news-card__header__button_bookmark ${
              isBookmarked === true
                ? 'news-card__header__button_bookmark_marked'
                : ''
            }`}
            aria-label='bookmark article'
            onClick={onClick}
            onMouseEnter={onBookmarkMouseEnter}
            onMouseLeave={onBookmarkMouseLeave}
          ></button>
        ) : (
          <button
            type='button'
            className='news-card__header__button news-card__header__button-delete'
            aria-label='delete article'
            onMouseEnter={onDeleteMouseEnter}
            onMouseLeave={onDeleteMouseLeave}
          ></button>
        )}
      </div>
      <div className='news-card__details details'>
        <h5 className='details__date'>{date}</h5>
        <h3 className='details__title'>{title}</h3>
        <p className='details__content'>{description}</p>
        <h4 className='details__source'>{source}</h4>
      </div>
    </article>
  );
}

export default NewsCard;
