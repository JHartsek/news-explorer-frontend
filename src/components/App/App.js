import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import './App.css';

import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Main from '../Main/Main';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import About from '../About/About';
import Preloader from '../Preloader/Preloader';
import NoResults from '../NoResults/NoResults';
import NewsCardList from '../NewsCardList/NewCardList';
import SavedNews from '../SavedNews/SavedNews';
import Popup from '../Popup/Popup';
import RegistrationSuccess from '../RegistrationSuccess/RegistrationSuccess';
import Footer from '../Footer/Footer';
import SignUpForm from '../SignUpForm/SignUpForm';
import SignInForm from '../SignInForm/SignInForm';

import { searchForNews } from '../../utils/NewsApi';

function App() {
  const [currentPage, setCurrentPage] = React.useState('home');
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);
  const [device, setDevice] = React.useState('computer');
  const [isSignUpFormOpen, setIsSignUpFormOpen] = React.useState(false);
  const [isSignInFormOpen, setIsSignInFormOpen] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isRegistrationSuccessOpen, setIsRegistrationSuccessOpen] =
    React.useState(false);
  const [searchStatus, setSearchStatus] = React.useState('default');
  const [keyword, setKeyword] = React.useState('');
  const [showMoreStatus, setShowMoreStatus] = React.useState('visible');
  const [newsCards, setNewsCards] = React.useState([]);
  const [displayedCardCount, setDisplayedCardCount] = React.useState(3);
  const [displayedCards, setDisplayedCards] = React.useState(
    JSON.parse(localStorage.getItem('displayedCards'))
  );
  const [savedCards, setSavedCards] = React.useState([]);

  const history = useHistory();

  function showMoreCards() {
    setDisplayedCards(newsCards.slice(0, displayedCardCount + 3));
    setDisplayedCardCount(displayedCardCount + 3);
    if (displayedCardCount === newsCards.length) {
      setShowMoreStatus('hidden');
    }
  }

  function getScreenWidth() {
    if (window.innerWidth <= 525) {
      setDevice('phone');
    } else {
      setDevice('computer');
    }
  }

  function closeAllPopups() {
    setIsSignUpFormOpen(false);
    setIsSignInFormOpen(false);
    setIsRegistrationSuccessOpen(false);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  function handleHomeClick() {
    setCurrentPage('home');
    history.push('/');
  }

  function handleSavedArticlesClick() {
    setCurrentPage('saved-news');
    history.push('/saved-news');
  }

  function handleSignInClick() {
    setIsSignUpFormOpen(false);
    setIsRegistrationSuccessOpen(false);
    setIsSignInFormOpen(true);
  }

  function handleSignOutClick() {
    setIsLoggedIn(false);
    history.push('/');
  }

  function handleSignUpClick() {
    setIsSignInFormOpen(false);
    setIsSignUpFormOpen(true);
  }

  function handleSignUpSubmit() {
    setIsRegistrationSuccessOpen(true);
    setIsSignUpFormOpen(false);
  }

  React.useEffect(() => {
    localStorage.setItem('displayedCards', JSON.stringify(displayedCards));
  }, [displayedCards, displayedCardCount]);

  function handleSearch(keyword) {
    setSearchStatus('loading');
    setKeyword(keyword);
    searchForNews(keyword)
      .then(({ articles }) => {
        setNewsCards(articles);
        if (articles.length === 0) {
          setSearchStatus('no-results');
        }
        if (articles.length <= 3) {
          setShowMoreStatus('hidden');
        }
        setSearchStatus('results');
        setDisplayedCards(articles.slice(0, 3));
        setDisplayedCardCount(3);
      })
      .catch((err) => {
        setSearchStatus('error');
        console.log(err);
      })
      .finally(() => {
        setSearchStatus('results');
      });
  }

  function handleMenuClick() {
    setIsMenuOpen(true);
  }

  function handleBookmarkClick(card) {
    setSavedCards([...savedCards, card]);
  }

  React.useEffect(() => {
    const closeByEsc = (e) => {
      if (e.key === 'Escape') {
        closeAllPopups();
      }
    };

    document.addEventListener('keydown', closeByEsc);

    return document.addEventListener('keypress', closeByEsc);
  }, []);

  React.useEffect(() => {
    getScreenWidth();
    window.addEventListener('resize', getScreenWidth);

    return window.addEventListener('resize', getScreenWidth);
  }, []);

  return (
    <div className='App'>
      <Switch>
        <Route path='/saved-news'>
          <Header
            currentPage={currentPage}
            isLoggedIn={isLoggedIn}
            device={device}
            isMenuOpen={isMenuOpen}
            onMenuClick={handleMenuClick}
            onCloseMenu={closeMenu}
            onHomeClick={handleHomeClick}
            onSavedArticlesClick={handleSavedArticlesClick}
            onSignInClick={handleSignInClick}
            onSignOutClick={handleSignOutClick}
          />
          {isMenuOpen === true && <Menu onSignInClick={handleSignInClick} />}
          <SavedNewsHeader />
          <SavedNews
            keyword={keyword}
            onBookmarkClick={handleBookmarkClick}
            currentPage={currentPage}
          />
          <Footer />
        </Route>

        <Route path='/'>
          <Header
            currentPage={currentPage}
            isLoggedIn={isLoggedIn}
            device={device}
            isMenuOpen={isMenuOpen}
            onMenuClick={handleMenuClick}
            onCloseMenu={closeMenu}
            onHomeClick={handleHomeClick}
            onSavedArticlesClick={handleSavedArticlesClick}
            onSignInClick={handleSignInClick}
            onSignOutClick={handleSignOutClick}
          />
          {isMenuOpen === true && <Menu onSignInClick={handleSignInClick} />}
          <Main onSearchSubmit={handleSearch} />
          {searchStatus === 'loading' && <Preloader />}
          {(searchStatus === 'no-results' || searchStatus === 'error') && (
            <NoResults searchStatus={searchStatus} />
          )}
          {searchStatus === 'results' && (
            <NewsCardList
              displayedCards={displayedCards}
              onShowMoreClick={showMoreCards}
              showMoreStatus={showMoreStatus}
              isLoggedIn={isLoggedIn}
              currentPage={currentPage}
              onSignInClick={handleSignInClick}
              onBookmarkClick={handleBookmarkClick}
              keyword={keyword}
            />
          )}
          <About />
          <Footer />
          <SignUpForm
            isOpen={isSignUpFormOpen}
            onClose={closeAllPopups}
            onLinkClick={handleSignInClick}
            onSignUp={handleSignUpSubmit}
          />
          <SignInForm
            isOpen={isSignInFormOpen}
            onClose={closeAllPopups}
            onLinkClick={handleSignUpClick}
          />
          <Popup isOpen={isRegistrationSuccessOpen} onClose={closeAllPopups}>
            <RegistrationSuccess onLinkClick={handleSignInClick} />
          </Popup>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
