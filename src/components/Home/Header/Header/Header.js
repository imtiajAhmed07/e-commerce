import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import HeaderMiniBox from '../HeaderMiniBox/HeaderMiniBox';
import Navbar from '../../Navbar/Navbar';

const Header = () => {
    return (
        <div className="container">
            <HeaderMain></HeaderMain>
            <HeaderMiniBox></HeaderMiniBox>
        </div>
    );
};

export default Header;