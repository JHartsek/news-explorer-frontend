import './SavedNewsHeader.css';

function SavedNewsHeader() {
  return (
    <section className='saved-news-header'>
      <h3 className='saved-news-header__tag'>Saved articles</h3>
      <h2 className='saved-news-header__title'>
        Elise, you have 5 saved articles
      </h2>
      <h3 className='saved-news-header__details'>
        By keywords:{' '}
        <span className='saved-news-header__details-keywords'>
          Nature, Yellowstone, and 2 others
        </span>
      </h3>
    </section>
  );
}

export default SavedNewsHeader;
