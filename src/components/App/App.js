import React from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
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
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import RegistrationSuccess from '../RegistrationSuccess/RegistrationSuccess';
import Footer from '../Footer/Footer';
import SignUpForm from '../SignUpForm/SignUpForm';
import SignInForm from '../SignInForm/SignInForm';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { searchForNews } from '../../utils/NewsApi';
import * as mainApi from '../../utils/MainApi';
import { getSavedTitles } from '../../helpers/getSavedTitles';

function App() {
  const [currentPage, setCurrentPage] = React.useState(
    localStorage.getItem('currentPage')
  );
  const [isLoggedIn, setIsLoggedIn] = React.useState(
    localStorage.getItem('token') ? true : false
  );
  const [currentUser, setCurrentUser] = React.useState({});
  const [device, setDevice] = React.useState('computer');
  const [isSignUpFormOpen, setIsSignUpFormOpen] = React.useState(false);
  const [isSignInFormOpen, setIsSignInFormOpen] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [formSubmissionError, setFormSubmissionError] = React.useState('');
  const [isRegistrationSuccessOpen, setIsRegistrationSuccessOpen] =
    React.useState(false);
  const [searchStatus, setSearchStatus] = React.useState('results');
  const [keyword, setKeyword] = React.useState(localStorage.getItem('keyword'));
  const [sortedKeywords, setSortedKeywords] = React.useState(
    localStorage.getItem('sortedKeywords')
      ? JSON.parse(localStorage.getItem('sortedKeywords'))
      : []
  );
  const [showMoreStatus, setShowMoreStatus] = React.useState('visible');
  const [newsCards, setNewsCards] = React.useState(
    JSON.parse(localStorage.getItem('newsCards'))
  );
  const [displayedCardCount, setDisplayedCardCount] = React.useState(3);
  const [displayedCards, setDisplayedCards] = React.useState(
    JSON.parse(localStorage.getItem('displayedCards'))
  );
  const [savedCards, setSavedCards] = React.useState([]);

  const history = useHistory();
  const location = useLocation();

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
    setCurrentPage('/');
    history.push('/');
  }

  function handleSavedArticlesClick() {
    setCurrentPage('/saved-news');
    history.push('/saved-news');
  }

  function handleSignInClick() {
    setIsSignUpFormOpen(false);
    setIsRegistrationSuccessOpen(false);
    setIsSignInFormOpen(true);
  }

  function handleSignOutClick() {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    history.push('/');
  }

  function handleSignUpClick() {
    setIsSignInFormOpen(false);
    setIsSignUpFormOpen(true);
  }

  function handleSignUpSubmit(info) {
    const { email, password, username: name } = info;
    mainApi
      .signup(email, password, name)
      .then(() => {
        setIsRegistrationSuccessOpen(true);
        setIsSignUpFormOpen(false);
      })
      .catch((err) => {
        setFormSubmissionError(err);
      });
  }

  function handleSignInSubmit(info) {
    const { email, password } = info;
    let token;
    mainApi
      .signin(email, password)
      .then((res) => {
        token = res.token;
        localStorage.setItem('token', token);
        setIsSignInFormOpen(false);
        setIsLoggedIn(true);
      })
      .then(() => {
        mainApi.checkToken(token).then((user) => {
          setCurrentUser(user);
        });
        mainApi
          .getSavedArticles(localStorage.getItem('token'))
          .then((articles) => {
            setSavedCards(articles);
          });
      })
      .catch((err) => {
        setFormSubmissionError(err);
      });
  }

  React.useEffect(() => {
    localStorage.setItem('keyword', keyword);
    localStorage.setItem('newsCards', JSON.stringify(newsCards));
    localStorage.setItem('displayedCards', JSON.stringify(displayedCards));
  }, [displayedCards, displayedCardCount, keyword, newsCards]);

  React.useEffect(() => {
    let allKeywords = [];
    const geAllKeywords = () => {
      savedCards.forEach((card) => {
        const { keyword } = card;
        allKeywords.push(keyword);
      });
    };

    geAllKeywords();

    let uniqueKeywords = [];

    const getUniqueKeywords = () => {
      savedCards.forEach((card) => {
        const { keyword } = card;
        if (!uniqueKeywords.includes(keyword)) {
          uniqueKeywords.push(keyword);
        }
      });
    };

    getUniqueKeywords();

    let frequencies = {};

    const sortByFrequency = () => {
      for (const element of allKeywords) {
        if (frequencies[element]) {
          frequencies[element] += 1;
        } else {
          frequencies[element] = 1;
        }
      }
      setSortedKeywords(
        uniqueKeywords.sort((a, b) => {
          return frequencies[b] - frequencies[a];
        })
      );
    };
    sortByFrequency();
  }, [savedCards]);

  React.useEffect(() => {
    localStorage.setItem('sortedKeywords', JSON.stringify(sortedKeywords));
  }, [sortedKeywords]);

  React.useEffect(() => {
    setCurrentPage(location.pathname);
    localStorage.setItem('currentPage', currentPage);
  }, [location.pathname, currentPage]);

  function handleSearch(keyword) {
    setSearchStatus('loading');
    setDisplayedCards([]);
    setKeyword(keyword.toLowerCase());
    searchForNews(keyword)
      .then(({ articles }) => {
        setNewsCards(articles);
        if (articles.length === 0) {
          setSearchStatus('no-results');
        } else {
          setSearchStatus('results');
        }
        if (articles.length <= 3) {
          setShowMoreStatus('hidden');
        }
        setDisplayedCards(articles.slice(0, 3));
        setDisplayedCardCount(3);
      })
      .catch((err) => {
        setSearchStatus('error');
        console.log(err);
      });
  }

  function handleMenuClick() {
    setIsMenuOpen(true);
  }

  function handleBookmarkClick(card) {
    const token = localStorage.getItem('token');

    let savedTitles = [];
    getSavedTitles(savedTitles, savedCards);
    if (!savedTitles.includes(card.title)) {
      mainApi
        .saveArticle(token, card, keyword)
        .then((article) => {
          setSavedCards([...savedCards, article]);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      const { title } = card;
      const databaseCard = savedCards.find((card) => card.title === title);
      if (databaseCard) {
        handleDeleteClick(databaseCard);
      }
    }
  }

  function handleDeleteClick(card) {
    const token = localStorage.getItem('token');
    mainApi
      .deleteArticle(token, card._id)
      .then((updateArticles) => {
        setSavedCards(updateArticles);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  React.useEffect(() => {
    const closeByEsc = (e) => {
      if (e.key === 'Escape') {
        closeAllPopups();
      }
    };

    document.addEventListener('keydown', closeByEsc);

    return () => document.removeEventListener('keydown', closeByEsc);
  }, []);

  React.useEffect(() => {
    mainApi
      .getSavedArticles(localStorage.getItem('token'))
      .then((articles) => {
        setSavedCards(articles);
      })
      .catch((err) => {
        console.log(err);
      });

    mainApi
      .checkToken(localStorage.getItem('token'))
      .then((user) => {
        setCurrentUser(user);
      })
      .catch((err) => {
        console.log(err);
      });

    getScreenWidth();
    window.addEventListener('resize', getScreenWidth);

    return () => window.removeEventListener('resize', getScreenWidth);
  }, []);

  return (
    <div className='App'>
      <Switch>
        <Route exact path='/'>
          <CurrentUserContext.Provider value={currentUser}>
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
            {displayedCards.length > 0 && (
              <NewsCardList
                displayedCards={displayedCards}
                onShowMoreClick={showMoreCards}
                showMoreStatus={showMoreStatus}
                isLoggedIn={isLoggedIn}
                currentPage={currentPage}
                onSignInClick={handleSignInClick}
                onBookmarkClick={handleBookmarkClick}
                keyword={keyword}
                savedCards={savedCards}
              />
            )}
            <About />
            <Footer />
            <SignUpForm
              isOpen={isSignUpFormOpen}
              onClose={closeAllPopups}
              onLinkClick={handleSignInClick}
              onSignUp={handleSignUpSubmit}
              formSubmissionError={formSubmissionError}
            />
            <SignInForm
              isOpen={isSignInFormOpen}
              onClose={closeAllPopups}
              onLinkClick={handleSignUpClick}
              onSignIn={handleSignInSubmit}
              formSubmissionError={formSubmissionError}
            />
            <Popup isOpen={isRegistrationSuccessOpen} onClose={closeAllPopups}>
              <RegistrationSuccess onLinkClick={handleSignInClick} />
            </Popup>
          </CurrentUserContext.Provider>
        </Route>

        <ProtectedRoute isLoggedIn={isLoggedIn}>
          <Route path='/saved-news'>
            <CurrentUserContext.Provider value={currentUser}>
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
              {isMenuOpen === true && (
                <Menu onSignInClick={handleSignInClick} />
              )}
              <SavedNewsHeader
                savedCards={savedCards}
                sortedKeywords={sortedKeywords}
              />
              <SavedNews
                onDeleteClick={handleDeleteClick}
                currentPage={currentPage}
                savedCards={savedCards}
                sortedKeywords={sortedKeywords}
              />
              <Footer />
            </CurrentUserContext.Provider>
          </Route>
        </ProtectedRoute>
      </Switch>
    </div>
  );
}

export default App;
