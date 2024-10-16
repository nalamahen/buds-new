import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo5.png';
import Projects from '../../api/projects';

const Footer = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <footer className="wpo-site-footer">
      <div className="wpo-upper-footer">
        <div className="container">
          <div className="row">
            <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="widget about-widget">
                <div className="logo widget-title">
                  <img src={Logo} alt="blog" />
                </div>
                <p>Batticaloa Underprivileged Development Society (BUDS)</p>
                <ul>
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.facebook.com/BUDS-475837672556803"
                    >
                      <i className="ti-facebook"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col col-lg-2 col-md-6 col-sm-12 col-12">
              <div className="widget link-widget">
                <div className="widget-title">
                  <h3>Links </h3>
                </div>
                <ul>
                  <li>
                    <Link onClick={ClickHandler} to="/about">
                      About Us
                    </Link>
                  </li>
                  {/* <li>
                    <Link onClick={ClickHandler} to="/blog">
                      Latest News
                    </Link>
                  </li> */}
                  <li>
                    <Link onClick={ClickHandler} to="/contact">
                      Contact us
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to="/event">
                      Events
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="widget wpo-service-link-widget">
                <div className="widget-title">
                  <h3>Contact </h3>
                </div>
                <div className="contact-ft">
                  <p>
                    Would you have any enquiries.Please feel free to contuct us
                  </p>
                  <ul>
                    <li>
                      <i className="fi flaticon-mail"></i>secretary@budsuk.org
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="widget instagram">
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
        </div>
      </div>
      <div className="wpo-lower-footer">
        <div className="container">
          <div className="row">
            <div className="col col-xs-12">
              <p className="copyright">
                {' '}
                &copy; 2024 BUDS. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
