import './Popup.css'; 

function Popup({
  name,
  isOpen,
  onClose,
  children,
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
        {children}
      </div>
    </section>
  );
}

export default Popup;
