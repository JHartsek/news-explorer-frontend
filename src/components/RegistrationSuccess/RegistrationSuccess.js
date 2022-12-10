import './RegistrationSuccess.css';

function RegistrationSuccess({ onLinkClick }) {
  return (
    <section className='registration-success'>
      <h2 className='registration-success__title'>
        Registration successfully completed!
      </h2>
      <button className='registration-success__link' onClick={onLinkClick}>
        Sign in
      </button>
    </section>
  );
}

export default RegistrationSuccess;
