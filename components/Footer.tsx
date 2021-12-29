import React from 'react';
import { FaTwitter,FaFacebookF ,FaInstagram} from "react-icons/fa";
import {MdOutlineFavorite} from "react-icons/md";

const Footer = () => {
    return (
        <div>
            <footer className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h3 className="footer-heading mb-4 text-white">About</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat quos rem ullam, placeat
                                amet.</p>
                            <p><a href="#" className="btn btn-primary pill text-white px-4">Read More</a></p>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-6">
                                    <h3 className="footer-heading mb-4 text-white">Quick Menu</h3>
                                    <ul className="list-unstyled">
                                        <li><a href="#">About</a></li>
                                        <li><a href="#">Services</a></li>
                                        <li><a href="#">Approach</a></li>
                                        <li><a href="#">Sustainability</a></li>
                                        <li><a href="#">News</a></li>
                                        <li><a href="#">Careers</a></li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <h3 className="footer-heading mb-4 text-white">Ministries</h3>
                                    <ul className="list-unstyled">
                                        <li><a href="#">Children</a></li>
                                        <li><a href="#">Women</a></li>
                                        <li><a href="#">Bible Study</a></li>
                                        <li><a href="#">Church</a></li>
                                        <li><a href="#">Missionaries</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="col-md-12">
                                <h3 className="footer-heading mb-4 text-white">Social Icons</h3>
                            </div>
                            <div className="col-md-12 flex gap-4">
                              
                                    <a href="#" className="pb-2 pr-2 pl-0"><FaFacebookF /> </a>
                                    <a href="#" className="pb-2 pr-2 pl-0"><FaTwitter /> </a>
                                    <a href="#" className="pb-2 pr-2 pl-0"><FaInstagram /> </a>
                                    
                              
                            </div>
                        </div>
                    </div>
                    <div className="row pt-5 mt-5 text-center">
                        <div className="col-md-12 flex justify-center ">
                            <p className='flex'> Copyright &copy; All Rights Reserved |   developed by
                                        <MdOutlineFavorite className='text-red-500 mx-1 mt-1'  />   <a
                                    href="https://bitsofts.io/" target="_blank"> bitsofts.io</a>

                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;