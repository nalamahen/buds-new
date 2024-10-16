import React from 'react';
import { Link } from 'react-router-dom';
import abimg from '../../images/about-home.jpg';
import shape from '../../images/ab-shape-2.png';

const About = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section className="wpo-about-section section-padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 col-12">
            <div className="wpo-about-wrap">
              <div className="wpo-about-img">
                <img src={abimg} alt="" />
                <div className="wpo-ab-shape-1">
                  <div className="s-s1"></div>
                  <div className="s-s2"></div>
                </div>
                <div className="wpo-ab-shape-2">
                  <img src={shape} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-12">
            <div className="wpo-about-text">
              <span>About Us</span>
              <h2>We Can Educate More Poor Children With Your Helping Hand.</h2>
              <p>
                BUDS is a non-governmental, non-religious and non-profitable
                organisation committed to actively enhance the dignity and
                quality of life of individuals, families and communities by
                eliminating barriers to opportunity and helping people in need
                reach their fullest potential through the power of work and
                education.{' '}
              </p>
              <ul>
                <li>
                  Build on our current high standards of "care for life"
                  programs, ensuring respect for the individuals, families, and
                  communities we serve.
                </li>
                <li>
                  Support and honor the independent lifestyle of those we serve,
                  maintaining a strong focus on their unique needs and dignity.
                </li>
                <li>
                  Strive for continuous improvement and positive change,
                  enhancing the quality and impact of our services in the
                  future.
                </li>
              </ul>
              <Link onClick={ClickHandler} className="theme-btn-s2" to="/about">
                More About
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
