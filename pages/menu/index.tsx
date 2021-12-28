import { graphCMSClient, categoriesQuery, CategorySliderProps } from '@/lib/graphcms';
import { GetStaticProps } from 'next';
import { SliderProducts, Section, HeadOpenGraph, SpacerPadding } from '@/components/index';

interface MenuPageProps {
  categories: CategorySliderProps[];
}

const MenuPage = ({ categories }: MenuPageProps) => {
  return (
    <>
      <HeadOpenGraph
        title='Menu'
        description='Papa Dubis is a cajun restaurant in Guntersville, Alabama'
        image='https://media.graphcms.com/QLNIqHd3QUawDHqPKyp6'
        alt='cover banner of Papa Dubis logo'
      />
      <SpacerPadding>
        {categories.map(({ id, title, products, slug }, i) => (
          <Section
            key={id}
            id={slug}
            header={title}
            textcolor='section--text--secondary-200'
            color={i % 2 == 0 ? 'section--bg--grayscale-100' : 'section--bg--grayscale-200'}>
            <SliderProducts productList={products} />
          </Section>
        ))}
      </SpacerPadding>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { categories } = await graphCMSClient.request(categoriesQuery);

  return {
    props: { categories },
  };
};

export default MenuPage;
