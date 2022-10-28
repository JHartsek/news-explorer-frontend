import './Header.css';

import Navigation from '../Navigation/Navigation';

function Header({ currentPage, isLoggedIn, device, onNavButtonClick }) {
  return (
    <header className='header'>
      <h1
        className={`header__title ${
          currentPage === 'saved-news' ? 'header__title_page_saved_news' : ''
        }`}
      >
        NewsExplorer
      </h1>
      <Navigation
        currentPage={currentPage}
        isLoggedIn={isLoggedIn}
        device={device}
        onNavButtonClick={onNavButtonClick}
      />
    </header>
  );
}

export default Header;
