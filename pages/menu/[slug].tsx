import { GetStaticPaths, GetStaticProps } from 'next';
import {
  formatPrice,
  graphCMSClient,
  ProductProps,
  productQuery,
  slugsQuery,
} from '@/lib/graphcms';
import Image from 'next/image';
import { HeadOpenGraph, Section, SliderProducts } from '@/components/index';
import { SwiperOptions } from 'swiper';

interface ProductPageProps {
  product: ProductProps;
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

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const variables = {
    slug: params.slug,
  };

  const { product } = await graphCMSClient.request(productQuery, variables);

  return {
    props: { product },
  };
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

export default ProductPage;
