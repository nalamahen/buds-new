import React from 'react';
import { Link } from 'react-router-dom';
import abimg from '../../images/orphanage.png';

const AboutS2 = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section className="wpo-about-section-s2 section-padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 col-12">
            <div className="wpo-about-wrap">
              <div className="wpo-about-img">
                <img src={abimg} alt="" />

                <div className="round-ball-1"></div>
                <div className="round-ball-2"></div>
                <div className="round-ball-3"></div>
                <div className="round-ball-4"></div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-12">
            <div className="wpo-about-text">
              <span>About Us</span>
              <h2>We Can Save More Lifes With Your Helping Hand.</h2>
              <p>
                BUDS is a non-governmental, non-religious and non-profitable
                organisation committed to actively enhance the dignity and
                quality of life of individuals, families and communities by
                eliminating barriers to opportunity and helping people in need
                reach their fullest potential through the power of work and
                education.
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
              {/* <Link onClick={ClickHandler} className="theme-btn-s2" to="/about">
                More About
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutS2;
