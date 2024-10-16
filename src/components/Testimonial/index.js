import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ts1 from '../../images/testimonial/bala-150x150.png';
import ts2 from '../../images/testimonial/kantha-150x150.jpeg';
import ts3 from '../../images/testimonial/dr-bala-150x150.png';

class Testimonial extends Component {
  render() {
    var settings = {
      dots: false,
      arrows: true,
      speed: 1000,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1500,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    const testimonial = [
      {
        tsImg: ts1,
        Des: 'BUDS provides an annual contribution of about £6,000 to £7,000 to the underprivileged.',
        Title: 'Bala Canagasabai',
        Sub: 'Medical Consultant',
      },
      {
        tsImg: ts2,
        Des: 'BUDS involved itself in helping not only the deserving people at home in Srilanka but also the expatriates in this country, to access and utilize the various medical facilities available in this country.',
        Title: 'Dr Kantha Niranjan',
        Sub: 'Medical Consultant',
      },
      {
        tsImg: ts3,
        Des: 'BUDS involves in multi-dimensional activities across the Batticaloa District and its neighbouring regions.',
        Title: 'Dr Balasubramaniam',
        Sub: 'Medical Consultant',
      },
    ];
    return (
      <div className="wpo-testimonial-area section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="wpo-section-title">
                <span>Testimonial</span>
                <h2>What People Say About Us</h2>
              </div>
            </div>
          </div>
          <div className="wpo-testimonial-wrap">
            <div className="testimonial-slider owl-carousel">
              <Slider {...settings}>
                {testimonial.map((tesmnl, tsm) => (
                  <div className="wpo-testimonial-item" key={tsm}>
                    <div className="wpo-testimonial-img">
                      <img src={tesmnl.tsImg} alt="" />
                    </div>
                    <div className="wpo-testimonial-content">
                      <p>{tesmnl.Des}</p>
                      <h2>{tesmnl.Title}</h2>
                      <span>{tesmnl.Sub}</span>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Testimonial;
