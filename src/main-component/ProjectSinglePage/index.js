import React, { Fragment } from 'react';
import Navbar2 from '../../components/Navbar2';
import PageTitle from '../../components/pagetitle';
import Scrollbar from '../../components/scrollbar';
import { useParams } from 'react-router-dom';
import Projects from '../../api/projects';
import Footer from '../../components/footer';
import Logo from '../../images/logo5.png';
import { Link } from 'react-router-dom';

const ProjectSinglePage = (props) => {
  const { id } = useParams();

  const ProjectSingle = Projects.find((item) => item.id === id);
  const totalProjects = Projects.length;
  const nextProjectId = parseInt(id) + 1;
  const prevProjectId = parseInt(id) - 1;
  const nextProject = Projects.find(
    (item) => item.id === nextProjectId.toString()
  );
  const previousProject = Projects.find(
    (item) => item.id === prevProjectId.toString()
  );
  const nextProjectPath = `/project-single/${nextProjectId}`;
  const prevProjectPath = `/project-single/${prevProjectId}`;

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <Fragment>
      <Navbar2 Logo={Logo} />
      <PageTitle
        pageTitle={ProjectSingle.title}
        pagesub={ProjectSingle.title}
      />
      <section className="wpo-project-single-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="wpo-project-single-wrap">
                <div className="wpo-project-single-content">
                  <img src={ProjectSingle.projectImg} alt="" />
                  <div className="wpo-project-single-content-des">
                    <div className="wpo-project-single-content-des-wrap">
                      <div className="wpo-project-single-content-des-left">
                        <h2>{ProjectSingle.title}</h2>
                        <p>{ProjectSingle.dec}</p>
                      </div>
                      <div className="wpo-project-single-content-des-right">
                        <ul>
                          <li>
                            Client :<span>Client Name</span>
                          </li>
                          <li>
                            Location :<span>Periay Nieelavani</span>
                          </li>
                          <li>
                            Date :<span>20 Oct 2024</span>
                          </li>
                          <li>
                            Duration : <span>One Year</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="wpo-project-single-sub-img">
                      <ul>
                        <li>
                          <img src={ProjectSingle.prImg1} alt="" />
                        </li>
                        <li>
                          <img src={ProjectSingle.prImg2} alt="" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="wpo-solutions-section">
                  <h2>Best Benefits of Project</h2>

                  <p>
                    I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain was born and I will
                    give you a complete account of the system, and expound the
                    actual teachings of the great explorer of the truth, the
                    master-builder of human happiness. No one rejects, dislikes,
                    or avoids pleasure itself, because it is pleasure, but
                    because those who do not know how to pursue pleasure
                    rationally encounter consequences that are extremely
                    painful. Nor again is there anyone who loves or pursues or
                    desires to obtain pain of itself, because it is pain, but
                    because occasionally circumstances occur in which toil and
                    pain can procure him some great pleasure.{' '}
                  </p>
                </div>

                <div className="more-posts">
                  <div className="previous-post">
                    {parseInt(id) === 1 ? null : (
                      <Link onClick={ClickHandler} to={prevProjectPath}>
                        <div className="post-img">
                          <img src={previousProject.prImg1} alt="" />
                        </div>
                        <div className="post-text">
                          <span className="post-control-link">
                            Previous Project
                          </span>
                          <span className="post-name">
                            {previousProject?.title}
                          </span>
                        </div>
                      </Link>
                    )}
                  </div>
                  <div className="next-post">
                    {parseInt(id) < totalProjects ? (
                      <Link onClick={ClickHandler} to={nextProjectPath}>
                        <div className="post-text">
                          <span className="post-control-link">
                            Next Project
                          </span>
                          <span>{nextProject?.title}</span>
                        </div>
                        <div className="post-img">
                          <img src={nextProject.prImg2} alt="" />
                        </div>
                      </Link>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default ProjectSinglePage;
