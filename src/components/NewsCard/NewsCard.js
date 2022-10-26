import './NewsCard.css';

import cardImg from '../../images/card.jpg';

function NewsCard() {
    return (
        <article className="news-card">
        <div className="news-card__header">
          <img
            src={cardImg}
            className='news-card__header__image'
            alt='corgi'
          />
          <p  className='news-card__header__tag'>nature</p>
          <button
            type='button'
            className='news-card__header__button'
            aria-label='bookmark article'
          ></button>
        </div>
        <div className='news-card__details details'>
          <h3 className='deails__date'>November 4, 2020</h3>
          <h1 className='details__title'>Everyone Needs a Special 'Sit Spot' in Nature</h1>
          <p className='details__content'>Ever since I read Richard Louv's influential book, "Last Child in the Woods," the idea of having a special "sit spot" has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find...</p>
          <h2 className='details__source'>treehugger</h2>
        </div>
      </article>
    )
}

export default NewsCard; 