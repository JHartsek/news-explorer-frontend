import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import './SavedNewsHeader.css';

function SavedNewsHeader({ savedCards, sortedKeywords }) {
  const { name } = React.useContext(CurrentUserContext);

  const displayKeywords = () => {
    if (sortedKeywords.length <= 3) {
      switch (sortedKeywords.length) {
        case 1:
          return `${sortedKeywords[0]}`;
        case 2:
          return `${sortedKeywords[0]} and ${sortedKeywords[1]}`;
        case 3:
          return `${sortedKeywords[0]}, ${sortedKeywords[1]}, and ${sortedKeywords[2]}`;
        default:
          return '';
      }
    } else {
      return `${sortedKeywords[0]}, ${sortedKeywords[1]}, and ${
        sortedKeywords.length - 2
      } more`;
    }
  };

  return (
    <section className='saved-news-header'>
      <h2 className='saved-news-header__tag'>Saved articles</h2>
      <h1 className='saved-news-header__title'>
        {`${name}, you have ${savedCards.length} saved articles`}
      </h1>
      <h2 className='saved-news-header__details'>
        By keywords:{' '}
        <span className='saved-news-header__details-keywords'>
          {displayKeywords()}
        </span>
      </h2>
    </section>
  );
}

export default SavedNewsHeader;
