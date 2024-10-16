import React from 'react';
import blogs from '../../api/blogs';
import { Link } from 'react-router-dom';

const BlogSection = (props) => {
  return (
    <section className="wpo-blog-section section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="wpo-section-title">
              <h2>Latest News & Update</h2>
            </div>
          </div>
        </div>
        <div className="wpo-blog-items">
          <div className="row">
            {blogs.slice(0, 3).map((blog, Bitem) => (
              <div className="col col-lg-4 col-md-6 col-12" key={Bitem}>
                <div className="wpo-blog-item">
                  <div className="wpo-blog-img">
                    <img src={blog.screens} alt="" />
                  </div>
                  <div className="wpo-blog-content">
                    <div className="wpo-blog-content-top">
                      <h2>
                        <a href={blog.report} target="_blank">
                          {blog.title}
                        </a>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
