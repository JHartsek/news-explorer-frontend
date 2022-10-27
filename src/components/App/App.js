import './App.css';

import Header from '../Header/Header';
import Main from '../Main/Main';
import About from '../About/About';
import NewsCardList from '../NewsCardList/NewCardList';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <Main /> 
      <NewsCardList />
      <About /> 
      <Footer />
    </div>
  );
}

export default App;
