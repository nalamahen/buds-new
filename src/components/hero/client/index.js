import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import client1 from '../../../images/slider/kangatharan-55x55.png'
import client2 from '../../../images/slider/muriet.png'
import client3 from '../../../images/slider/roshan.jpg'
import client4 from '../../../images/slider/umachandran.png'
import client5 from '../../../images/slider/rajan-55x55.png'
import client6 from '../../../images/slider/balamurali.png'
import client7 from '../../../images/slider/raja-55x55.png'
import client8 from '../../../images/slider/ramesh.jpeg'
import client9 from '../../../images/slider/subash.jpeg'
import client10 from '../../../images/slider/suresh.jpeg'
import client11 from '../../../images/slider/umashankar.jpeg'
import client12 from '../../../images/slider/suja-55x55.png'
import client13 from '../../../images/slider/suman-55x55.png'
import client14 from '../../../images/slider/thayaparan-55x55.png'


class Clients extends Component {
    render() {
        var settings = {
            dots: false,
            arrows: false,
            speed: 1000,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            responsive: [
                {
                    breakpoint: 1500,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div className="wpo-happy-client-img">
                <ul className="wpo-happy-client-slide">
                    <Slider {...settings}>
                        <li><img src={client1} alt=""/></li>
                        <li><img src={client2} alt=""/></li>
                        <li><img src={client3} alt=""/></li>
                        <li><img src={client4} alt=""/></li>
                        <li><img src={client5} alt=""/></li>
                        <li><img src={client6} alt=""/></li>
                        <li><img src={client7} alt=""/></li>
                        <li><img src={client8} alt=""/></li>
                        <li><img src={client9} alt=""/></li>
                        <li><img src={client10} alt=""/></li>
                        <li><img src={client11} alt=""/></li>
                        <li><img src={client12} alt=""/></li>
                        <li><img src={client13} alt=""/></li>
                        <li><img src={client14} alt=""/></li>
                    </Slider>
                </ul>
            </div>
        );
    }
}

export default Clients;