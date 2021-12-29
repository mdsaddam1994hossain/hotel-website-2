import React from 'react';

const SummerPromo = () => {
    return (
        <div>

<div className="py-5 upcoming-events"
            style={{backgroundImage: `url('images/hero_1.jpg')`, backgroundAttachment: "fixed" }}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h2 className="text-white">Summer Promo 50% Off</h2>
                        <a href="#" className="text-white btn btn-outline-warning rounded-0 text-uppercase">Avail Now</a>
                    </div>
                    <div className="col-md-6">
                        <span className="caption">The Promo will start in</span>
                        <div id="date-countdown"></div>
                    </div>
                </div>
            </div>
        </div>
            
        </div>
    );
};

export default SummerPromo;