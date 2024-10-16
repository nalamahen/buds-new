import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar';
import PageTitle from '../../components/pagetitle';
import Scrollbar from '../../components/scrollbar';
import { useParams } from 'react-router-dom';
import Teams from '../../api/team';
import Footer from '../../components/footer';
import Logo from '../../images/logo5.png';

const TeamSinglePage = (props) => {
  const { id } = useParams();

  const TeamSingle = Teams.find((item) => item.id === id);

  return (
    <Fragment>
      <Navbar Logo={Logo} />
      <PageTitle pageTitle={TeamSingle.name} pagesub={TeamSingle.title} />
      <div className="attorney-pg-area section-padding">
        <div className="container">
          <div className="attorney-info-wrap">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="attorney-info-img">
                  <img src={TeamSingle.tImg} alt="" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="attorney-info-text">
                  <h2>{TeamSingle.name}</h2>
                  <ul>
                    <li>
                      Position: <span> {TeamSingle.title}</span>
                    </li>
                    <li>
                      Phone:<span>+44 00000000000</span>
                    </li>
                    <li>
                      Email:<span>youremail@gmail.com</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="exprience-area">
            <div className="row">
              <div className="col-lg-12">
                <div className="exprience-wrap">
                  <h2>Personal Experience</h2>
                  <p>
                    The purpose of lorem ipsum is to create a natural looking
                    block oftext (sentence, paragraph, page, etc.) that doesn't
                    distract from thelayout. A practice not without controversy,
                    laying out pages withmeaningless filler text can be very
                    useful when the focus is meantto be on design, not
                    content.There are many variations of passages of Lorem Ipsum
                    available.
                  </p>
                  <p>
                    But the majority have suffered alteration in some form, by
                    injected humour, or randomised words which don’t look even
                    slightly believable. If you are going to use a passage of
                    Lorem Ipsum, you need to be sure there isn’t anything
                    embarrassing hidden in the middle of text generators on the
                    Internet tend to repeat.
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default TeamSinglePage;
