import PopupWithForm from '../PopupWithForm/PopupWithForm';
import { useFormValidation } from '../../hooks/useFormValidation';

function SignInForm({
  isOpen,
  onClose,
  onLinkClick,
  onSignIn,
  formSubmissionError,
}) {
  const { inputValues, handleChange, errors, isValid } = useFormValidation();
  const handleSubmit = (e) => {
    e.preventDefault();
    onSignIn(inputValues);
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
      formSubmissionError={formSubmissionError}
    >
      <label className='form__label' htmlFor='email' form='sign-in-form'>
        Email
      </label>
      <input
        id='sign-in-email'
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

      <label className='form__label' htmlFor='password' form='sign-in-form'>
        Password
      </label>
      <input
        id='sign-in-password'
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
    </PopupWithForm>
  );
}

export default SignInForm;
