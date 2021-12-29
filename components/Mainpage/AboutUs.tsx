import React from 'react';
import ReactPlayer from 'react-player'

const AboutUs = () => {
    return (
        <div>
                     <div className="site-section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 mb-5 mb-md-0">
                        <div className="img-border">
                            <a href="#" className="popup-vimeo image-play">
                                <span className="icon-wrap">
                                    <span className="icon icon-play"></span>
                                </span>
                                {/* <img src="images/ximg_2.jpg.pagespeed.ic.JERe5VtXum.jpg" alt="" className="img-fluid" /> */}
                                <ReactPlayer controls={true} url='https://www.youtube.com/watch?v=D2Mq4qnLLKg' className="img-fluid" />
                            </a>
                        </div>
                        {/* <img src="images/ximg_1.jpg.pagespeed.ic.tg01c7lcZw.jpg" alt="Image"
                            className="img-fluid image-absolute" /> */}
                    </div>
                    <div className="col-md-5 ml-auto">
                        <div className="section-heading text-left">
                            <h2 className="mb-5">About Us</h2>
                        </div>
                        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, nisi Lorem
                            ipsum dolor sit amet, consectetur adipisicing elit. Odit nobis magni eaque velit eum, id rem
                            eveniet dolor possimus voluptas..</p>
                        
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default AboutUs;