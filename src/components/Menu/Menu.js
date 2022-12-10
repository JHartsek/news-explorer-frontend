import './Menu.css';
import { Link } from 'react-router-dom';

function Menu({ isLoggedIn, onSignInClick, onSignOutClick }) {
  return (
    <section className='menu'>
      <Link to='/' className='menu__link menu__link-first'>
        Home
      </Link>
      {isLoggedIn && (
        <Link to='/saved-news' className='menu__link'>
          Saved articles
        </Link>
      )}
      {!isLoggedIn ? (
        <button onClick={onSignInClick} className='menu__button'>
          Sign In
        </button>
      ) : (
        <button onClick={onSignOutClick} className='menu__button'>
          Sign Out
        </button>
      )}
    </section>
  );
}

export default Menu;
