import './Footer.css';

import facebook from '../../images/facebook.svg';
import gitHub from '../../images/gitHub.svg';

function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__copywrite'>
        © {new Date().getFullYear()} Supersite, Powered by News API
      </p>
      <nav className='footer__nav nav'>
        <ul className='nav__text text'>
          <li className='text__link'>
            <a className='text__link' href='/'>
              Home
            </a>
          </li>
          <li className='text__link'>
            <a className='text__link' href='/'>
              Practicum
            </a>
          </li>
        </ul>
        <ul className='nav__icons icons'>
          <li className='icons__link'>
            <a className='icons__link' href='/'>
              <img src={facebook} alt='facebook logo' />
            </a>
          </li>
          <li className='icons__link'>
            <a className='icons__link' href='/'>
              <img src={gitHub} alt='github logo' />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
