import './SavedNews.css';

import NewsCard from '../NewsCard/NewsCard';

function SavedNews({ keyword, onBookmarkClick }) {
  return (
    <section className='saved-news'>
      <div className='saved-news__cards'>
        <NewsCard keyword={keyword} onBookmarkClick={onBookmarkClick} />
      </div>
    </section>
  );
}

export default SavedNews;
