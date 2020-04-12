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
      <main>
        <div id="cursor" className="cursor cursor--inner"></div>
        <div id="cursor-outer" className="cursor cursor--outer"></div>
        {/* <canvas className="cursor cursor--canvas"></canvas> */}
      </main>
    </Layout>
  );
};

export default Home;