import React from 'react';
import { Link } from 'react-router-dom';
import Projects from '../../api/projects';

import Events from '../../api/event';

const EventSidebar = (props) => {
  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <div className="col col-lg-4 col-12">
      <div className="blog-sidebar">
        <div className="widget recent-post-widget">
          <h3>Events</h3>
          <div className="posts">
            {Events.slice(0, 3).map((event, eitem) => (
              <div className="post" key={eitem}>
                <div className="img-holder">
                  <img src={event.eImg} alt="" />
                </div>
                <div className="details">
                  <h4>
                    <Link
                      onClick={ClickHandler}
                      to={`/event-single/${event.id}`}
                    >
                      {event.eTitle}
                    </Link>
                  </h4>
                  <span className="date">{event.date}</span>
                </div>
              </div>
            ))}
          </div>
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
        <div className="wpo-contact-widget widget">
          <h2>How Can You Help!</h2>
          <p>
            There are many ways you can help BUDS with your money. You can
            donate at our bank account or donate by phone or post, sponsor a
            child, leave a legacy and much more.
          </p>
          <Link to="/contact">Contact Us</Link>
        </div>
      </div>
    </div>
  );
};

export default EventSidebar;
