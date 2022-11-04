import './About.css';

import authorImg from '../../images/author.jpg';

function About() {
  return (
    <section className='about'>
      <img className='about__image' src={authorImg} alt='Julia' />
      <div className='about__text-container'>
        <h2 className='about__title'>About the author</h2>
        <p className='about__description'>
          Julia Hartsek is a full stack developer and recent Practicum graduate.
        </p>
      </div>
    </section>
  );
}

export default About;
