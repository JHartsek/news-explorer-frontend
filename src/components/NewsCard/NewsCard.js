import './NewsCard.css';

import React from 'react';
import { getSavedTitles } from '../../helpers/getSavedTitles';
import { SavedArticlesContext } from '../../contexts/SavedArticlesContext';

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
  const savedCards = React.useContext(SavedArticlesContext);
  let savedTitles = [];
  getSavedTitles(savedTitles, savedCards);
  const [isSaved, setIsSaved] = React.useState(savedTitles.includes(title));

  const [isSignInButtonVisible, setIsSignInButtonVisible] =
    React.useState(false);
  const [isRemoveButtonVisible, setIsRemoveButtonVisible] =
    React.useState(false);

  function onBookmarkMouseEnter() {
    if (isLoggedIn === false) {
      setIsSignInButtonVisible(true);
    }
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
    if (isLoggedIn) {
      setIsSaved(!isSaved);
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
            onMouseLeave={onBookmarkMouseLeave}
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
            className={`news-card__button ${
              isSaved & isLoggedIn
                ? 'news-card__button_type_bookmark_marked'
                : 'news-card__button_type_bookmark'
            }`}
            aria-label='bookmark article'
            onClick={handleBookmarkClick}
            onMouseEnter={onBookmarkMouseEnter}
          ></button>
        ) : (
          <button
            type='button'
            className='news-card__button news-card__button_type_delete'
            aria-label='delete article'
            onMouseEnter={onDeleteMouseEnter}
            onMouseLeave={onDeleteMouseLeave}
            onClick={() => onDeleteClick(newsCard)}
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
