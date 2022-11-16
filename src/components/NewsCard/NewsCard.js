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
  onDeleteClick,
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

  function handleBookmarkClick() {
    onBookmarkClick(newsCard);
    if (isLoggedIn === true) {
      setIsBookmarked(true);
    }
  }

  function handleDeleteClick() {
    onDeleteClick(newsCard);
    if (isLoggedIn === true) {
      setIsBookmarked(false);
    }
  }

  return (
    <article className='news-card'>
      <div className='news-card__header'>
        <img src={imageUrl} className='news-card__image' alt={title} />
        {isLoggedIn === true && <p className='news-card__tag'>{keyword}</p>}
        {isSignInButtonVisible === true && (
          <button
            type='button'
            className='news-card__button news-card__button_type_sign-in'
            aria-label='sign-in'
            onClick={onSignInClick}
          >
            Sign in to save articles
          </button>
        )}
        {isRemoveButtonVisible === true && (
          <button
            type='button'
            className='news-card__button news-card__button_type_remove'
            aria-label='remove-article'
          >
            Remove from saved
          </button>
        )}
        {currentPage === '/' ? (
          <button
            type='button'
            className={`news-card__button news-card__button_type_bookmark ${
              isBookmarked === true
                ? 'news-card__button_type_bookmark_marked'
                : ''
            }`}
            aria-label='bookmark article'
            onClick={handleBookmarkClick}
            onMouseEnter={onBookmarkMouseEnter}
            onMouseLeave={onBookmarkMouseLeave}
          ></button>
        ) : (
          <button
            type='button'
            className='news-card__button news-card__button_type_delete'
            aria-label='delete article'
            onMouseEnter={onDeleteMouseEnter}
            onMouseLeave={onDeleteMouseLeave}
            onClick={handleDeleteClick}
          ></button>
        )}
      </div>
      <div className='news-card__details'>
        <h5 className='news-card__date'>{date}</h5>
        <h3 className='news-card__title'>{title}</h3>
        <p className='news-card__content'>{description}</p>
        <h4 className='news-card__source'>{source}</h4>
      </div>
    </article>
  );
}

export default NewsCard;
