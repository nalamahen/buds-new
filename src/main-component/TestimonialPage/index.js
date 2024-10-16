import React, { Fragment } from 'react';
import Navbar2 from '../../components/Navbar2';
import PageTitle from '../../components/pagetitle';
import Footer from '../../components/footer';
import Scrollbar from '../../components/scrollbar';
import Logo from '../../images/logo5.png';

const TestimonialPage = () => {
  return (
    <Fragment>
      <Navbar2 Logo={Logo} />
      <PageTitle pageTitle={'Testimonial'} pagesub={'Testimonial'} />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default TestimonialPage;
