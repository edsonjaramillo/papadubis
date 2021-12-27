import { GetStaticPaths, GetStaticProps } from 'next';
import {
  formatPrice,
  graphCMSClient,
  LogoBlur,
  ProductProps,
  productQuery,
  slugsQuery,
} from '@/lib/graphcms';
import { HeadOpenGraph, Section, SliderProducts } from '@/components/index';
import { SwiperOptions } from 'swiper';
import Image from 'next/image';

interface ProductPageProps {
  product: ProductProps;
  // product: any;
}

const recommendationBreakpoints: SwiperOptions['breakpoints'] = {
  '640': {
    slidesPerView: 3,
  },
  '768': {
    slidesPerView: 4,
  },
  '1024': {
    slidesPerView: 5,
  },
};

const ProductPage = ({ product }: ProductPageProps) => {
  return (
    <>
      {/* <pre>{JSON.stringify(product, null, 2)}</pre> */}
      <HeadOpenGraph
        title={product.title}
        description={product.description}
        image={product.image.url}
        alt={product.imageDescription}
      />
      <div className='productgrid responsive-width-product'>
        <div className='product__image'>
          <Image
            src={product.image.url}
            alt={product.imageDescription}
            placeholder='blur'
            blurDataURL={LogoBlur}
            width='128'
            height='128'
            layout='responsive'
          />
        </div>
        <div className='product'>
          <h1 className='product__title'>{product.title}</h1>
          <span className='product__price'>{formatPrice(product.price)}</span>
          <p className='product__description'>{product.description}</p>
        </div>
      </div>
      <Section width='responsive-width-product' header='Recommendations'>
        <SliderProducts
          productList={product.recommendation}
          breakpoint={recommendationBreakpoints}
        />
      </Section>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { products: slugs } = await graphCMSClient.request(slugsQuery);

  const paths = slugs.map((obj: any) => ({
    params: { slug: obj.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const variables = {
    slug: params.slug,
  };

  const { product } = await graphCMSClient.request(productQuery, variables);

  return {
    props: { product },
  };
};

export default ProductPage;
