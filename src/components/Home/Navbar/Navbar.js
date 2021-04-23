import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="container sticky-top">
            <nav class="navbar navbar-expand-lg navbar-light bg-white ">
                <div class="container-fluid">
                    <a class="navbar-brand fw-bold fs-3" href="#">Stock <span className="smText">Room</span></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav ms-auto">
                            <a class="nav-link text-dark ms-md-5" aria-current="page" href="#">Home</a>
                            <a class="nav-link text-dark ms-md-5" href="#">Shop</a>
                            <a class="nav-link text-dark ms-md-5" href="#">Blog</a>
                            <a class="nav-link text-dark ms-md-5" href="#">Pages</a>
                            <a class="nav-link text-dark ms-md-5" href="#">Contact</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;