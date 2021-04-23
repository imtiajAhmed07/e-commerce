import React from 'react';
import './FooterBanner.css'
import banner from '../../../images/banner.jpg'

const FooterBanner = () => {
    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-center align-items-center footerBannerMain">
                <div className="text-center footerBannerContent">
                    <h3>Stock Room</h3>
                    <h6>Lorem Ipsum Dolar Sitar Batpar</h6>
                </div>
                <img className="footerBannerImg" src={banner} alt=""/>
            </div>
        </div>
    );
};

export default FooterBanner;