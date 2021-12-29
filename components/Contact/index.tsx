import React from 'react';
import InformationForm from './InformationForm';

const index = () => {
    return (
        <div>


            <div className="site-blocks-cover overlay"
                style={{ backgroundImage: `url(images/xhero_1.jpg.pagespeed.ic.BXF2wsHIn8.jpg)` }} data-stellar-background-ratio="0.5">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                    <div className="col-md-7 text-center" >
                        <span className="caption mb-3">Chat With Us</span>
                        <h1 className="mb-4">Get In Touch</h1>
                    </div>
                    </div>
                </div>
            </div>

            <InformationForm />


        </div>
    );
};

export default index;