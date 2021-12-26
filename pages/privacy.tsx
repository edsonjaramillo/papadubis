import { HeadOpenGraph, PrivacyPolicy } from '@/components/index';

const PrivacyPage = () => {
  return (
    <>
      <HeadOpenGraph
        title='Privacy Policy'
        description='fbjhsdbfjbsdgfdgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdf'
        image='https://via.placeholder.com/1200x630'
        alt='Alt'
        robots='noindex, nofollow'
      />
      <PrivacyPolicy
        name={`Papa Dubis`}
        email='contact@papadubis.com'
        phone='(256) 894-7878'
        website='https://papadubis.vercel.app/'
      />
    </>
  );
};

export default PrivacyPage;
