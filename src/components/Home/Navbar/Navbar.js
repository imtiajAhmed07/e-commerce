import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';

const Navbar = () => {
    
    const [cart, setCart] = useContext(UserContext)

    return (
        <div className="container sticky-top">
            <nav class="navbar navbar-expand-lg navbar-light bg-white ">
                <div class="container-fluid">
                    <Link to="" class="navbar-brand fw-bold fs-3">Stock <span className="smText">Room</span></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav ms-auto">
                            <Link to="/" class="nav-link text-dark ms-md-5" aria-current="page">Home</Link>
                            <Link to="" class="nav-link text-dark ms-md-5">Shop</Link>
                            <Link to="" class="nav-link text-dark ms-md-5">Blog</Link>
                            <Link to="" class="nav-link text-dark ms-md-5">Pages</Link>
                            <Link to="" class="nav-link text-dark ms-md-5">Contact</Link>
                            <Link to="/cart" class="nav-link text-dark ms-md-5"><FontAwesomeIcon icon={faShoppingCart} /> <span><small>{cart.length}</small></span></Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;