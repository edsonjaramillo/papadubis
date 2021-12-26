import Link from 'next/link';
import { copyrightYear } from '@/lib/copyrightYear';
import { navbarLinks } from '@/components/shared/Navbar';

interface FooterProps {
  children: any;
}

const Footer = () => {
  const FooterSection = ({ children }: FooterProps) => (
    <div className='footer__section'>{children}</div>
  );

  return (
    <>
      <footer className='footer'>
        <div className='footer__grid'>
          <div className='footer__linksgrid responsive-width-footer'>
            <FooterSection>
              <span className='footer__header'>Navigation</span>
              {navbarLinks.map((link) => (
                <Link key={link.route} href={link.route}>
                  <a className='footer__link'>{link.name}</a>
                </Link>
              ))}
            </FooterSection>
            <FooterSection>
              <span className='footer__header'>Information</span>
              <Link href='/privacy'>
                <a className='footer__link'>Privacy Policy</a>
              </Link>
              <Link href='/terms'>
                <a className='footer__link'>Terms and Conditions</a>
              </Link>
              <Link href='/sitemap.xml'>
                <a className='footer__link'>Sitemap</a>
              </Link>
            </FooterSection>
            <FooterSection>
              <span className='footer__header'>Contact Details</span>
              <a aria-label='Phone Number' href='tel:2568947878' className='footer__link'>
                (256) 894-7878
              </a>
              <a
                href='mailto:edsonajaramillo@gmail.com'
                className='footer__link'
                aria-label='Email'>
                edsonajaramillo@gmail.com
              </a>
            </FooterSection>
          </div>
          <div className='footer__socialgrid'>
            <GithubIcon />
            <LinkedinIcon />
          </div>
          <small className='footer__copyright'>
            &copy;{copyrightYear()}, Papa Dubis LLC. All Rights Reserved.
          </small>
        </div>
      </footer>
    </>
  );
};

const GithubIcon = () => (
  <a
    href='https://github.com'
    className='footer__socialicon'
    target='_blank'
    rel='noreferrer external nofollow'
    aria-label='Link to Github profile'>
    <svg
      height='100%'
      width='100%'
      viewBox='0 0 256 249'
      xmlns='http://www.w3.org/2000/svg'
      preserveAspectRatio='xMinYMin meet'>
      <g>
        <path d='M127.505 0C57.095 0 0 57.085 0 127.505c0 56.336 36.534 104.13 87.196 120.99 6.372 1.18 8.712-2.766 8.712-6.134 0-3.04-.119-13.085-.173-23.739-35.473 7.713-42.958-15.044-42.958-15.044-5.8-14.738-14.157-18.656-14.157-18.656-11.568-7.914.872-7.752.872-7.752 12.804.9 19.546 13.14 19.546 13.14 11.372 19.493 29.828 13.857 37.104 10.6 1.144-8.242 4.449-13.866 8.095-17.05-28.32-3.225-58.092-14.158-58.092-63.014 0-13.92 4.981-25.295 13.138-34.224-1.324-3.212-5.688-16.18 1.235-33.743 0 0 10.707-3.427 35.073 13.07 10.17-2.826 21.078-4.242 31.914-4.29 10.836.048 21.752 1.464 31.942 4.29 24.337-16.497 35.029-13.07 35.029-13.07 6.94 17.563 2.574 30.531 1.25 33.743 8.175 8.929 13.122 20.303 13.122 34.224 0 48.972-29.828 59.756-58.22 62.912 4.573 3.957 8.648 11.717 8.648 23.612 0 17.06-.148 30.791-.148 34.991 0 3.393 2.295 7.369 8.759 6.117 50.634-16.879 87.122-64.656 87.122-120.973C255.009 57.085 197.922 0 127.505 0' />
        <path d='M47.755 181.634c-.28.633-1.278.823-2.185.389-.925-.416-1.445-1.28-1.145-1.916.275-.652 1.273-.834 2.196-.396.927.415 1.455 1.287 1.134 1.923M54.027 187.23c-.608.564-1.797.302-2.604-.589-.834-.889-.99-2.077-.373-2.65.627-.563 1.78-.3 2.616.59.834.899.996 2.08.36 2.65M58.33 194.39c-.782.543-2.06.034-2.849-1.1-.781-1.133-.781-2.493.017-3.038.792-.545 2.05-.055 2.85 1.07.78 1.153.78 2.513-.019 3.069M65.606 202.683c-.699.77-2.187.564-3.277-.488-1.114-1.028-1.425-2.487-.724-3.258.707-.772 2.204-.555 3.302.488 1.107 1.026 1.445 2.496.7 3.258M75.01 205.483c-.307.998-1.741 1.452-3.185 1.028-1.442-.437-2.386-1.607-2.095-2.616.3-1.005 1.74-1.478 3.195-1.024 1.44.435 2.386 1.596 2.086 2.612M85.714 206.67c.036 1.052-1.189 1.924-2.705 1.943-1.525.033-2.758-.818-2.774-1.852 0-1.062 1.197-1.926 2.721-1.951 1.516-.03 2.758.815 2.758 1.86M96.228 206.267c.182 1.026-.872 2.08-2.377 2.36-1.48.27-2.85-.363-3.039-1.38-.184-1.052.89-2.105 2.367-2.378 1.508-.262 2.857.355 3.049 1.398' />
      </g>
    </svg>
  </a>
);

const LinkedinIcon = () => (
  <a
    href='https://linkedin.com'
    className='footer__socialicon'
    target='_blank'
    rel='noreferrer external nofollow'
    aria-label='Link to LinkedIn profile'>
    <svg
      height='100%'
      version='1.1'
      viewBox='0 0 512 512'
      width='100%'
      xmlns='http://www.w3.org/2000/svg'>
      <g id='g5891'>
        <path
          d='M512,64c0,-35.323 -28.677,-64 -64,-64l-384,0c-35.323,0 -64,28.677 -64,64l0,384c0,35.323 28.677,64 64,64l384,0c35.323,0 64,-28.677 64,-64l0,-384Z'
          id='background'
        />
        <g className='footer__clearsvg'>
          <rect height='257.962' id='rect11' width='85.76' x='61.053' y='178.667' />
          <path
            d='M104.512,54.28c-29.341,0 -48.512,19.29 -48.512,44.573c0,24.752 18.588,44.574 47.377,44.574l0.554,0c29.903,0 48.516,-19.822 48.516,-44.574c-0.555,-25.283 -18.611,-44.573 -47.935,-44.573Z'
            id='path13-0'
          />
          <path
            d='M357.278,172.601c-45.49,0 -65.866,25.017 -77.276,42.589l0,-36.523l-85.738,0c1.137,24.197 0,257.961 0,257.961l85.737,0l0,-144.064c0,-7.711 0.554,-15.42 2.827,-20.931c6.188,-15.4 20.305,-31.352 43.993,-31.352c31.012,0 43.436,23.664 43.436,58.327l0,138.02l85.741,0l0,-147.93c0,-79.237 -42.305,-116.097 -98.72,-116.097Z'
            id='path15'
          />
        </g>
      </g>
    </svg>
  </a>
);

export default Footer;
