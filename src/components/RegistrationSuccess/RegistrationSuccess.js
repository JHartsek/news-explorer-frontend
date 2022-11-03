import { Link } from 'react-router-dom';
import './RegistrationSuccess.css';

function RegistrationSuccess() {
  return (
    <section className='registration-success'>
      <h2 className='registration-success__title'>
        Registration successfully completed!
      </h2>
      <Link className='registration-success__link' to='/'>
        Sign in
      </Link>
    </section>
  );
}

export default RegistrationSuccess;
