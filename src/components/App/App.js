import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Header from '../Header/Header';
import Main from '../Main/Main';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import About from '../About/About';
import Preloader from '../Preloader/Preloader';
import NoResults from '../NoResults/NoResults';
import NewsCardList from '../NewsCardList/NewCardList';
import SavedNew from '../SavedNews/SavedNews';
import Popup from '../Popup/Popup';
import RegistrationSuccess from '../RegistrationSuccess/RegistrationSuccess';
import Footer from '../Footer/Footer';
import SignUpForm from '../SignUpForm/SignUpForm';
import SignInForm from '../SignInForm/SignInForm';

import { searchForNews } from '../../utils/NewsApi';

function App() {
  const [currentPage, setCurrentPage] = React.useState('home');
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [device, setDevice] = React.useState('computer');
  const [isSignUpFormOpen, setIsSignUpFormOpen] = React.useState(false);
  const [isSignInFormOpen, setIsSignInFormOpen] = React.useState(false);
  const [searchStatus, setSearchStatus] = React.useState('default');
  const [showMoreStatus, setShowMoreStatus] = React.useState('visible');
  const [newsCards, setNewsCards] = React.useState([]);
  const [displayedCardCount, setDisplayedCardCount] = React.useState(3);
  const [displayedCards, setDisplayedCards] = React.useState([]);

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
    }
  }
  function closeAllPopups() {
    setIsSignUpFormOpen(false);
    setIsSignInFormOpen(false);
  }

  function handleSignInClick() {
    setIsSignUpFormOpen(false);
    setIsSignInFormOpen(true);
  }

  function handleSignOutClick() {
    console.log('you signed out');
  }

  function handleSignUpClick() {
    setIsSignInFormOpen(false);
    setIsSignUpFormOpen(true);
  }

  function handleSearch(keyword) {
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
      });
  }

  React.useEffect(() => {
    getScreenWidth();

    const closeByEsc = (e) => {
      if (e.key === 'Escape') {
        closeAllPopups();
      }
    };

    document.addEventListener('keydown', closeByEsc);

    return document.addEventListener('keypress', closeByEsc);
  }, []);

  return (
    <div className='App'>
      <Switch>
        <Route path='/saved-news'>
          <Header
            currentPage={currentPage}
            isLoggedIn={isLoggedIn}
            device={device}
            onSignInClick={handleSignInClick}
            onSignOutClock={handleSignOutClick}
          />
          <SavedNewsHeader />
          <SavedNew />
          <Footer />
        </Route>

        <Route path='/'>
          <Header
            currentPage={currentPage}
            isLoggedIn={isLoggedIn}
            device={device}
            onSignInClick={handleSignInClick}
            onSignOutClock={handleSignOutClick}
          />
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
            />
          )}
          <About />
          <Footer />
          <SignUpForm
            isOpen={isSignUpFormOpen}
            onClose={closeAllPopups}
            onLinkClick={handleSignInClick}
          />
          <SignInForm
            isOpen={isSignInFormOpen}
            onClose={closeAllPopups}
            onLinkClick={handleSignUpClick}
          />
          <Popup>
            <RegistrationSuccess />
          </Popup>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
