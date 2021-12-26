// import { HeadOpenGraph } from "../components/';
import { HeadOpenGraph, CTA, Section } from '@/components/index';

const HomePage = () => {
  return (
    <>
      <HeadOpenGraph title='YOOOO' description='desc' image='ffdsf' alt='fdsf' />
      <CTA />
      <Section
        header='Featured Items'
        textcolor='section--text--secondary-100'
        color='section--bg--grayscale-200'>
        <p>Hello</p>
      </Section>
    </>
  );
};

export default HomePage;
