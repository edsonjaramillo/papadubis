import Link from 'next/link';
import { copyrightYear } from '@/lib/copyrightYear';
import { navbarLinks } from '@/components/shared/Navbar';
import { ReactChildren } from 'react';

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
                (256) 123-4567
              </a>
              <a
                href='mailto:contact@buisness.com'
                className='footer__link'
                aria-label='Email'>
                contact@buisness.com
              </a>
            </FooterSection>
          </div>
          <div className='footer__socialgrid'>
            <FacebookIcon />
            <InstagramIcon />
          </div>
          <small className='footer__copyright'>
            &copy;{copyrightYear()}, Papa Dubis LLC. All Rights Reserved.
          </small>
        </div>
      </footer>
    </>
  );
};

const SocialIcon = ({ name, link, children }: any) => (
  <a
    href={link}
    className='footer__socialicon'
    target='_blank'
    rel='noreferrer external nofollow'
    aria-label={`Link to ${name} account`}>
    {children}
  </a>
);

const LinkedinIcon = () => (
  <SocialIcon name='LinkedIn' link='https://linkedin.com'>
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
  </SocialIcon>
);

const FacebookIcon = () => (
  <SocialIcon name='Facebook' link='https://www.facebook.com/papadubiscajunkitchen/'>
    <svg height='100%' viewBox='0 0 512 512' width='100%' xmlns='http://www.w3.org/2000/svg'>
      <path d='M374.245,285.825l14.104,-91.961l-88.233,0l0,-59.677c0,-25.159 12.325,-49.682 51.845,-49.682l40.117,0l0,-78.291c0,0 -36.408,-6.214 -71.214,-6.214c-72.67,0 -120.165,44.042 -120.165,123.775l0,70.089l-80.777,0l0,91.961l80.777,0l0,222.31c16.197,2.542 32.798,3.865 49.709,3.865c16.911,0 33.512,-1.323 49.708,-3.865l0,-222.31l74.129,0Z' />
    </svg>
  </SocialIcon>
);

