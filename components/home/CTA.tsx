import Link from 'next/link';

const CTA = () => {
  return (
    <>
      <div className='cta'>
        <div className='cta__grid responsive-width-cta'>
          <h1 className='cta__header'>Welcome to Papa Dubis!</h1>
          <span className='cta__subheader'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit aliquid nesciunt
            iste atque, blanditiis necessitatibus commodi non laboriosam odit mollitia.
          </span>
          <div className='cta__buttongrid'>
            <a
              href='https://papadubis.mobilebytes.com/menu'
              target='_blank'
              rel='external nofollow noopener noreferrer'
              className='cta__button'>
              Order Online
            </a>
            <Link href='/menu'>
              <a className='cta__buttonalt'>View Menu</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CTA;
