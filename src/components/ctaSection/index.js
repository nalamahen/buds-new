import React from 'react'
import { Link } from 'react-router-dom'
import shape from '../../images/cta-shape.png'
import Pdf from '../../docs/membership-form-2024-final.pdf';



const CtaSection = (props) => {

    return (
        <div className={`wpo-cta-area ${props.ctClass}`}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="wpo-cta-section">
                            <div className="wpo-cta-content">
                                <h2>{props.cTitle}</h2>
                               {/*  <Link to="/membership" target='_blank'>Become A Member</Link> */}
                                  <a href = {Pdf} target = "_blank">Membership Form</a>
                            </div>
                            <div className="volunteer-img">
                                <img src={props.vImg} alt=""/>
                            </div>
                            <div className="shape"><img src={shape} alt=""/></div>
                            <div style={{color: 'white', marginTop: "5px"}}>If you would like to become a member of BUDS, please contact us or complete the membership form and send it to us</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CtaSection;