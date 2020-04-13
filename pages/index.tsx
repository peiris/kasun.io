import React, { Component } from 'react';

/* Import libraries */
import { NextPage } from 'next';

/* Import layout */
import Layout from '../layouts/default';

/* Import components */
import SectionAbout from './../components/section-about/section-about';

interface Props {
  userAgent?: string;
}

/* Export component */
// const Home: NextPage<Props> = () => {
//   return (
// <Layout>
//   <SectionAbout />
//   <main>
//     <div id="cursor" className="cursor cursor--inner"></div>
//     <div id="cursor-outer" className="cursor cursor--outer"></div>
//     {/* <canvas className="cursor cursor--canvas"></canvas> */}
//   </main>
// </Layout>
//   );
// };

// export async function getServerSideProps() {
//   await new Promise(resolve => {
//     // setTimeout(resolve, 500);
//   })
//   return { props: {} }
// }

export default class Home extends Component {
  // componentDidUpdate() {
  //   console.log('Page loaded....');
  // }

  render() {
    // let headingEl = document.getElementsByClassName('viewport-heading');
    // headingEl[0].classList.add('visible');

    return (
      <Layout>
        <SectionAbout />
      </Layout>
    )
  }
}


// Home.getInitialProps = async () => {
//   console.log('Loaded...');
//   // const userAgent = 'true';
//   return {}
// }

// export default Home;