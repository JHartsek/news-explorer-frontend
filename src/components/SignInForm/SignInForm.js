import PopupWithForm from '../PopupWithForm/PopupWithForm';
import { useFormValidation } from '../../hooks/useFormValidation';

function SignInForm({ isOpen, onClose, onLinkClick }) {
  const { inputValues, handleChange, errors, isValid } = useFormValidation();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('form submitted');
  };

  return (
    <PopupWithForm
      name='sign-in-form'
      id='sign-in-form'
      title='Sign in'
      buttonText='Sign in'
      linkText='Sign up'
      isOpen={isOpen}
      onClose={onClose}
      onLinkClick={onLinkClick}
      onSubmit={handleSubmit}
      isValid={isValid}
    >
      <label className='form__label' htmlFor='email' form='sign-in-form'>
        Email
      </label>
      <input
        id='email'
        name='email'
        className='form__input'
        type='text'
        value={inputValues.email || ''}
        placeholder='Enter email'
        onChange={handleChange}
        required
        minLength='2'
        maxLength='40'
      />
      <span className='form__input-error name_input-error form__input-error_active'>
        {' '}
        {`${errors.email ?? ''}`}
      </span>

      <label className='form__label' htmlFor='password' form='sign-in-form'>
        Password
      </label>
      <input
        id='password'
        name='password'
        className='form__input'
        type='password'
        placeholder='Enter password'
        value={inputValues.password || ''}
        onChange={handleChange}
        required
        minLength='2'
        maxLength='40'
      />
      <span className='form__input-error aboutinput-error'>
        {`${errors.password ?? ''}`}
      </span>
    </PopupWithForm>
  );
}

export default SignInForm;
