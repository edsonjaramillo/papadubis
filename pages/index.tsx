// import { HeadOpenGraph } from "../components/';
import { HeadOpenGraph, CTA, Section, SliderProducts } from '@/components/index';
import { GetStaticProps } from 'next';
import {
  graphCMSClient,
  featuredProductsQuery,
  SliderProductProps,
  getPlaceholder,
} from '@/lib/graphcms';

interface HomeProps {
  featured: SliderProductProps[];
}

const HomePage = ({ featured }: HomeProps) => {
  return (
    <>
      <HeadOpenGraph title='Home' description='desc' image='ffdsf' alt='fdsf' />
      <CTA />
      <Section
        header='Featured Items'
        textcolor='section--text--secondary-200'
        color='section--bg--grayscale-200'>
        <SliderProducts productList={featured} />
      </Section>
      {/* <pre>{JSON.stringify(featured, null, 2)}</pre> */}
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  let { products: featured } = await graphCMSClient.request(featuredProductsQuery);
  featured = await getPlaceholder(featured);

  return {
    props: { featured },
  };
};

export default HomePage;
