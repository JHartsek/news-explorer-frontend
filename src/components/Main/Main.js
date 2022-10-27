import './Main.css';

import SearchForm from '../SearchForm/SearchForm';

function Main() {
  return (
    <main className='main'>

      <h1 className='main__title'> What's going on in the world? </h1>
      <p className='main__description'>
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <SearchForm />
    </main>
  );
}

export default Main;
