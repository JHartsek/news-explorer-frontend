import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import './SavedNewsHeader.css';

function SavedNewsHeader() {
  const { name } = React.useContext(CurrentUserContext);

  return (
    <section className='saved-news-header'>
      <h2 className='saved-news-header__tag'>Saved articles</h2>
      <h1 className='saved-news-header__title'>
        {`${name}, you have 5 saved articles`}
      </h1>
      <h2 className='saved-news-header__details'>
        By keywords:{' '}
        <span className='saved-news-header__details-keywords'>
          Nature, Yellowstone, and 2 others
        </span>
      </h2>
    </section>
  );
}

export default SavedNewsHeader;
