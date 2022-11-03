import './Navigation.css';
import logoutIconWhite from '../../images/logout-white.svg';
import logoutIconBlack from '../../images/logout-black.svg';

function Navigation({
  currentPage,
  isLoggedIn,
  onSignInClick,
  onSignOutClick,
}) {
  return (
    <nav className='nav'>
      <a
        href='/'
        className={`nav__link ${
          currentPage === 'saved-news' ? 'nav__link_page_saved_news' : ''
        }`}
      >
        Home
      </a>
      {isLoggedIn === true && (
        <a
          href='/saved-news'
          className={`nav__link ${
            currentPage === 'saved-news' ? 'nav__link_page_saved_news' : ''
          }`}
        >
          Saved articles
        </a>
      )}
      {isLoggedIn === true && (
        <button
          onClick={onSignOutClick}
          className={`nav__button ${
            currentPage === 'saved-news' ? 'nav__button_page_saved_news' : ''
          }`}
        >
          Elise
          <img
            className='nav__button__icon'
            src={
              currentPage === 'saved-news' ? logoutIconBlack : logoutIconWhite
            }
            alt='logout icon'
          />
        </button>
      )}
      {isLoggedIn === false && (
        <button onClick={onSignInClick} className='nav__button'>
          Sign In
        </button>
      )}
    </nav>
  );
}

export default Navigation;
