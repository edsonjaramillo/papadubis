import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { formatPrice, LogoBlur, SliderProductProps } from '@/lib/graphcms';
import SwiperCore, { FreeMode, Navigation, SwiperOptions } from 'swiper';
SwiperCore.use([Navigation, FreeMode]);

interface SliderComponentProps {
  productList: SliderProductProps[];
  breakpoint?: SwiperOptions['breakpoints'];
}

const defaultBreakpoints = {
  '640': {
    slidesPerView: 4,
  },
  '768': {
    slidesPerView: 5,
  },
  '1024': {
    slidesPerView: 6,
  },
};

const SliderProducts = ({
  productList,
  breakpoint = defaultBreakpoints,
}: SliderComponentProps) => {
  return (
    <>
      <Swiper
        className='sliderproductgrid'
        slidesPerView={3}
        spaceBetween={20}
        freeMode={true}
        navigation={true}
        breakpoints={breakpoint}>
        {productList.map(({ id, title, slug, image, imageDescription, price }) => (
          <SwiperSlide key={id}>
            <Link href={`/menu/${slug}`}>
              <a title={title}>
                <article className='sliderproduct'>
                  <div className='sliderproduct__image'>
                    <Image
                      src={image.url}
                      alt={imageDescription}
                      width={128}
                      height={128}
                      placeholder='blur'
                      blurDataURL={LogoBlur}
                      layout='responsive'
                    />
                  </div>
                  <span className='sliderproduct__title'>{title}</span>
                  <span className='sliderproduct__price'>{formatPrice(price)}</span>
                </article>
              </a>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SliderProducts;
