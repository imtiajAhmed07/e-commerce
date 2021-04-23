import React from 'react';
import './Footer.css'
import { faEnvelope, faMapMarkerAlt, faPhone, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
    return (
        <section className="mt-5 pb-3 footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 mt-5">
                        <h3 className="smText">Stock Room</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, ipsum dolorum quo veniam consequuntur culpa distinctio atque, rem nemo sint </p>
                        
                        <li className=""><span className="me-3"><FontAwesomeIcon icon={faMapMarkerAlt} /></span> Dhanmondi,Dhaka</li>
                        <li><span className="me-3"><FontAwesomeIcon icon={faEnvelope} /></span> Lorem@gmail.com</li>
                        <li><span className="me-3"><FontAwesomeIcon icon={faPhoneAlt} /></span> 203590522</li>
                    </div>
                    <div className="col-md-3 mt-5 ms-3">
                        <h5 className="text-white">Information</h5>
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Delivery Information</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Condition</li>
                    </div>
                    <div className="col-md-3 mt-5 ms-3">
                        <h5 className="text-white">Customer Service</h5>
                        <li>Shipping Policy</li>
                        <li>Help & Contact Us</li>
                        <li>Returns & Refunds</li>
                        <li>Online Stores</li>
                        <li>Terms & Condition</li>
                    </div>
                </div>
                <div className="mt-4 text-center">
                    <li className="footerLine"></li>
                    <p className="mt-4">Copyright &#169; stock room all right reserved {new Date().getFullYear()}</p>
                </div>
            </div>
        </section>
    );
};

export default Footer;