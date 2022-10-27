import { Link } from 'react-router-dom';
import './RegistrationSuccess.css';

function RegistrationSuccess() {
    return(
        <article className='registration-success'>
            <h1 className='registration-success__title'>Registration successfully completed!</h1>
            <Link className='registration-success__link' to='/'>Sign in</Link>
        </article>
    )
}

export default RegistrationSuccess;