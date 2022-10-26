import './About.css';

import authorImg from '../../images/author.jpg'

function About() {
    return(
        <section className='about'>
            <img className='about__image' src={authorImg} alt='Julia'/> 
            <div className='about__text'> 
            <h1 className='about__text__title'>About the author</h1>
            <p className='about__text__description'>Julia Hartsek is a full stack developer and recent Practicum graduate.</p>
            </div>
        </section>
    )
}

export default About; 