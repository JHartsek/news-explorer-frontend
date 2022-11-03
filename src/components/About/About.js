import './About.css';

import authorImg from '../../images/author.jpg';

function About() {
  return (
    <section className='about'>
      <img className='about__image' src={authorImg} alt='Julia' />
      <div className='about__text text'>
        <h2 className='text__title'>About the author</h2>
        <p className='text__description'>
          Julia Hartsek is a full stack developer and recent Practicum graduate.
        </p>
      </div>
    </section>
  );
}

export default About;
