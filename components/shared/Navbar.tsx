import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

interface PageLink {
  route: string;
  name: string;
}

export const navbarLinks = [
  {
    route: '/menu',
    name: 'Menu',
  },
  {
    route: '/about',
    name: 'About',
  },
  {
    route: '/contact',
    name: 'Contact',
  },
];

const categories = [
  {
    name: 'Appetizers',
    route: '/menu/appetizers',
  },
  {
    name: 'Cajun Samplers',
    route: '/menu/samplers',
  },
  {
    name: 'Baskets',
    route: '/menu/baskets',
  },
  {
    name: 'Steaks & Stuff',
    route: '/menu/steakstuff',
  },
  {
    name: 'Pastas',
    route: '/menu/appetizers',
  },
  {
    name: 'Sides',
    route: '/menu/sides',
  },
  {
    name: 'Po Boys',
    route: '/menu/baskets',
  },
  {
    name: 'Cajun Dishes',
    route: '/menu/baskets',
  },
  {
    name: 'Desserts',
    route: '/menu/desserts',
  },
];

const navVariants: Variants = {
  open: {
    translateX: '100%',
    transition: {
      ease: 'linear',
      duration: 0.15,
    },
  },
  close: {
    translateX: '0%',
    transition: {
      ease: 'linear',
      duration: 0.15,
    },
  },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const Hamburger = () => (
    <button
      type='button'
      className='navbar__hamburger'
      aria-label='open menu button'
      onClick={() => setIsOpen(true)}>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
        <path d='M0 0h24v24H0V0z' fill='none' />
        <path d='M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z' />
      </svg>
    </button>
  );

  const ExitIcon = () => (
    <button
      type='button'
      className='navbar__exit'
      aria-label='exit menu button'
      onClick={() => setIsOpen(false)}>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
        <path d='M0 0h24v24H0V0z' fill='none' />
        <path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z' />
      </svg>
    </button>
  );

  const PageLink = ({ route, name }: PageLink) => (
    <Link href={route}>
      <a className='navbar__link' onClick={() => setIsOpen(false)}>
        {name}
      </a>
    </Link>
  );

  return (
    <>
      <header>
        <a href='#main-content' className='navbar__skipcontent'>
          Skip To Content
        </a>
        <nav className='navbar' title='main navigation bar'>
          <div className='navbar__content responsive-width'>
            <Logo />
            <motion.div
              initial='close'
              variants={navVariants}
              animate={isOpen ? 'open' : 'close'}
              id='hamburger-menu'
              className='navbar__links'>
              {navbarLinks.map((link) => (
                <PageLink key={link.name} route={link.route} name={link.name} />
              ))}
              <ExitIcon />
            </motion.div>
            <Hamburger />
          </div>
          <nav aria-label='food categories' className='responsive-width-contact navbar__bg'>
            {categories.map((category, i) => (
              <a key={i} className='navbar__category' href={category.route}>
                {category.name}
              </a>
            ))}
          </nav>
        </nav>
        <div arial-hidden='true' className='navbar__spacer' />
      </header>
    </>
  );
};

