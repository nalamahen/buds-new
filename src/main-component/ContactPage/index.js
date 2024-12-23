import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar';
import PageTitle from '../../components/pagetitle';
import Contactpage from '../../components/Contactpage';
import Footer from '../../components/footer';
import Scrollbar from '../../components/scrollbar';
import Logo from '../../images/logo5.png';

const ContactPage = () => {
  return (
    <Fragment>
      <Navbar Logo={Logo} />
      <PageTitle pageTitle={'Contact Us'} pagesub={'Contact'} />
      <Contactpage />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default ContactPage;
