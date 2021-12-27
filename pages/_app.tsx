import '@/styles/main.css';
import type { AppProps } from 'next/app';
import { Navbar, Footer } from '@/components/index';
import { ToastContainer } from 'react-toastify';
import smoothscroll from 'smoothscroll-polyfill';
import 'react-toastify/dist/ReactToastify.css';
import 'swiper/css';
import 'swiper/css/navigation';

const MyApp = ({ Component, pageProps }: AppProps) => {
  smoothscroll.polyfill();

  return (
    <>
      <Navbar />
      <main id='main-content'>
        <Component {...pageProps} />
      </main>
      <Footer />
      <ToastContainer theme='colored' closeOnClick pauseOnHover draggable={false} />
    </>
  );
};

export default MyApp;
