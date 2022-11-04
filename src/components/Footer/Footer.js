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
        <ul className='nav__text'>
          <li className='nav__link'>
            <a className='nav__link' href='/' target='_blank'>
              Home
            </a>
          </li>
          <li className='nav__link'>
            <a
              className='nav__link'
              href='https://practicum.com/'
              target='_blank'
            >
              Practicum
            </a>
          </li>
        </ul>
        <ul className='nav__icons'>
          <li className='nav__link'>
            <a
              className='nav__link'
              href='https://www.facebook.com/'
              target='_blank'
            >
              <img src={facebook} alt='facebook logo' />
            </a>
          </li>
          <li className='nav__link'>
            <a
              className='nav__link'
              href='https://github.com/JHartsek'
              target='_blank'
            >
              <img src={gitHub} alt='github logo' />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
