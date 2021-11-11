import React from 'react';
// Import React Icon
import { HiLocationMarker } from 'react-icons/hi'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'

const Footer = () => {
    return (
        <div>
            <div className="container-fluid text-dark">
                <div className="row container d-flex justify-content-center pt-5 m-0">
                    {/* Footer Left */}
                    <div className="col-lg-6 col-12">
                        <div className="">
                            <h6><HiLocationMarker></HiLocationMarker> New York, USA</h6>
                        </div>
                        <div className="">
                            <h6><BsFillTelephoneFill></BsFillTelephoneFill> +18347347</h6>
                        </div>
                        <div className="">
                            <h6><MdEmail></MdEmail> support@kayrings.com</h6>
                        </div>
                    </div>
                    {/* Footer Right */}
                    <div className="col-lg-6 col-12">
                        <h6>Privacy Policy</h6>
                        <h6>Terms and Conditions</h6>
                        <h6>Sitemap</h6>
                    </div>
                </div>
                <hr />
                <div className="pb-2">
                    &copy; Copyright 2021
                </div>

            </div>
        </div>
    );
};

export default Footer;