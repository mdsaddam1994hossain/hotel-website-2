import React from 'react';
import AboutUs from './AboutUs';
import ClientFeedBack from './ClientFeedBack';
import HotelFeatures from './HotelFeatures';
import MainSlider from './MainSlider';
import OurGallery from './OurGallery';
import OurRooms from './OurRooms';
import SummerPromo from './SummerPromo';
import UpcommingEvent from './UpcommingEvent';

const index = () => {
    return (
        <div className="site-wrap">
            <MainSlider />
            <OurRooms />
            <AboutUs />
            <HotelFeatures />
            <SummerPromo />
            <OurGallery />
            {/* <UpcommingEvent /> */}
            <ClientFeedBack />

        </div>
    );
};

export default index;