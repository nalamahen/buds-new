import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar';
import Hero from '../../components/hero';
import Service from '../../components/Service';
import About from '../../components/about';
import ProjectSection from '../../components/ProjectSection';
import TeamSection from '../../components/TeamSection';
import Testimonial from '../../components/Testimonial';
import CtaSection from '../../components/ctaSection';
import EventSection from '../../components/EventSection';
import BlogSection from '../../components/BlogSection';
import Footer from '../../components/footer';
import Scrollbar from '../../components/scrollbar';
import Logo from '../../images/logo5.png';
import vimg from '../../images/volunteer.png';

const HomePage = () => {
  return (
    <Fragment>
      <Navbar Logo={Logo} />
      <Hero />
      <Service Fclass={'wpo-features-section-s2'} vclassClass={'v1'} />
      <About />
      <ProjectSection />
      <TeamSection />
      <Testimonial />
      <CtaSection vImg={vimg} cTitle={'Lets Change The World With Humanity'} />
      <EventSection />
      <BlogSection />
      <Scrollbar />
      <Footer />
    </Fragment>
  );
};
export default HomePage;
