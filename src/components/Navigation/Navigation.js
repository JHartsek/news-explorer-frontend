import './Navigation.css';
import logoutIconWhite from '../../images/logout-white.svg';
import logoutIconBlack from '../../images/logout-black.svg';

function Navigation({ currentPage, isLoggedIn, device, onNavButtonClick }) {
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
      <a
        href='/'
        className={`nav__link ${
          currentPage === 'saved-news' ? 'nav__link_page_saved_news' : ''
        }`}
      >
        Saved articles
      </a>
      <button
        onClick={onNavButtonClick}
        className={`nav__button ${
          currentPage === 'saved-news' ? 'nav__button_page_saved_news' : ''
        }`}
      >
        Elise
        <img
          className='nav__button__icon'
          src={currentPage === 'saved-news' ? logoutIconBlack : logoutIconWhite}
          alt='logout icon'
        />
      </button>
    </nav>
  );
}

export default Navigation;
