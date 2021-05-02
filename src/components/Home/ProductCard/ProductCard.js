import { faHeart, faRandom, faShoppingBag, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css'

const ProductCard = (props) =>{

    const { name, price, quantity, imageURL, _id} = props.pd

    return (
        <div class="col-md-3 mt-md-5">
            <div class="product-grid">
                <div class="product-image">
                    <Link class="image"><img src={imageURL} /></Link>
                </div>
                <div class="product-content">
                    <h3 class="title"><Link>{name}</Link></h3>
                    <div class="price">${price}</div>
                    <ul class="product-links">
                        <li><Link  data-tip="Add to Wishlist"><FontAwesomeIcon icon={faHeart} /></Link></li>
                        <li><Link onClick={()=>props.handleAddToCart(props.pd)}  data-tip="Add to Cart"><FontAwesomeIcon icon={faShoppingBag} /></Link></li>
                        <li><Link  data-tip="Compare"><FontAwesomeIcon icon={faRandom} /></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;