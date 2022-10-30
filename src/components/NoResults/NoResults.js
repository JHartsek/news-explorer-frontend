import './NoResults.css';

import noResultsIcon from '../../images/no-results.svg';

function NoResults({ searchStatus }) {
  const noMatches = 'Sorry, but nothing matched your search terms.';
  const error =
    'Sorry, something went wrong during the request. There may be a connection issue or the server may be down. Please try again later.';

  return (
    <section className='no-results'>
      <img
        className='no-results__image'
        src={noResultsIcon}
        alt='sad magnifier icon'
      />
      <h1 className='no-results__title'>Nothing found</h1>
      <p className='no-results__details'>
        {searchStatus === 'no-results' ? noMatches : error}
      </p>
    </section>
  );
}

export default NoResults;
