/* Import libraries */
import { NextPage } from 'next';

/* Import layout */
import Layout from '../layouts/default';

/* Export component */
const Home: NextPage = () => {
  return (
    <Layout>
      <h1>Hello Next.js</h1>
    </Layout>
  );
};

export default Home;