const InstagramIcon = () => (
  <SocialIcon name='Instagram' link='https://www.instagram.com/papadubis/'>
    <svg height='100%' viewBox='0 0 512 512' width='100%' xmlns='http://www.w3.org/2000/svg'>
      <path d='M256,0c-69.526,0 -78.244,0.295 -105.549,1.541c-27.248,1.243 -45.858,5.57 -62.142,11.899c-16.834,6.542 -31.111,15.296 -45.342,29.528c-14.232,14.231 -22.986,28.508 -29.528,45.342c-6.329,16.283 -10.656,34.893 -11.899,62.141c-1.246,27.305 -1.54,36.023 -1.54,105.549c0,69.524 0.294,78.242 1.54,105.547c1.243,27.248 5.57,45.858 11.899,62.141c6.542,16.834 15.296,31.111 29.528,45.344c14.231,14.231 28.508,22.985 45.342,29.527c16.284,6.328 34.894,10.656 62.142,11.899c27.305,1.245 36.023,1.54 105.549,1.54c69.524,0 78.242,-0.295 105.547,-1.54c27.248,-1.243 45.858,-5.571 62.141,-11.899c16.834,-6.542 31.111,-15.296 45.344,-29.527c14.231,-14.233 22.985,-28.51 29.527,-45.344c6.328,-16.283 10.656,-34.893 11.899,-62.141c1.245,-27.305 1.54,-36.023 1.54,-105.547c0,-69.526 -0.295,-78.244 -1.54,-105.549c-1.243,-27.248 -5.571,-45.858 -11.899,-62.141c-6.542,-16.834 -15.296,-31.111 -29.527,-45.342c-14.233,-14.232 -28.51,-22.986 -45.344,-29.528c-16.283,-6.329 -34.893,-10.656 -62.141,-11.899c-27.305,-1.246 -36.023,-1.541 -105.547,-1.541Zm0,46.127c68.354,0 76.451,0.26 103.445,1.492c24.959,1.139 38.514,5.309 47.535,8.814c11.949,4.644 20.477,10.192 29.435,19.15c8.959,8.958 14.506,17.487 19.15,29.435c3.506,9.021 7.676,22.576 8.815,47.535c1.231,26.995 1.492,35.092 1.492,103.447c0,68.354 -0.261,76.451 -1.492,103.445c-1.139,24.959 -5.309,38.514 -8.815,47.535c-4.644,11.949 -10.191,20.477 -19.15,29.435c-8.958,8.959 -17.486,14.506 -29.435,19.15c-9.021,3.506 -22.576,7.676 -47.535,8.814c-26.99,1.232 -35.086,1.493 -103.445,1.493c-68.361,0 -76.455,-0.261 -103.447,-1.493c-24.959,-1.138 -38.514,-5.308 -47.535,-8.814c-11.949,-4.644 -20.477,-10.191 -29.436,-19.15c-8.958,-8.958 -14.506,-17.486 -19.149,-29.435c-3.506,-9.021 -7.676,-22.576 -8.815,-47.535c-1.232,-26.994 -1.492,-35.091 -1.492,-103.445c0,-68.355 0.26,-76.452 1.492,-103.447c1.139,-24.959 5.309,-38.514 8.815,-47.535c4.643,-11.948 10.191,-20.477 19.149,-29.435c8.959,-8.958 17.487,-14.506 29.436,-19.15c9.021,-3.505 22.576,-7.675 47.535,-8.814c26.995,-1.232 35.092,-1.492 103.447,-1.492Z' />
      <path d='M256,341.332c-47.129,0 -85.334,-38.205 -85.334,-85.332c0,-47.129 38.205,-85.334 85.334,-85.334c47.127,0 85.332,38.205 85.332,85.334c0,47.127 -38.205,85.332 -85.332,85.332Zm0,-216.792c-72.604,0 -131.46,58.856 -131.46,131.46c0,72.602 58.856,131.458 131.46,131.458c72.602,0 131.458,-58.856 131.458,-131.458c0,-72.604 -58.856,-131.46 -131.458,-131.46Z' />
      <path d='M423.372,119.346c0,16.967 -13.754,30.72 -30.72,30.72c-16.966,0 -30.72,-13.753 -30.72,-30.72c0,-16.966 13.754,-30.719 30.72,-30.719c16.966,0 30.72,13.753 30.72,30.719Z' />
    </svg>
  </SocialIcon>
);

const TwitterIcon = () => (
  <SocialIcon name='Twitter' link='https://twitter.com'>
    <svg height='100%' viewBox='0 0 512 512' width='100%' xmlns='http://www.w3.org/2000/svg'>
      <path d='M161.014,464.013c193.208,0 298.885,-160.071 298.885,-298.885c0,-4.546 0,-9.072 -0.307,-13.578c20.558,-14.871 38.305,-33.282 52.408,-54.374c-19.171,8.495 -39.51,14.065 -60.334,16.527c21.924,-13.124 38.343,-33.782 46.182,-58.102c-20.619,12.235 -43.18,20.859 -66.703,25.498c-19.862,-21.121 -47.602,-33.112 -76.593,-33.112c-57.682,0 -105.145,47.464 -105.145,105.144c0,8.002 0.914,15.979 2.722,23.773c-84.418,-4.231 -163.18,-44.161 -216.494,-109.752c-27.724,47.726 -13.379,109.576 32.522,140.226c-16.715,-0.495 -33.071,-5.005 -47.677,-13.148l0,1.331c0.014,49.814 35.447,93.111 84.275,102.974c-15.464,4.217 -31.693,4.833 -47.431,1.802c13.727,42.685 53.311,72.108 98.14,72.95c-37.19,29.227 -83.157,45.103 -130.458,45.056c-8.358,-0.016 -16.708,-0.522 -25.006,-1.516c48.034,30.825 103.94,47.18 161.014,47.104' />
    </svg>
  </SocialIcon>
);

export default Footer;
