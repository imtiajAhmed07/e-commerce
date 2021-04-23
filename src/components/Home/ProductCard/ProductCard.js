import { faHeart, faRandom, faShoppingBag, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react';
import './ProductCard.css'

const ProductCard = (props) =>
{

    const { name, price, quantity, imageURL } = props.pd

    return (
        <div class="col-md-3 mt-md-5">
            <div class="product-grid">
                <div class="product-image">
                    <a href="#" class="image"><img src={imageURL} /></a>
                </div>
                <div class="product-content">
                    <h3 class="title"><a href="#">{name}</a></h3>
                    <div class="price">${price}</div>
                    <ul class="product-links">
                        <li><a href="#" data-tip="Add to Wishlist"><FontAwesomeIcon icon={faHeart} /></a></li>
                        <li><a href="#" data-tip="Add to Cart"><FontAwesomeIcon icon={faShoppingBag} /></a></li>
                        <li><a href="#" data-tip="Compare"><FontAwesomeIcon icon={faRandom} /></a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;