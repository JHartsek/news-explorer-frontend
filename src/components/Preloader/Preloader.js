import './Preloader.css';

function Preloader() {
  return (
    <section className='preloader'>
      <i className='preloader__cirlce'></i>
      <h2 className='preloader__text'>Searching for news...</h2>
    </section>
  );
}

export default Preloader;
