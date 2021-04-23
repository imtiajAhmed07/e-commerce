import React from 'react';
import './HeaderMiniBox.css'
import handWatch from '../../../../images/handWatch.png'
import redSneakers from '../../../../images/redSneakers.png'
import waterBottle from '../../../../images/waterBottle.png'

const HeaderMiniBox = () => {
    return (
        <div className="row mt-md-5 justify-content-evenly pt-md-5">
            <div className="col-md-3 d-flex align-items-center justify-content-center miniBox">                
                <img src={handWatch} className="img-fluid w-50" alt=""/>                
            </div>
            <div className="col-md-3 d-flex align-items-center justify-content-center miniBox">
                <img src={redSneakers} className="img-fluid w-50" alt=""/>
            </div>
            <div className="col-md-3 d-flex align-items-center justify-content-center miniBox">
                <img src={waterBottle} className="img-fluid w-50" alt=""/>
            </div>
        </div>
    );
};

export default HeaderMiniBox;