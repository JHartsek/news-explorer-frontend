import './Menu.css';
import { Link } from 'react-router-dom';

function Menu({ onSignInClick }) {
  return (
    <section className='menu'>
      <Link to='/' className='menu__link'>
        Home
      </Link>
      <button onClick={onSignInClick} className='menu__button'>
        Sign In
      </button>
    </section>
  );
}

export default Menu;
