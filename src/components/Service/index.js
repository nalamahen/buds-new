import React from 'react';
import { Link } from 'react-router-dom';
import Services from '../../api/service';

const Service = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section
      className={`${props.Fclass} section-padding  ${props.vclassClass}`}
    >
      <div className="container">
        <div className="row">
          <div className="wpo-section-title">
            <span>What We Do</span>
          </div>

          {Services.slice(0, 4).map((service, sitem) => (
            <div className="col col-xl-3 col-lg-6 col-sm-6 col-12" key={sitem}>
              <div className="wpo-features-item">
                <Link
                  onClick={ClickHandler}
                  to={`/service-single/${service.id}`}
                >
                  <div className="wpo-features-icon">
                    <div className="icon">
                      <i className={`fi  ${service.fIcon1}`}></i>
                    </div>
                  </div>
                </Link>
                <div className="wpo-features-text">
                  <h2>
                    <Link
                      onClick={ClickHandler}
                      to={`/service-single/${service.id}`}
                    >
                      {service.title}
                    </Link>
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
