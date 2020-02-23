/* Import libraries */
import { NextPage } from 'next';

/* Import layout */
import Layout from '../layouts/default';

/* Import components */
import SectionAbout from './../components/section-about/section-about';

/* Export component */
const Home: NextPage = () => {
  return (
    <Layout>
      <SectionAbout />
    </Layout>
  );
};

export default Home;