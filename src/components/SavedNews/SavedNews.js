import './SavedNews.css';

import NewsCard from '../NewsCard/NewsCard';

function SavedNews({ currentPage, savedCards }) {
  return (
    <section className='saved-news'>
      <div className='saved-news__cards'>
        {savedCards.map((card) => {
          const { keyword, date, image, title, text, source } = card;
          return (
            <NewsCard
              keyword={keyword}
              date={date}
              imageUrl={image}
              title={title}
              description={text}
              source={source}
              currentPage={currentPage}
              isLoggedIn={true}
            />
          );
        })}
      </div>
    </section>
  );
}

export default SavedNews;
