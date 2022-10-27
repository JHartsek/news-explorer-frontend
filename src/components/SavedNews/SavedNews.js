import './SavedNews.css';

import NewsCard from '../NewsCard/NewsCard';

function SavedNews() {
    return (
        <section className='saved-news'> 
            <div className='saved-news__cards'>
                <NewsCard /> 
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
            </div>
        </section>
    )
}

export default SavedNews; 