import './SearchForm.css';

function SearchForm() {
  return (
    <form className='search-form'>
      <input
        className='search-form__input'
        type='text'
        placeholder='Enter topic'
        required
      />
      <button className='search-form__submit' type='submit'>Search</button>
    </form>
  );
}

export default SearchForm;
