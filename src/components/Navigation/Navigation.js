import './Navigation.css';
import logoutIconWhite from '../../images/logout-white.svg';
import logoutIconBlack from '../../images/logout-black.svg';

function Navigation({
  currentPage,
  isLoggedIn,
  onHomeClick,
  onSavedArticlesClick,
  onSignInClick,
  onSignOutClick,
}) {
  return (
    <nav className='navigation'>
      <button
        href='/'
        onClick={onHomeClick}
        className={`navigation__link ${
          currentPage === '/saved-news'
            ? 'navigation__link_page_saved-news'
            : 'navigation__link_selected'
        }`}
      >
        Home
      </button>
      {isLoggedIn === true && (
        <button
          href='/saved-news'
          onClick={onSavedArticlesClick}
          className={`navigation__link ${
            currentPage === '/saved-news'
              ? 'navigation__link_page_saved-news navigation__link_selected_page_saved-news'
              : ''
          }`}
        >
          Saved articles
        </button>
      )}
      {isLoggedIn === true && (
        <button
          onClick={onSignOutClick}
          className={`navigation__button button ${
            currentPage === '/saved-news'
              ? 'navigation__button_page_saved-news'
              : ''
          }`}
        >
          Elise
          <img
            className='button__icon'
            src={
              currentPage === '/saved-news' ? logoutIconBlack : logoutIconWhite
            }
            alt='logout icon'
          />
        </button>
      )}
      {isLoggedIn === false && (
        <button onClick={onSignInClick} className='navigation__button'>
          Sign In
        </button>
      )}
    </nav>
  );
}

export default Navigation;
