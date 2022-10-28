import './App.css';

import Header from '../Header/Header';
import Main from '../Main/Main';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import About from '../About/About';
import Preloader from '../Preloader/Preloader';
import NoResults from '../NoResults/NoResults';
import NewsCardList from '../NewsCardList/NewCardList';
import Popup from '../Popup/Popup';
import RegistrationSuccess from '../RegistrationSuccess/RegistrationSuccess';
import Footer from '../Footer/Footer';


function App() {
  return (
    <div className='App'>
      <Header />
      <Main />
      <SavedNewsHeader />
      <Preloader />
      <NoResults />
      <NewsCardList />
      <About /> 
      <Popup>
        <RegistrationSuccess />
      </Popup>
      <Footer />
    </div>
  );
}

export default App;