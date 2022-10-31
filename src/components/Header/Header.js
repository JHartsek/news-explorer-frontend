import './Header.css';

import Navigation from '../Navigation/Navigation';

function Header({
  currentPage,
  isLoggedIn,
  device,
  onSignInClick,
  onSignOutClick,
}) {
  return (
    <header className='header'>
      <h1
        className={`header__title ${
          currentPage === 'saved-news' ? 'header__title_page_saved-news' : ''
        }`}
      >
        NewsExplorer
      </h1>
      <Navigation
        currentPage={currentPage}
        isLoggedIn={isLoggedIn}
        device={device}
        onSignInClick={onSignInClick}
        onSignOutClock={onSignOutClick}
      />
    </header>
  );
}

export default Header;
