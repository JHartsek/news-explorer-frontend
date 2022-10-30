import './NewsCard.css';

function NewsCard({ keyword, date, imageUrl, title, description, source }) {
  return (
    <article className='news-card'>
      <div className='news-card__header'>
        <img src={imageUrl} className='news-card__header__image' alt='corgi' />
        <p className='news-card__header__tag'>{keyword}</p>
        <button
          type='button'
          className='news-card__header__button'
          aria-label='bookmark article'
        ></button>
      </div>
      <div className='news-card__details details'>
        <h3 className='deails__date'>{date}</h3>
        <h1 className='details__title'>{title}</h1>
        <p className='details__content'>{description}</p>
        <h2 className='details__source'>{source}</h2>
      </div>
    </article>
  );
}

export default NewsCard;
