import React from 'react';
import Carousel from "react-multi-carousel";
import Slider from "react-slick";

const MainSlider = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
        <div>
            <div className="slide-one-item home-slider ">

                <Carousel responsive={responsive} 
                 infinite={true}
                >
                    <div className="site-blocks-cover overlay"
                        style={{ backgroundImage: `url(images/xhero_1.jpg.pagespeed.ic.BXF2wsHIn8.jpg)` }}
                        //data-aos="fade"
                        data-stellar-background-ratio="0.5">
                        <div className="container">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-md-7 text-center" 
                                //data-aos="fade"
                                >
                                    <h1 className="mb-2">Welcome To Suites</h1>
                                    <h2 className="caption">Hotel &amp; Resort</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="site-blocks-cover overlay" style={{ backgroundImage: `url(images/hero_2.jpg)` }}
                        // data-aos="fade"
                        data-stellar-background-ratio="0.5">
                        <div className="container">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-md-7 text-center" 
                                //data-aos="fade"
                                >
                                    <h1 className="mb-2">Unique Experience</h1>
                                    <h2 className="caption">Enjoy With Us</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="site-blocks-cover overlay" style={{ backgroundImage: `url(images/hero_3.jpg)` }}
                        // data-aos="fade"
                        data-stellar-background-ratio="0.5">
                        <div className="container">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-md-7 text-center" 
                                //data-aos="fade"
                                >
                                    <h1 className="mb-2">Relaxing Room</h1>
                                    <h2 className="caption">Your Room, Your Stay</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                </Carousel>




            </div>

        </div>
    );
};

export default MainSlider;