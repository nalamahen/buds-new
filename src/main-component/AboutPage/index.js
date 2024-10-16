import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar';
import PageTitle from '../../components/pagetitle';
import VideoSec from '../../components/VideoSec';
import Footer from '../../components/footer';
import Scrollbar from '../../components/scrollbar';
import Logo from '../../images/logo5.png';
import Service from '../../components/Service';
import AboutS2 from '../../components/AboutS2';
import TeamSection from '../../components/TeamSection';

const AboutPage = () => {
  return (
    <Fragment>
      <Navbar Logo={Logo} />
      <PageTitle pageTitle={'About Us'} pagesub={'About'} />
      <VideoSec />
      <Service Fclass={'wpo-features-section-s2'} />
      <AboutS2 />
      <TeamSection />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default AboutPage;
