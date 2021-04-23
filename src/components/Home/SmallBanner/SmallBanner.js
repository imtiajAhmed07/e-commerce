import React from 'react';
import './SmallBanner.css'
import smBanner1 from '../../../images/smBanner1.jpg'
import smBanner2 from '../../../images/smBanner2.jpg'

const SmallBanner = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 smBannerPart d-flex align-items-center">
                    <div className="smallBannerContent ms-5">
                        <h6>Product Essentials</h6>
                        <h5>Wodden Bottle</h5>
                        <button className="btn smButton mt-3">Book Now / <span className="smText">$330</span></button>
                    </div>
                    <img src={smBanner1} className="w-100" alt="" />
                </div>
                <div className="col-md-6 mt-sm-5 mt-xs-5 mt-md-0 smBannerPart d-flex align-items-center">
                    <div className="smallBannerContent ms-5">
                        <h6>Product Furniture</h6>
                        <h5>Red Cable</h5>
                        <button className="btn smButton mt-3">Book Now / <span className="smText">$493</span></button>
                    </div>
                    <img src={smBanner2} className="w-100" alt="" />
                </div>
            </div>
        </div>
    );
};

export default SmallBanner;