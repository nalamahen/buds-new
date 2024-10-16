import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Homepage from '../HomePage';
import Homepage2 from '../HomePage2';
import Homepage3 from '../HomePage3';
import AboutPage from '../AboutPage';
import ServicePage from '../ServicePage';
import SeviceSinglePage from '../SeviceSinglePage';
import TeamSinglePage from '../TeamSinglePage';
import EventPage from '../EventPage';
import EventSinglePage from '../EventSinglePage';
import ProjectPage from '../ProjectPage';
import ProjectSinglePage from '../ProjectSinglePage';
import TestimonialPage from '../TestimonialPage';
import ContactPage from '../ContactPage';
import ErrorPage from '../ErrorPage';
import DonatePage from '../DonatePage';
import VolunteerPage from '../VolunteerPage';

const AllRoute = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="home" element={<Homepage />} />
          <Route path="home2" element={<Homepage2 />} />
          <Route path="home3" element={<Homepage3 />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="service" element={<ServicePage />} />
          <Route path="service-single/:id" element={<SeviceSinglePage />} />
          <Route path="team-single/:id" element={<TeamSinglePage />} />
          <Route path="event" element={<EventPage />} />
          <Route path="event-single/:id" element={<EventSinglePage />} />
          <Route path="project" element={<ProjectPage />} />
          <Route path="project-single/:id" element={<ProjectSinglePage />} />
          <Route path="testimonial" element={<TestimonialPage />} />
          <Route path="donate" element={<DonatePage />} />
          <Route path="volunteer" element={<VolunteerPage />} />
          <Route path="404" element={<ErrorPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AllRoute;
