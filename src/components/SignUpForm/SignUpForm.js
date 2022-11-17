import PopupWithForm from '../PopupWithForm/PopupWithForm';
import { useFormValidation } from '../../hooks/useFormValidation';

function SignUpForm({
  isOpen,
  onClose,
  onLinkClick,
  onSignUp,
  formSubmissionError,
}) {
  const { inputValues, handleChange, errors, isValid } = useFormValidation();
  const handleSubmit = (e) => {
    e.preventDefault();
    onSignUp(inputValues);
  };

  return (
    <PopupWithForm
      name='sign-up-form'
      id='sign-up-form'
      title='Sign up'
      buttonText='Sign up'
      linkText='Sign in'
      isOpen={isOpen}
      onClose={onClose}
      onLinkClick={onLinkClick}
      onSubmit={handleSubmit}
      isValid={isValid}
      formSubmissionError={formSubmissionError}
    >
      <label className='form__label' htmlFor='email' form='sign-up-form'>
        Email
      </label>
      <input
        id='sign-up-email'
        name='email'
        className='form__input'
        type='email'
        value={inputValues.email || ''}
        placeholder='Enter email'
        onChange={handleChange}
        required
        minLength='2'
        maxLength='40'
      />
      <span className='form__input-error'> {`${errors.email ?? ''}`}</span>

      <label className='form__label' htmlFor='password' form='sign-up-form'>
        Password
      </label>
      <input
        id='sign-up-password'
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
      <span className='form__input-error'>{`${errors.password ?? ''}`}</span>

      <label className='form__label' htmlFor='username' form='sign-up-form'>
        Username
      </label>
      <input
        id='username'
        name='username'
        className='form__input'
        type='text'
        placeholder='Enter username'
        value={inputValues.username || ''}
        onChange={handleChange}
        required
        minLength='2'
        maxLength='40'
      />
      <span className='form__input-error'> {`${errors.username ?? ''}`}</span>
    </PopupWithForm>
  );
}

export default SignUpForm;
