import './NewsCardList.css';

import NewsCard from '../NewsCard/NewsCard';

function NewsCardList() {
    return (
        <section className='news-card-list'> 
            <h1 className='news-card-list__title'>Search results</h1>
            <div className='news-card-list__results'>
                <NewsCard /> 
                <NewsCard />
                <NewsCard />
            </div>
            <button className='news-card-list__expand'>Show more</button>
        </section>
    )
}

export default NewsCardList; 