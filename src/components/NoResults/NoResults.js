import './NoResults.css';

import noResultsIcon from '../../images/no-results.svg';

function NoResults() {
    return (
        <section className='no-results'>
            <img className='no-results__image' src={noResultsIcon} alt='sad magnifier icon'/>
            <h1 className='no-results__title'>Nothing found</h1>
            <p className='no-results__details'>Sorry, but nothing matched your search terms.</p>
        </section>
    )
}

export default NoResults; 