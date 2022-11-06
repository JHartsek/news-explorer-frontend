import './Main.css';

import SearchForm from '../SearchForm/SearchForm';

function Main({ onSearchSubmit }) {
  return (
    <main className='main'>
      <h1 className='main__title'> What's going on in the world? </h1>
      <p className='main__description'>
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <SearchForm onSearchSubmit={onSearchSubmit} />
    </main>
  );
}

export default Main;
