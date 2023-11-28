import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';

import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from '../sections/banner';
import Services from '../sections/services';
import About from '../sections/about';
import Contact from '../sections/contact';
import Blog from '../sections/projects';


export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
        <Layout>
          <SEO title="NextJS Landing Page" />
          <Banner />
          <Services />
          <About />
          <Blog />    
          {/* <Contact />    */}
        </Layout>
    </ThemeProvider>
  );
}
