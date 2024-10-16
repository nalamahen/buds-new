import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar';
import Hero2 from '../../components/hero2';
import Service from '../../components/Service';
import AboutS2 from '../../components/AboutS2';
import EventSection from '../../components/EventSection';
import Footer from '../../components/footer';
import Scrollbar from '../../components/scrollbar';
import Logo from '../../images/logo.png';
import FunFact from '../../components/FunFact';
import ProjectSection from '../../components/ProjectSection';

const HomePage = () => {
  return (
    <Fragment>
      <Navbar Logo={Logo} hclass={'wpo-header-style-2'} />
      <Hero2 />
      <Service Fclass={'wpo-features-section-s2'} />
      <AboutS2 />
      <FunFact />
      <ProjectSection />
      <EventSection />
      <Scrollbar />
      <Footer />
    </Fragment>
  );
};
export default HomePage;
