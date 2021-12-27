import { Terms, HeadOpenGraph } from '@/components/index';

const TermsPage = () => {
  return (
    <>
      <HeadOpenGraph
        title='Terms of Use'
        description='fbjhsdbfjbsdgfdgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdf'
        image='https://via.placeholder.com/1200x630'
        alt='Alt'
        robots='noindex, nofollow'
      />
      <Terms
        name={`Papa Dubis`}
        email='contact@papadubis.com'
        phone='(256) 894-7878'
        website='https://papadubis.vercel.app'
      />
    </>
  );
};

export default TermsPage;
