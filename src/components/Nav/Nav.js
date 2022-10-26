import './Nav.css';
import logoutIcon from '../../images/logout.svg';

function Nav() {
  return (
    <nav className='nav'>
      <a href='/' className='nav__link'>
        {' '}
        Home{' '}
      </a>
      <a href='/' className='nav__link'>
        Saved articles
      </a>
      <a href='/' className='nav__button'>
        Elise
        <img className='nav__button__icon' src={logoutIcon} alt='logout icon' />
      </a>
    </nav>
  );
}

export default Nav;
