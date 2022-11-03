import './SearchForm.css';
import { useFormValidation } from '../../hooks/useFormValidation';

function SearchForm({ onSearchSubmit }) {
  const { inputValues, isValid, handleChange } = useFormValidation();

  function handleSubmit(e) {
    e.preventDefault();
    onSearchSubmit(inputValues.keyword);
  }

  return (
    <form className='search-form' onSubmit={handleSubmit}>
      <input
        className='search-form__input'
        name='keyword'
        type='text'
        placeholder='Enter topic'
        onChange={handleChange}
        required
      />
      <button
        className={`search-form__submit ${
          !isValid ? 'search-form__submit_status_disabled' : ''
        }`}
        type='submit'
      >
        Search
      </button>
    </form>
  );
}

export default SearchForm;
