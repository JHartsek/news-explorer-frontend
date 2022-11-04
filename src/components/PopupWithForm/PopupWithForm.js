import './PopupWithForm.css';

function PopupWithForm({
  name,
  title,
  id,
  buttonText,
  linkText,
  onLinkClick,
  isOpen,
  onClose,
  onSubmit,
  children,
  isValid,
}) {
  return (
    <section
      className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`}
    >
      <div className='popup__container'>
        <button
          type='button'
          className='popup__close-button'
          aria-label='close-popup'
          onClick={onClose}
        ></button>
        <form
          className={`${name}-form form`}
          name={`${name}-form`}
          onSubmit={onSubmit}
          id={id}
        >
          <h2 className={`form__title form__title_${name}`}> {title}</h2>
          {children}
          <button
            type='submit'
            className={`form__save-button ${
              !isValid ? 'form__save-button_disabled' : ''
            }`}
          >
            {buttonText}
          </button>
          <p className='form__link-header'>
            {`or `}
            <button className='form__link' onClick={onLinkClick}>
              {linkText}
            </button>
          </p>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;
