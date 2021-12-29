import React from 'react';
import AboutUs from '../Mainpage/AboutUs';
import HotelFeatures from '../Mainpage/HotelFeatures';
import OurGallery from '../Mainpage/OurGallery';
import SummerPromo from '../Mainpage/SummerPromo';
import HotelStaff from './HotelStaff';

const index = () => {
    return (
        <div>

            <div className="site-blocks-cover overlay"
                style={{ backgroundImage: `url(images/xhero_1.jpg.pagespeed.ic.BXF2wsHIn8.jpg)` }} data-stellar-background-ratio="0.5">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-md-7 text-center" >
                            <span className="caption mb-3">Suites Hotel &amp; Resort</span>
                            <h1 className="mb-4">About Us</h1>
                        </div>
                    </div>
                </div>
            </div>
            <AboutUs />

            <HotelStaff />

            <SummerPromo />
            <HotelFeatures />

            <OurGallery />

        </div>
    );
};

export default index;