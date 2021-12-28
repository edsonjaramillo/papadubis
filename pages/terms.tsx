import { Terms, HeadOpenGraph } from '@/components/index';

const TermsPage = () => {
  return (
    <>
      <HeadOpenGraph
        title='Terms and Conditions'
        description='Papa Dubis is a cajun restaurant in Guntersville, Alabama'
        image='https://media.graphcms.com/QLNIqHd3QUawDHqPKyp6'
        alt='cover banner of Papa Dubis logo'
        robots='noindex, nofollow'
      />
      <Terms
        name={`Papa Dubis`}
        email='contact@buisness.com'
        phone='(256) 123-4567'
        website='https://papadubis.vercel.app'
      />
    </>
  );
};

export default TermsPage;
