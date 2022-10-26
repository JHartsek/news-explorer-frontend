import './Footer.css';

import facebook from '../../images/facebook.svg';
import gitHub from '../../images/gitHub.svg';

function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__copywrite'>
        © {new Date().getFullYear()} Supersite, Powered by News API
      </p>
      <div className='footer__nav'>
        <div className='footer__nav__text'> 
            <a className='footer__nav__text__link' href='/'>
            Home
            </a>
            <a className='footer__nav__text__link' href='/'>
            Practicum
            </a>
        </div>
        <div className='footer__nav__icons'>
            <a className='footer__nav__icons__link' href='/'>
            <img src={facebook} alt='facebook logo' />
            </a>
            <a className='footer__nav__icons__link' href='/'>
            <img src={gitHub} alt='github logo' />
            </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
