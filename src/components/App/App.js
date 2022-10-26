import './App.css';

import Main from '../Main/Main';
import About from '../About/About';
import NewsCardList from '../NewsCardList/NewCardList';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className='App'>
      <Main /> 
      <NewsCardList />
      <About /> 
      <Footer />
    </div>
  );
}

export default App;
