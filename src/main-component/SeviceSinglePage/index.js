import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar';
import PageTitle from '../../components/pagetitle';
import Scrollbar from '../../components/scrollbar';
import { useParams } from 'react-router-dom';
import Services from '../../api/service';
import { Link } from 'react-router-dom';
import Benefits from './benefits';
import ServiceSidebar from './sidebar';
import Logo from '../../images/logo5.png';
import Footer from '../../components/footer';

const SeviceSinglePage = (props) => {
  const { id } = useParams();

  const serviceDetails = Services.find((item) => item.id === id);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <Fragment>
      <Navbar Logo={Logo} />
      <PageTitle pageTitle={serviceDetails.title} pagesub={'Project'} />
      <section className="wpo-service-single-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="wpo-service-single-wrap">
                <div className="wpo-service-single-img">
                  <img src={serviceDetails.simg1} alt="" />
                </div>
                <div className="wpo-service-single-content">
                  <div className="wpo-service-single-content-des">
                    <h2>{serviceDetails.title}</h2>
                    <p>{serviceDetails.description}</p>
                    <p>{serviceDetails.description2}</p>
                    <div className="wpo-service-single-sub-img">
                      <ul>
                        <li>
                          <img src={serviceDetails.simg2} alt="" />
                        </li>
                        <li>
                          <img src={serviceDetails.simg3} alt="" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="wpo-solutions-section">
                  <h2>What we do</h2>
                  <div className="row">
                    {Services.slice(0, 3).map((service, Sitem) => (
                      <div className="col-lg-4 col-md-6 col-12" key={Sitem}>
                        <div className="wpo-solutions-item">
                          <div className="wpo-solutions-icon">
                            <div className="icon">
                              <i className={`fi ${service.fIcon1}`}></i>
                            </div>
                          </div>
                          <div className="wpo-solutions-text">
                            <h2>
                              <Link
                                onClick={ClickHandler}
                                to={`/service-single/${service.id}`}
                              >
                                {service.title}
                              </Link>
                            </h2>
                            <p>
                              {service.solutionDescription
                                ? service.solutionDescription
                                : 'No description available'}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <Benefits />
              </div>
            </div>
            <ServiceSidebar id={id} />
          </div>
        </div>
      </section>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default SeviceSinglePage;
