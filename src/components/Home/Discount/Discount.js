import React from 'react';
import './Discount.css'

const Discount = () => {
    return (
        <div className="container text-center mt-5">
            <h1>Get Discount Info</h1>
            <p className="text-secondary">Subscribe to the Outstock mailing list to receive updates on new arrivals, <br/> special offers and other discount information</p>
            <button className="btn subButton">SUBSCRIBE</button>
        </div>
    );
};

export default Discount;