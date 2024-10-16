import React from 'react';

const HeaderTopbar = () => {
  return (
    <div className="topbar">
      <div className="container-fluid">
        <div className="row">
          <div className="col col-md-7 col-sm-12 col-12">
            <div className="contact-intro">
              <ul>
                <li>BUDS - Batticaloa Underprivileged Development Society</li>
                <li>
                  <i className="fi flaticon-email"></i>secretary@budsuk.org
                </li>
              </ul>
            </div>
          </div>
          <div className="col col-md-5 col-sm-12 col-12">
            <div className="contact-info">
              <ul>
                <li>Visit our social pages</li>
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
        </div>
      </div>
    </div>
  );
};

export default HeaderTopbar;
