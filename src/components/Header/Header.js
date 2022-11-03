import './Header.css';

import Navigation from '../Navigation/Navigation';

function Header({
  currentPage,
  isLoggedIn,
  device,
  isMenuOpen,
  onCloseMenu,
  onMenuClick,
  onHomeClick,
  onSavedArticlesClick,
  onSignInClick,
  onSignOutClick,
}) {
  return (
    <header
      className={`header ${isMenuOpen === true ? 'header_menu-open' : ''} ${
        currentPage === 'saved-news' ? 'header_page_saved-news' : ''
      }`}
    >
      <h3
        className={`header__title ${
          (currentPage === 'saved-news') & (isMenuOpen === false)
            ? 'header__title_page_saved-news'
            : ''
        }`}
      >
        NewsExplorer
      </h3>
      {device === 'computer' && (
        <Navigation
          currentPage={currentPage}
          isLoggedIn={isLoggedIn}
          device={device}
          onHomeClick={onHomeClick}
          onSavedArticlesClick={onSavedArticlesClick}
          onSignInClick={onSignInClick}
          onSignOutClick={onSignOutClick}
        />
      )}
      {(device === 'phone') & (isMenuOpen === false) ? (
        <button
          onClick={onMenuClick}
          className={`header__menu ${
            currentPage === 'home'
              ? 'header__menu_color_white'
              : 'header__menu_color_black'
          }`}
        ></button>
      ) : (
        ''
      )}
      {(device === 'phone') & (isMenuOpen === true) ? (
        <button
          className='header__menu header__menu-close'
          onClick={onCloseMenu}
        ></button>
      ) : (
        ''
      )}
    </header>
  );
}

export default Header;
