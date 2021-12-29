
import React from 'react';

const OurRooms = () => {
    return (
        <div>
             <div className="slide-one-item home-slider owl-carousel">
            <div className="site-blocks-cover overlay"
                 style={{backgroundImage:`url(images/xhero_1.jpg.pagespeed.ic.BXF2wsHIn8..jpg)`}} 
                 //data-aos="fade"
                data-stellar-background-ratio="0.5">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-md-7 text-center" data-aos="fade">
                            <h1 className="mb-2">Welcome To Suites</h1>
                            <h2 className="caption">Hotel &amp; Resort</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="site-blocks-cover overlay" style={{backgroundImage:`url(images/hero_2.jpg)`}} 
            //data-aos="fade"
                data-stellar-background-ratio="0.5">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-md-7 text-center" data-aos="fade">
                            <h1 className="mb-2">Unique Experience</h1>
                            <h2 className="caption">Enjoy With Us</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="site-blocks-cover overlay" style={{backgroundImage:`url(images/hero_3.jpg)`}}  
            //data-aos="fade"
                data-stellar-background-ratio="0.5">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-md-7 text-center" data-aos="fade">
                            <h1 className="mb-2">Relaxing Room</h1>
                            <h2 className="caption">Your Room, Your Stay</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
          <div className="site-section bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mx-auto text-center mb-5 section-heading">
                        <h2 className="mb-5">Our Rooms</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="hotel-room text-center">
                            <a href="#" className="d-block mb-0 thumbnail">
                                <img src="images/ximg_1.jpg.pagespeed.ic.tg01c7lcZw.jpg" alt="Image"
                                    className="img-fluid" /></a>
                            <div className="hotel-room-body">
                                <h3 className="heading mb-0"><a href="#">Standard Room</a></h3>
                                <strong className="price"><span>&#2547;</span>2500.00 / per night</strong>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="hotel-room text-center">
                            <a href="#" className="d-block mb-0 thumbnail"><img
                                    src="images/ximg_2.jpg.pagespeed.ic.JERe5VtXum.jpg" alt="Image"
                                    className="img-fluid" /></a>
                            <div className="hotel-room-body">
                                <h3 className="heading mb-0"><a href="#">Family Room</a></h3>
                                <strong className="price"><span>&#2547;</span>3000.00 / per night</strong>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="hotel-room text-center">
                            <a href="#" className="d-block mb-0 thumbnail"><img
                                    src="images/ximg_3.jpg.pagespeed.ic.PbMTBe3-kz.jpg" alt="Image"
                                    className="img-fluid" /></a>
                            <div className="hotel-room-body">
                                <h3 className="heading mb-0"><a href="#">Single Room</a></h3>
                                <strong className="price"><span>&#2547;</span>2000.00 / per night</strong>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="hotel-room text-center">
                            <a href="#" className="d-block mb-0 thumbnail"><img
                                    src="images/ximg_1.jpg.pagespeed.ic.tg01c7lcZw.jpg" alt="Image"
                                    className="img-fluid" /></a>
                            <div className="hotel-room-body">
                                <h3 className="heading mb-0"><a href="#">Deluxe Room</a></h3>
                                <strong className="price"><span>&#2547;</span>3500.00 / per night</strong>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="hotel-room text-center">
                            <a href="#" className="d-block mb-0 thumbnail"><img
                                    src="images/ximg_2.jpg.pagespeed.ic.JERe5VtXum.jpg" alt="Image"
                                    className="img-fluid" /></a>
                            <div className="hotel-room-body">
                                <h3 className="heading mb-0"><a href="#">Luxury Room</a></h3>
                                <strong className="price"><span>&#2547;</span>4500.00 / per night</strong>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="hotel-room text-center">
                            <a href="#" className="d-block mb-0 thumbnail"><img
                                    src="images/ximg_3.jpg.pagespeed.ic.PbMTBe3-kz.jpg" alt="Image"
                                    className="img-fluid" /></a>
                            <div className="hotel-room-body">
                                <h3 className="heading mb-0"><a href="#">Single Room</a></h3>
                                <strong className="price"><span>&#2547;</span>2250.00 / per night</strong>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-12 text-center">
                        <div className="site-block-27">
                            <ul>
                                <li><a href="#">&lt;</a></li>
                                <li className="active"><span>1</span></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#">4</a></li>
                                <li><a href="#">5</a></li>
                                <li><a href="#">&gt;</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
        </div>
    );
};

export default OurRooms;