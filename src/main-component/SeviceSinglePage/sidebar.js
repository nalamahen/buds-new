import React from 'react';
import Services from '../../api/service';
import { Link } from 'react-router-dom';
import ins1 from '../../images/instragram/1.jpg';
import ins2 from '../../images/instragram/2.jpg';
import ins3 from '../../images/instragram/3.jpg';
import ins4 from '../../images/instragram/4.jpg';
import ins5 from '../../images/instragram/5.jpg';
import ins6 from '../../images/instragram/6.jpg';

import Projects from '../../api/projects';

const ServiceSidebar = ({ id }) => {
  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const selectedService = Services.find((item) => item.id === id);

  return (
    <div className="col-lg-4 col-md-8">
      <div className="wpo-single-sidebar">
        <div className="wpo-service-widget widget">
          <h2>What We Do</h2>
          <ul>
            {Services.slice(0, 4).map((service, Sitem) => (
              <li key={Sitem}>
                <Link
                  onClick={ClickHandler}
                  to={`/service-single/${service.id}`}
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="wpo-contact-widget widget">
          <h2>{selectedService.helpTitle}</h2>
          <p>
            {selectedService.helpDescription
              ? selectedService.helpDescription
              : ''}
          </p>
          <Link to="/contact">Contact Us</Link>
        </div>

        <div className="widget wpo-instagram-widget">
          <div className="widget-title">
            <h3>Projects</h3>
          </div>
          <ul className="d-flex">
            {Projects.slice(0, 6).map((project, pitem) => (
              <li className="grid" key={pitem}>
                <div className="img-holder">
                  <Link
                    onClick={ClickHandler}
                    to={`/project-single/${project.id}`}
                  >
                    <img src={project.projectImg} alt="" />
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServiceSidebar;