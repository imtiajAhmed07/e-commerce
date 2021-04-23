import React from 'react';
import './HeaderMain.css'
import header from '../../../../images/header.png'

const HeaderMain = () => {
    return (
        <header class="header">
                <div className="row mt-5">
                    <div className="col-md-6 d-flex align-items-center">
                        <div>
                            <h1 className="mb-md-4 mb-sm-2">Stock Room <br /> By Sam Henry</h1>
                            <p className="text-secondary mb-md-4 mb-sm-2">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus tenetur quia inventore pariatur eveniet volupt
                            </p>
                            <button className="btn button text-white">Discover Now</button>
                        </div>
                    </div>
                    <div className="mt-sm-5 mt-md-0 col-md-6 d-flex align-items-center justify-content-center">
                        <img src={header} alt="" className="ms-md-5" style={{ width: '70%' }} />
                    </div>
                </div>
        </header>
    );
};

export default HeaderMain;