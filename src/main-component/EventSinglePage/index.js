import React, { Fragment } from 'react';
import Navbar2 from '../../components/Navbar2';
import PageTitle from '../../components/pagetitle';
import { useParams } from 'react-router-dom';
import Scrollbar from '../../components/scrollbar';
import Events from '../../api/event';
import EventTabs from './alltab';
import EventSidebar from './sidebar';
import Logo from '../../images/logo5.png';
import Footer from '../../components/footer';

const EventSinglePage = (props) => {
  const { id } = useParams();

  const eventDetails = Events.find((item) => item.id === id);

  return (
    <Fragment>
      <Navbar2 Logo={Logo} />
      <PageTitle pageTitle={eventDetails.eTitle} pagesub={'Event Single'} />
      <div className="wpo-event-details-area section-padding">
        <div className="container">
          <div className="row">
            <div className="col col-lg-8">
              <div className="wpo-event-item">
                <div className="wpo-event-img">
                  <img src={eventDetails.eImg} alt="" />
                </div>
                <div className="wpo-event-details-text">
                  <h2>{eventDetails.eTitle}</h2>
                  <p>{eventDetails.fullDec || eventDetails.dec}</p>
                </div>
                {/* <EventTabs /> */}
              </div>
            </div>
            <EventSidebar />
          </div>
        </div>
      </div>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default EventSinglePage;
