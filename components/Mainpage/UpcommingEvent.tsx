import React from 'react';
import Carousel from "react-multi-carousel";

const UpcommingEvent = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div>

            <div className="site-section block-15">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mx-auto text-center mb-5 section-heading">
                            <h2>Upcoming Events</h2>
                        </div>
                    </div>

                    <div className="nonloop-block-15 ">
                        <Carousel responsive={responsive}
                            infinite={true}
                        >

                            <div className="media-with-text p-md-5">
                                <div className="img-border-sm mb-4">
                                    <a href="#" className="popup-vimeo image-play">
                                        <img src="images/ximg_1.jpg.pagespeed.ic.tg01c7lcZw.jpg" alt="" className="img-fluid" />
                                    </a>
                                </div>
                                <h2 className="heading mb-0"><a href="#">Lorem Ipsum Dolor Sit Amet</a></h2>
                                <span className="mb-3 d-block post-date">Dec 20th, 2018 &bullet; By <a href="#">Admin</a></span>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolores culpa qui aliquam
                                    placeat nobis veritatis tempora natus rerum obcaecati.</p>
                            </div>

                            <div className="media-with-text p-md-4">
                                <div className="img-border-sm mb-4">
                                    <a href="#" className="popup-vimeo image-play">
                                        <img src="images/img_2.jpg" alt="" className="img-fluid" />
                                    </a>
                                </div>
                                <h2 className="heading mb-0"><a href="#">Lorem Ipsum Dolor Sit Amet</a></h2>
                                <span className="mb-3 d-block post-date">Dec 20th, 2018 &bullet; By <a href="#">Admin</a></span>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolores culpa qui aliquam
                                    placeat nobis veritatis tempora natus rerum obcaecati.</p>

                            </div>


                            <div className="media-with-text p-md-4">
                                <div className="img-border-sm mb-4">
                                    <a href="#" className="popup-vimeo image-play">
                                        <img src="images/img_3.jpg" alt="" className="img-fluid" />
                                    </a>
                                </div>
                                <h2 className="heading mb-0"><a href="#">Lorem Ipsum Dolor Sit Amet</a></h2>
                                <span className="mb-3 d-block post-date">Dec 20th, 2018 &bullet; By <a href="#">Admin</a></span>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolores culpa qui aliquam
                                    placeat nobis veritatis tempora natus rerum obcaecati.</p>
                            </div>
                            <div className="media-with-text p-md-4">
                                <div className="img-border-sm mb-4">
                                    <a href="#" className="popup-vimeo image-play">
                                        <img src="images/ximg_1.jpg.pagespeed.ic.tg01c7lcZw.jpg" alt="" className="img-fluid" />
                                    </a>
                                </div>
                                <h2 className="heading mb-0"><a href="#">Lorem Ipsum Dolor Sit Amet</a></h2>
                                <span className="mb-3 d-block post-date">Dec 20th, 2018 &bullet; By <a href="#">Admin</a></span>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolores culpa qui aliquam
                                    placeat nobis veritatis tempora natus rerum obcaecati.</p>
                            </div>
                            <div className="media-with-text p-md-4">
                                <div className="img-border-sm mb-4">
                                    <a href="#" className="popup-vimeo image-play">
                                        <img src="images/img_2.jpg" alt="" className="img-fluid" />
                                    </a>
                                </div>
                                <h2 className="heading mb-0"><a href="#">Lorem Ipsum Dolor Sit Amet</a></h2>
                                <span className="mb-3 d-block post-date">Dec 20th, 2018 &bullet; By <a href="#">Admin</a></span>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolores culpa qui aliquam
                                    placeat nobis veritatis tempora natus rerum obcaecati.</p>
                            </div>
                            <div className="media-with-text p-md-4">
                                <div className="img-border-sm mb-4">
                                    <a href="#" className="popup-vimeo image-play">
                                        <img src="images/img_3.jpg" alt="" className="img-fluid" />
                                    </a>
                                </div>
                                <h2 className="heading mb-0"><a href="#">Lorem Ipsum Dolor Sit Amet</a></h2>
                                <span className="mb-3 d-block post-date">Dec 20th, 2018 &bullet; By <a href="#">Admin</a></span>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolores culpa qui aliquam
                                    placeat nobis veritatis tempora natus rerum obcaecati.</p>
                            </div>
                            <div className="media-with-text p-md-4">
                                <div className="img-border-sm mb-4">
                                    <a href="#" className="popup-vimeo image-play">
                                        <img src="images/ximg_1.jpg.pagespeed.ic.tg01c7lcZw.jpg" alt="" className="img-fluid" />
                                    </a>
                                </div>
                                <h2 className="heading mb-0"><a href="#">Lorem Ipsum Dolor Sit Amet</a></h2>
                                <span className="mb-3 d-block post-date">Dec 20th, 2018 &bullet; By <a href="#">Admin</a></span>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolores culpa qui aliquam
                                    placeat nobis veritatis tempora natus rerum obcaecati.</p>
                            </div>
                            <div className="media-with-text p-md-4">
                                <div className="img-border-sm mb-4">
                                    <a href="#" className="popup-vimeo image-play">
                                        <img src="images/img_2.jpg" alt="" className="img-fluid" />
                                    </a>
                                </div>
                                <h2 className="heading mb-0"><a href="#">Lorem Ipsum Dolor Sit Amet</a></h2>
                                <span className="mb-3 d-block post-date">Dec 20th, 2018 &bullet; By <a href="#">Admin</a></span>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolores culpa qui aliquam
                                    placeat nobis veritatis tempora natus rerum obcaecati.</p>
                            </div>
                            <div className="media-with-text p-md-4">
                                <div className="img-border-sm mb-4">
                                    <a href="#" className="popup-vimeo image-play">
                                        <img src="images/img_3.jpg" alt="" className="img-fluid" />
                                    </a>
                                </div>
                                <h2 className="heading mb-0"><a href="#">Lorem Ipsum Dolor Sit Amet</a></h2>
                                <span className="mb-3 d-block post-date">Dec 20th, 2018 &bullet; By <a href="#">Admin</a></span>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolores culpa qui aliquam
                                    placeat nobis veritatis tempora natus rerum obcaecati.</p>
                            </div>

                        </Carousel>


                    </div>
                </div>
            </div>

        </div>
    );
};

export default UpcommingEvent;