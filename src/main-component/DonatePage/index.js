import React, { Fragment } from 'react';
import Navbar2 from '../../components/Navbar2';
import PageTitle from '../../components/pagetitle';
import Footer from '../../components/footer';
import Scrollbar from '../../components/scrollbar';
import Logo from '../../images/logo5.png';
import { Link } from 'react-router-dom';

const DonatePage = () => {
  return (
    <Fragment>
      <Navbar2 Logo={Logo} />
      <PageTitle pageTitle={'Donate'} pagesub={'Donate'} />
      <div className="wpo-donation-page-area section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="wpo-donate-header">
                <h2>How Can You Help!</h2>
                <p>
                  There are many ways you can help BUDS with your money. You can
                  donate at our bank account or donate by phone or post, sponsor
                  a child, leave a legacy and much more.
                </p>
                <p>
                  <b>Why Donate To Buds:</b>
                  <br /> We work with local families, communities and
                  organisations in the Eastern Province of Sri Lanka and
                  surroundings to protect , promote and rehabilitate all
                  children. Our global reach, expertise, access, innovation,
                  efficiency are the values that guide our work and make BUDS
                  unique.
                </p>
                <p>
                  Your money really does make a difference to children's lives.
                  BUDS is funded entirely by voluntary contributions.
                </p>
                <div className="btns">
                  <Link to="/contact" className="btn theme-btn-s2">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default DonatePage;