const Logo = () => (
  <Link href='/'>
    <a className='navbar__logo' aria-label='Papa Dubis logo'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='100%'
        height='100%'
        viewBox='0, 0, 400,400'>
        <g>
          <path
            id='path0'
            d='M196.842 20.081 C 195.766 21.378,196.566 22.190,198.922 22.190 L 200.987 22.190 200.798 31.331 C 200.631 39.429,200.722 40.544,201.602 41.099 C 203.374 42.216,203.785 40.767,204.235 31.830 L 204.672 23.137 206.541 22.654 C 208.654 22.108,209.462 21.199,208.600 20.338 C 207.538 19.276,197.689 19.061,196.842 20.081 M181.376 21.362 C 180.477 23.706,181.499 40.419,182.611 41.530 C 184.937 43.857,185.664 35.193,184.172 22.920 C 183.856 20.321,182.142 19.366,181.376 21.362 M164.231 21.752 C 163.910 22.153,162.800 24.124,161.764 26.131 C 159.481 30.557,159.337 30.581,158.236 26.715 C 157.092 22.696,155.137 22.282,154.863 26.001 C 154.647 28.936,157.306 41.701,158.519 43.553 C 160.301 46.273,161.354 44.740,160.897 40.094 C 160.564 36.720,160.631 36.093,161.268 36.591 C 161.695 36.924,163.565 38.418,165.424 39.912 C 168.979 42.768,170.322 43.214,170.892 41.730 C 171.338 40.568,169.952 39.077,165.423 35.845 C 163.404 34.404,161.752 33.138,161.752 33.030 C 161.752 32.923,162.932 30.768,164.375 28.242 C 167.228 23.248,167.702 21.022,165.911 21.022 C 165.308 21.022,164.552 21.350,164.231 21.752 M224.417 23.629 C 219.119 25.933,216.507 38.040,220.401 42.241 C 223.355 45.428,228.897 44.770,230.453 41.048 C 231.875 37.643,228.912 35.910,227.433 39.281 C 225.643 43.361,221.551 40.329,222.241 35.435 C 223.436 26.954,226.935 23.278,229.566 27.737 C 231.680 31.320,234.012 29.712,232.203 25.919 C 230.775 22.926,227.946 22.094,224.417 23.629 M248.059 28.481 C 246.832 29.927,241.160 46.599,241.550 47.616 C 242.482 50.043,246.423 45.328,246.423 41.786 C 246.423 39.708,247.878 38.989,250.545 39.749 C 254.367 40.839,254.398 40.938,252.579 46.164 C 250.796 51.287,251.281 54.037,253.565 51.753 C 254.660 50.658,259.853 36.714,260.280 33.723 C 260.782 30.201,258.621 30.660,257.004 34.419 C 255.456 38.018,255.535 37.980,251.774 36.912 C 248.858 36.083,248.680 35.929,249.018 34.510 C 250.332 28.994,249.905 26.307,248.059 28.481 M117.111 36.739 C 116.679 37.438,117.495 39.627,120.121 44.806 C 123.182 50.847,123.321 50.879,109.709 42.402 C 108.083 41.389,107.863 41.376,107.000 42.239 C 105.481 43.758,114.018 61.314,116.276 61.314 C 118.122 61.314,117.589 58.618,114.690 53.301 C 111.250 46.988,111.392 46.944,119.215 51.899 C 129.666 58.520,130.236 57.712,123.943 45.205 C 119.620 36.611,118.243 34.906,117.111 36.739 M274.330 40.730 C 272.944 42.325,265.693 56.380,265.693 57.472 C 265.693 58.566,270.996 61.299,273.139 61.308 C 275.093 61.317,274.750 59.743,272.555 58.628 C 269.160 56.904,269.106 56.767,270.760 54.110 C 271.593 52.773,272.346 51.594,272.433 51.490 C 272.521 51.386,273.429 51.733,274.451 52.262 C 275.473 52.791,276.680 53.081,277.133 52.907 C 278.607 52.342,278.002 50.806,275.912 49.809 C 273.609 48.711,273.564 48.574,274.654 45.967 C 275.984 42.786,276.917 42.372,279.630 43.756 C 282.885 45.417,285.076 44.531,282.774 42.484 C 280.025 40.041,275.707 39.144,274.330 40.730 M295.344 51.533 C 291.496 54.528,282.526 67.537,283.777 68.309 C 285.201 69.190,286.581 68.098,290.217 63.212 C 292.189 60.562,293.918 58.394,294.059 58.394 C 294.351 58.394,293.923 63.073,293.059 69.342 C 292.405 74.084,292.733 75.912,294.237 75.912 C 296.406 75.912,308.297 60.064,307.158 58.692 C 306.064 57.374,304.708 58.424,300.691 63.701 C 296.289 69.483,296.280 69.474,297.202 60.170 C 298.103 51.074,297.791 49.628,295.344 51.533 M90.511 52.319 C 90.511 52.831,92.078 55.593,93.993 58.456 C 103.408 72.532,97.219 75.550,86.367 62.174 C 83.389 58.504,81.230 57.407,81.641 59.773 C 81.935 61.462,88.597 70.462,90.619 71.902 C 98.342 77.401,105.225 69.571,99.955 61.282 C 95.650 54.510,90.511 49.633,90.511 52.319 M197.743 54.623 C 184.890 56.667,184.212 59.605,191.230 82.843 C 199.326 109.651,200.845 119.685,203.794 165.839 C 204.900 183.156,205.256 184.096,210.671 184.020 C 219.607 183.894,226.283 182.267,228.886 179.582 L 230.870 177.535 230.174 172.310 C 229.436 166.768,226.506 153.247,225.437 150.449 C 224.600 148.260,223.100 139.569,223.416 138.745 C 223.552 138.391,225.171 137.314,227.013 136.350 C 246.623 126.096,258.989 103.188,257.956 79.030 C 257.404 66.137,250.689 57.620,239.124 55.146 C 232.685 53.768,205.292 53.422,197.743 54.623 M166.813 55.144 C 159.351 57.149,158.549 58.890,158.498 73.184 C 158.455 85.218,158.263 87.813,156.695 97.518 C 151.818 127.715,137.085 150.632,107.068 174.712 C 90.592 187.930,90.299 190.564,104.426 198.491 C 114.886 204.360,114.985 204.322,131.307 187.995 L 140.438 178.862 145.985 178.134 C 149.036 177.733,154.029 176.891,157.080 176.261 C 172.846 173.007,171.404 172.364,171.926 182.869 C 172.454 193.471,172.798 194.158,177.347 193.688 C 180.754 193.336,193.986 187.238,195.878 185.147 C 199.590 181.046,195.184 134.339,186.537 86.131 C 181.071 55.658,178.708 51.947,166.813 55.144 M68.468 71.328 C 67.451 72.344,68.806 74.454,73.285 78.832 C 75.420 80.920,77.556 83.363,78.030 84.263 C 79.780 87.581,77.265 89.802,74.216 87.631 C 70.461 84.957,68.616 87.197,72.011 90.309 C 75.214 93.244,79.500 92.549,81.450 88.778 C 83.365 85.074,81.785 81.893,74.544 74.871 C 70.016 70.481,69.573 70.222,68.468 71.328 M116.991 71.259 C 92.901 75.584,62.812 120.818,53.403 166.852 C 52.565 170.952,51.009 178.511,49.944 183.650 C 44.759 208.669,45.468 210.305,61.551 210.438 C 73.699 210.538,74.694 209.810,75.920 199.934 C 77.084 190.553,81.742 163.927,82.347 163.198 C 82.683 162.793,85.266 162.313,88.331 162.087 C 111.137 160.403,122.011 155.376,133.269 141.314 C 150.124 120.261,156.137 88.009,145.026 78.253 C 138.810 72.795,126.098 69.624,116.991 71.259 M231.365 71.916 C 246.868 75.287,244.733 103.244,227.905 117.212 C 218.699 124.853,218.901 125.012,213.500 105.888 C 203.871 71.791,204.392 75.779,209.275 73.565 C 215.457 70.762,223.348 70.173,231.365 71.916 M264.535 72.322 C 260.371 74.556,260.110 75.428,260.438 86.036 C 261.857 131.925,259.219 143.968,241.362 173.121 C 239.007 176.965,237.080 180.440,237.080 180.844 C 237.080 184.849,252.602 184.695,261.776 180.599 C 267.232 178.163,267.570 177.497,270.074 164.276 C 273.054 148.543,272.996 148.744,274.893 147.623 C 276.519 146.662,301.026 140.146,303.013 140.146 C 305.741 140.146,306.958 144.341,308.266 158.247 C 309.098 167.100,309.480 167.319,320.468 165.244 C 337.635 162.002,339.220 159.811,334.279 146.161 C 328.020 128.871,315.302 108.438,302.664 95.370 C 283.173 75.215,271.875 68.386,264.535 72.322 M315.912 79.416 C 313.346 81.983,314.629 85.513,319.824 90.176 C 331.099 100.297,348.602 130.025,354.058 148.321 C 357.983 161.486,358.197 166.848,355.117 174.948 C 352.175 182.685,351.887 184.332,351.864 193.577 C 351.784 225.965,365.800 236.783,375.495 211.815 C 381.833 195.494,380.276 179.047,371.458 169.172 C 366.546 163.672,364.793 160.118,362.325 150.657 C 359.260 138.909,350.698 119.304,343.326 107.153 C 328.713 83.071,320.534 74.795,315.912 79.416 M279.179 93.296 C 286.141 101.673,299.490 123.167,299.991 126.807 C 300.422 129.938,296.866 132.180,286.216 135.489 C 275.771 138.735,275.328 138.154,275.328 121.222 C 275.328 110.980,275.060 105.907,274.211 100.128 C 272.466 88.248,273.641 86.632,279.179 93.296 M126.111 91.965 C 138.990 98.669,128.990 125.740,107.717 141.760 C 97.774 149.247,83.454 153.908,84.506 149.315 C 88.045 133.861,101.535 107.269,111.405 96.292 C 116.200 90.957,121.295 89.459,126.111 91.965 M49.168 94.131 C 47.788 95.511,51.909 102.343,59.109 110.613 C 61.806 113.711,63.586 113.324,62.175 109.947 C 60.552 106.063,62.873 101.776,66.007 102.869 C 67.990 103.560,69.489 103.190,69.489 102.009 C 69.489 101.252,52.275 93.431,50.607 93.431 C 50.201 93.431,49.553 93.746,49.168 94.131 M57.243 99.278 C 60.835 101.092,61.250 101.747,59.917 103.504 C 58.727 105.071,58.144 104.782,55.545 101.339 C 52.119 96.802,52.183 96.724,57.243 99.278 M171.305 107.150 C 172.667 110.699,173.947 156.516,172.712 157.523 C 171.638 158.400,152.625 162.544,151.557 162.134 C 150.119 161.582,150.474 160.146,153.519 154.201 C 160.321 140.924,164.382 129.091,167.052 114.774 C 167.714 111.225,168.386 107.861,168.547 107.299 C 168.902 106.051,170.843 105.946,171.305 107.150 M36.159 115.576 C 29.987 121.748,43.697 133.622,52.025 129.315 C 56.204 127.154,55.249 118.540,50.830 118.540 C 49.326 118.540,48.918 120.367,50.133 121.661 C 54.274 126.068,50.168 128.340,43.845 125.140 C 37.461 121.909,35.021 116.812,39.841 116.779 C 41.718 116.767,42.859 115.899,42.439 114.803 C 41.806 113.154,38.129 113.606,36.159 115.576 M27.960 141.168 C 22.497 155.209,17.899 175.871,17.137 189.801 C 16.717 197.468,17.329 199.653,21.175 204.229 C 24.076 207.680,24.895 210.489,25.644 219.562 C 27.642 243.775,45.281 291.985,53.741 296.360 C 61.029 300.129,63.253 293.191,57.289 285.290 C 45.921 270.228,34.354 238.736,32.697 218.336 C 31.982 209.527,32.495 207.243,36.339 202.129 C 39.518 197.901,39.976 196.151,41.122 183.841 C 42.116 173.163,45.476 155.889,47.604 150.511 C 47.826 149.949,47.770 149.489,47.479 149.489 C 46.351 149.489,41.044 168.488,39.427 178.313 C 38.358 184.814,36.243 187.287,34.515 184.059 C 33.554 182.262,36.730 162.738,39.419 153.918 C 40.198 151.363,40.206 149.965,39.437 150.734 C 38.537 151.634,33.780 170.374,31.985 180.088 C 31.108 184.839,29.788 186.209,28.085 184.137 C 26.280 181.940,30.415 157.122,34.174 147.591 C 34.396 147.029,34.333 146.569,34.033 146.569 C 33.073 146.569,28.681 161.608,26.803 171.322 C 24.236 184.606,23.934 185.320,21.308 184.312 C 18.891 183.385,22.647 160.824,27.907 144.672 C 29.418 140.033,29.458 137.315,27.960 141.168 M307.628 175.691 C 299.117 179.120,292.392 187.020,289.665 196.790 C 284.957 213.660,289.844 224.799,307.445 237.321 C 316.641 243.862,316.768 244.097,316.297 253.723 C 315.414 271.766,303.975 290.911,299.183 282.368 C 296.032 276.751,295.853 263.439,298.740 249.462 C 300.095 242.903,297.368 240.194,288.829 239.618 C 279.603 238.995,278.379 241.109,279.122 256.379 C 281.271 300.552,299.845 309.211,323.716 277.168 C 330.429 268.157,334.210 258.290,334.268 249.629 C 334.323 241.334,333.490 240.277,319.034 230.314 C 304.467 220.275,301.414 214.568,303.887 201.996 C 306.350 189.475,312.198 183.978,319.714 187.118 C 326.427 189.923,325.609 201.785,318.003 211.938 C 314.067 217.192,318.464 221.208,328.700 221.707 C 339.511 222.235,342.755 217.346,342.037 201.604 C 341.428 188.256,337.006 179.567,329.014 176.021 C 325.407 174.420,311.321 174.203,307.628 175.691 M275.612 182.336 C 269.399 185.485,268.258 194.297,273.588 197.964 C 276.813 200.183,276.834 200.951,273.785 204.979 C 268.310 212.211,268.159 216.586,273.409 215.882 C 277.753 215.300,282.271 208.108,285.000 197.433 C 287.948 185.903,283.305 178.436,275.612 182.336 M246.020 192.182 C 235.784 192.875,222.507 194.919,220.438 196.120 C 217.620 197.757,217.866 199.425,221.594 203.944 C 225.066 208.153,225.617 208.373,229.367 207.050 C 237.218 204.281,238.029 204.930,243.279 218.189 C 256.198 250.813,263.600 283.409,262.617 303.344 C 262.155 312.696,261.663 313.299,251.326 317.147 C 245.377 319.362,244.889 320.041,242.395 329.572 C 240.194 337.984,250.438 333.686,274.717 316.010 C 289.854 304.990,292.296 301.757,288.321 297.995 C 283.958 293.865,281.645 293.824,277.902 297.810 C 276.395 299.416,275.067 300.730,274.953 300.730 C 274.838 300.730,274.726 296.066,274.704 290.365 C 274.611 266.331,266.820 230.958,257.197 210.877 C 252.969 202.054,252.883 202.237,260.805 203.221 C 267.420 204.043,268.029 203.693,268.029 199.075 C 268.029 191.179,266.752 190.779,246.020 192.182 M191.018 198.828 C 184.594 200.273,183.495 202.620,182.952 216.058 C 181.679 247.583,187.993 281.025,201.217 312.794 C 210.559 335.237,216.298 343.888,220.880 342.434 C 222.919 341.787,234.593 330.018,238.033 325.142 C 254.395 301.948,245.957 270.627,221.718 264.581 C 216.671 263.322,216.559 262.800,220.198 257.442 C 226.137 248.695,227.451 237.391,224.126 223.650 C 219.747 205.556,206.214 195.411,191.018 198.828 M164.284 202.690 C 152.945 204.076,151.638 209.603,157.463 231.533 C 168.980 274.889,171.151 289.676,168.276 305.211 C 166.594 314.297,157.963 322.660,153.005 320.006 C 150.120 318.463,149.756 316.179,150.073 301.606 C 150.774 269.367,150.483 264.706,146.853 250.036 C 144.722 241.427,142.787 235.788,139.057 227.325 C 130.994 209.028,126.238 205.942,114.810 211.590 C 105.854 216.016,105.856 216.072,115.494 228.887 C 133.446 252.755,137.021 266.110,133.472 296.058 C 130.311 322.739,136.390 337.750,151.241 339.936 C 161.186 341.400,168.750 336.478,174.510 324.794 C 176.835 320.077,177.734 320.625,181.009 328.759 C 187.519 344.929,190.845 347.865,198.075 343.826 C 204.403 340.290,204.399 337.435,198.050 324.185 C 188.543 304.340,186.816 299.426,183.327 282.286 C 178.707 259.591,177.061 245.088,176.453 221.744 C 175.909 200.835,176.166 201.238,164.284 202.690 M200.722 212.951 C 208.263 216.530,212.818 237.460,208.833 250.219 C 205.407 261.187,202.538 266.486,201.501 263.759 C 199.767 259.197,196.788 231.827,196.788 220.453 C 196.788 211.164,196.822 211.101,200.722 212.951 M81.752 221.330 C 74.907 222.135,61.111 227.011,54.161 231.082 C 50.879 233.004,50.803 233.107,50.803 235.620 C 50.803 251.009,73.942 289.977,95.074 310.175 C 106.855 321.435,109.230 322.506,114.021 318.712 C 131.405 304.943,134.069 273.805,120.330 244.964 C 111.619 226.676,99.487 219.243,81.752 221.330 M88.467 235.346 C 99.496 240.598,108.599 261.485,109.593 283.819 C 110.211 297.715,107.688 300.571,101.745 292.701 C 94.537 283.156,71.813 247.867,67.499 239.520 C 65.983 236.588,67.669 235.606,77.080 233.936 C 80.418 233.344,85.613 233.987,88.467 235.346 M363.786 244.989 C 363.475 245.806,363.067 247.090,362.878 247.842 C 362.483 249.417,362.648 249.435,354.476 246.941 C 347.589 244.840,342.735 244.866,344.862 246.993 C 345.680 247.812,362.178 252.847,364.041 252.847 C 365.791 252.847,368.417 245.726,367.205 244.266 C 366.159 243.006,364.398 243.378,363.786 244.989 M339.416 263.381 C 337.108 264.300,337.897 265.971,342.628 270.182 C 349.857 276.618,353.655 279.708,354.335 279.708 C 355.634 279.708,355.718 278.376,354.521 276.756 C 351.979 273.318,353.548 268.842,357.204 269.106 C 359.788 269.292,360.933 268.382,359.631 267.178 C 359.192 266.772,355.153 265.731,350.657 264.865 C 346.161 263.999,342.088 263.193,341.606 263.074 C 341.124 262.956,340.139 263.094,339.416 263.381 M348.225 267.501 C 351.442 268.289,351.960 269.037,350.810 271.231 L 350.000 272.778 346.679 269.986 C 343.317 267.159,342.517 265.948,344.380 266.504 C 344.942 266.671,346.672 267.120,348.225 267.501 M216.833 276.100 C 229.631 281.761,235.603 305.447,227.606 318.824 C 224.454 324.098,223.789 323.597,217.170 310.970 C 210.084 297.451,203.743 276.622,206.201 274.940 C 207.401 274.119,213.978 274.837,216.833 276.100 M73.816 306.817 C 71.514 307.819,64.429 314.425,63.286 316.635 C 62.060 319.006,63.049 321.634,66.294 324.625 C 69.601 327.673,70.303 327.618,74.015 324.024 C 77.476 320.671,77.764 319.454,75.513 317.684 C 73.641 316.212,72.041 316.358,72.301 317.979 C 72.753 320.792,72.618 321.269,71.111 322.194 C 69.242 323.342,66.441 321.854,66.094 319.530 C 65.778 317.411,74.058 309.484,76.560 309.508 C 79.255 309.535,81.311 311.317,81.066 313.414 C 80.800 315.687,82.951 315.699,83.749 313.429 C 85.185 309.346,78.393 304.824,73.816 306.817 M330.843 309.947 C 330.325 311.578,331.875 316.170,333.017 316.390 C 334.179 316.614,334.436 313.010,333.445 310.403 C 332.789 308.676,331.327 308.420,330.843 309.947 M304.425 312.127 C 303.035 313.578,301.898 315.327,301.898 316.015 C 301.898 317.215,314.917 331.095,316.043 331.095 C 316.916 331.095,321.732 325.572,321.742 324.560 C 321.762 322.583,320.376 322.714,318.518 324.863 C 316.235 327.504,315.855 327.515,313.938 325.002 C 312.101 322.595,312.070 322.239,313.577 320.876 C 314.219 320.295,314.745 319.362,314.745 318.804 C 314.745 317.166,313.223 317.052,311.785 318.582 C 310.076 320.402,309.063 320.370,307.039 318.431 C 304.946 316.425,304.979 315.528,307.231 313.205 C 308.364 312.035,308.926 310.970,308.709 310.403 C 308.138 308.916,307.103 309.332,304.425 312.127 M90.804 325.109 C 82.979 334.458,82.582 343.358,89.990 343.358 C 95.372 343.358,107.850 329.938,104.432 327.825 C 104.033 327.579,103.011 328.260,101.950 329.479 C 100.958 330.620,98.719 333.190,96.974 335.192 C 93.578 339.088,90.899 340.686,89.245 339.801 C 86.618 338.396,87.764 334.627,93.157 326.930 C 98.016 319.996,96.236 318.619,90.804 325.109 M285.756 327.891 C 285.569 328.376,285.663 329.099,285.964 329.496 C 286.264 329.894,288.962 333.569,291.957 337.664 C 298.145 346.121,297.709 345.899,301.938 342.743 C 306.745 339.157,305.670 335.640,300.760 338.889 C 297.828 340.829,298.374 341.185,293.431 334.121 C 289.981 329.192,287.815 327.007,286.378 327.007 C 286.222 327.007,285.942 327.405,285.756 327.891 M115.861 336.797 C 114.639 337.621,106.180 353.942,106.518 354.822 C 107.417 357.163,109.475 355.355,112.390 349.665 C 113.985 346.550,115.355 344.065,115.434 344.144 C 115.512 344.222,115.818 347.782,116.114 352.054 C 116.990 364.716,118.109 364.613,124.885 351.249 C 128.474 344.171,128.915 342.971,128.192 342.248 C 126.949 341.005,125.950 342.100,122.844 348.114 C 121.375 350.958,119.976 353.285,119.735 353.285 C 119.242 353.285,118.540 346.093,118.540 341.051 C 118.540 337.221,117.553 335.655,115.861 336.797 M268.613 338.977 C 268.613 340.789,277.795 356.492,278.959 356.670 C 280.344 356.882,286.715 353.315,286.715 352.327 C 286.715 350.331,284.978 349.750,282.616 350.955 C 279.394 352.598,279.568 352.723,275.903 346.131 C 271.654 338.488,268.613 335.505,268.613 338.977 M254.599 346.828 C 254.599 350.753,261.869 366.176,263.302 365.290 C 264.969 364.260,258.008 345.542,255.836 345.215 C 254.803 345.059,254.599 345.325,254.599 346.828 M138.728 347.574 C 137.284 348.382,137.641 349.186,139.854 350.111 C 142.436 351.190,142.428 351.339,139.276 360.584 C 137.170 366.763,136.828 368.315,137.438 368.927 C 138.958 370.451,139.937 368.890,142.695 360.552 L 145.496 352.082 147.486 352.455 C 149.541 352.840,150.903 351.545,149.704 350.346 C 148.676 349.318,139.673 347.045,138.728 347.574 M240.973 350.219 C 240.828 350.460,240.515 354.059,240.278 358.217 C 239.782 366.905,240.188 366.895,234.858 358.351 C 231.663 353.231,230.832 352.454,229.457 353.304 C 228.259 354.045,237.022 369.257,240.135 371.841 C 241.992 373.381,243.442 364.805,243.495 351.971 C 243.503 349.890,241.859 348.748,240.973 350.219 M161.028 354.550 C 159.969 355.361,156.336 372.625,156.909 374.119 C 157.388 375.368,164.346 376.486,165.779 375.544 C 167.103 374.673,166.066 373.139,164.154 373.139 C 161.330 373.139,160.580 372.598,160.625 370.594 C 160.702 367.160,161.321 366.423,164.133 366.423 C 167.255 366.423,168.220 364.675,165.440 364.054 C 161.550 363.186,161.617 363.246,162.021 360.965 C 162.785 356.644,162.710 356.715,166.306 356.906 C 168.963 357.047,169.633 356.898,169.790 356.132 C 170.139 354.431,162.892 353.123,161.028 354.550 M209.539 356.353 C 204.197 360.854,205.397 366.681,211.913 367.887 C 215.859 368.617,216.750 369.339,216.526 371.629 C 216.256 374.393,211.872 374.667,210.357 372.014 C 208.667 369.054,206.715 368.988,206.715 371.891 C 206.715 374.482,209.974 377.226,213.049 377.226 C 222.042 377.226,223.296 366.590,214.459 365.265 C 210.263 364.636,209.442 364.031,209.872 361.882 C 210.660 357.939,213.413 356.881,216.125 359.480 C 218.893 362.132,220.275 359.200,217.545 356.470 C 215.616 354.541,211.756 354.485,209.539 356.353 M183.358 356.700 C 181.079 357.371,180.519 359.411,180.083 368.625 C 179.715 376.410,179.770 377.231,180.681 377.580 C 182.058 378.109,182.759 377.244,183.137 374.548 C 183.642 370.946,183.716 370.844,185.473 371.314 C 186.732 371.650,187.277 372.350,188.026 374.590 C 189.648 379.437,192.917 379.912,191.583 375.107 C 190.639 371.707,190.804 370.331,192.409 368.227 C 196.818 362.446,190.626 354.561,183.358 356.700 M188.294 359.698 C 192.904 361.450,190.273 369.193,185.401 368.209 C 184.759 368.079,184.036 367.952,183.796 367.928 C 183.254 367.873,183.209 360.051,183.747 359.513 C 184.314 358.946,186.557 359.037,188.294 359.698 '
            stroke='none'
            fillRule='evenodd'></path>
        </g>
      </svg>
    </a>
  </Link>
);

export default Navbar;