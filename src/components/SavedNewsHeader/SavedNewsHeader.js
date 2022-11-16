import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import './SavedNewsHeader.css';

function SavedNewsHeader({ savedCards }) {
  const { name } = React.useContext(CurrentUserContext);

  return (
    <section className='saved-news-header'>
      <h2 className='saved-news-header__tag'>Saved articles</h2>
      <h1 className='saved-news-header__title'>
        {`${name}, you have ${savedCards.length} saved articles`}
      </h1>
      <h2 className='saved-news-header__details'>
        By keywords:{' '}
        <span className='saved-news-header__details-keywords'></span>
      </h2>
    </section>
  );
}

export default SavedNewsHeader;
