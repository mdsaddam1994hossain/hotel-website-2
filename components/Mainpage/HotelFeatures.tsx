import React from 'react';
import { MdPool } from "react-icons/md";
import { FaHotel,FaPlaneArrival } from "react-icons/fa";
import { RiRunLine } from "react-icons/ri";
import { AiFillCar } from "react-icons/ai";
import { GiHairStrands } from "react-icons/gi";
import { MdLocalBar } from "react-icons/md";
import { BiDrink } from "react-icons/bi";

const HotelFeatures = () => {
    return (
        <div>
            <div className="site-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mx-auto text-center mb-5 section-heading">
                            <h2 className="mb-5">Hotel Features</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-md-4 col-lg-3">
                            <div className="text-center p-4 item">

                                <div className='flex flex-col justify-center items-center'>
                                    <MdPool className="display-3 mb-3 d-block text-primary" />
                                    <h2 className="h5">Swimming Pool</h2>
                                </div>

                            </div>

                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                            <div className="text-center p-4 item">
                                <div className='flex flex-col justify-center items-center'>
                                    <FaHotel className="display-3 mb-3 d-block text-primary" />
                                    <h2 className="h5">Hotel Teller</h2>
                                </div>

                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                            <div className="text-center p-4 item">
                                <div className='flex flex-col justify-center items-center'>
                                    <RiRunLine className="display-3 mb-3 d-block text-primary" />
                                    <h2 className="h5">Fire Exit</h2>
                                </div>

                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                            <div className="text-center p-4 item">
                                <div className='flex flex-col justify-center items-center'>
                                    <AiFillCar className="display-3 mb-3 d-block text-primary" />
                                    <h2 className="h5">Car Parking</h2>
                                </div>

                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                            <div className="text-center p-4 item">
                                <div className='flex flex-col justify-center items-center'>
                                    <GiHairStrands className="display-3 mb-3 d-block text-primary" />
                                    <h2 className="h5">Hair Dryer</h2>
                                </div>

                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                            <div className="text-center p-4 item">
                                <div className='flex flex-col justify-center items-center'>
                                    <MdLocalBar className="display-3 mb-3 d-block text-primary" />
                                    <h2 className="h5">Minibar</h2>
                                </div>

                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                            <div className="text-center p-4 item">
                                <div className='flex flex-col justify-center items-center'>
                                    <BiDrink className="display-3 mb-3 d-block text-primary" />
                                    <h2 className="h5">Drinks</h2>
                                </div>

                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                            <div className="text-center p-4 item">
                                <div className='flex flex-col justify-center items-center'>
                                    <FaPlaneArrival className="display-3 mb-3 d-block text-primary" />
                                    <h2 className="h5">Car Airport</h2>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelFeatures;