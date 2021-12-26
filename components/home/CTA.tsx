import Link from 'next/link';

const CTA = () => {
  return (
    <>
      <div className='cta'>
        <div className='cta__grid responsive-width-cta'>
          <h1 className='cta__header'>Welcome to Papa Dubis</h1>
          <span className='cta__subheader'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit aliquid nesciunt
            iste atque, blanditiis necessitatibus commodi non laboriosam odit mollitia.
          </span>
          <div className='cta__buttongrid'>
            <Link href='/projects'>
              <a className='cta__button'>Order Online</a>
            </Link>
            <Link href='/contact'>
              <a className='cta__buttonalt'>View Menu</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CTA;
