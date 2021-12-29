import React from 'react';
import Carousel from "react-multi-carousel";

const ClientFeedBack = () => {


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

            <div className="site-section block-14 bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mx-auto text-center mb-5 section-heading">
                            <h2>What People Say</h2>
                        </div>
                    </div>
                    <div className="nonloop-block-14 ">
                    <Carousel responsive={responsive}
                            infinite={true}
                            showDots={true}
                        >
                            <div className="p-4">
                            <div className="d-flex block-testimony">
                                <div className="person mr-3">
                                    <img src="images/xperson_1.jpg.pagespeed.ic.I89kE5UIsQ.jpg" alt="Image"
                                        className="img-fluid rounded" />
                                </div>
                                <div>
                                    <h2 className="h5">Katie Johnson</h2>
                                    <blockquote>&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                                        accusantium qui optio, possimus necessitatibus voluptate aliquam velit nostrum
                                        tempora ipsam!&rdquo;</blockquote>
                                </div>
                            </div>
                        </div>
                        <div className="p-4">
                            <div className="d-flex block-testimony">
                                <div className="person mr-3">
                                    <img src="images/xperson_2.jpg.pagespeed.ic.4pZCok-5YV.jpg" alt="Image"
                                        className="img-fluid rounded" />
                                </div>
                                <div>
                                    <h2 className="h5">Jane Mars</h2>
                                    <blockquote>&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                                        accusantium qui optio, possimus necessitatibus voluptate aliquam velit nostrum
                                        tempora ipsam!&rdquo;</blockquote>
                                </div>
                            </div>
                        </div>
                        <div className="p-4">
                            <div className="d-flex block-testimony">
                                <div className="person mr-3">
                                    <img src="images/person_3.jpg" alt="Image" className="img-fluid rounded" />
                                </div>
                                <div>
                                    <h2 className="h5">Shane Holmes</h2>
                                    <blockquote>&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                                        accusantium qui optio, possimus necessitatibus voluptate aliquam velit nostrum
                                        tempora ipsam!&rdquo;</blockquote>
                                </div>
                            </div>
                        </div>
                        <div className="p-4">
                            <div className="d-flex block-testimony">
                                <div className="person mr-3">
                                    <img src="images/person_4.jpg" alt="Image" className="img-fluid rounded" />
                                </div>
                                <div>
                                    <h2 className="h5">Mark Johnson</h2>
                                    <blockquote>&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                                        accusantium qui optio, possimus necessitatibus voluptate aliquam velit nostrum
                                        tempora ipsam!&rdquo;</blockquote>
                                </div>
                            </div>
                        </div>

                        </Carousel>
                        
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ClientFeedBack;