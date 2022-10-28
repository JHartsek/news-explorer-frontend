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

function App() {
  const [currentPage, setCurrentPage] = React.useState('home');
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [device, setDevice] = React.useState('computer');
  const [isSignUpFormOpen, setIsSignUpFormOpen] = React.useState(false);
  const [isSignInFormOpen, setIsSignInFormOpen] = React.useState(false);

  function getScreenWidth() {
    if (window.innerWidth <= 525) {
      setDevice('phone');
    }
  }
  function closeAllPopups() {
    setIsSignUpFormOpen(false);
    setIsSignInFormOpen(false);
  }

  const onNavButtonClick = () => {
    if ((currentPage = 'home')) {
      setCurrentPage('saved-news');
      //history.push('/saved-news')
    } else {
      setCurrentPage('home');
      //history.push('/')
    }
    setIsLoggedIn(!isLoggedIn);
  };

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
            onNavButtonClick={onNavButtonClick}
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
            onNavButtonClick={onNavButtonClick}
          />
          <Main />
          <Preloader />
          <NoResults />
          <NewsCardList />
          <About />
          <Footer />
          <SignUpForm isOpen={isSignUpFormOpen} onClose={closeAllPopups} />
          <SignInForm isOpen={isSignInFormOpen} onClose={closeAllPopups} />
          <Popup>
            <RegistrationSuccess />
          </Popup>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
