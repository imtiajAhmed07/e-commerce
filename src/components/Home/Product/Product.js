import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import ProductCard from '../ProductCard/ProductCard';

const Product = () => {
    
    const [product, setProduct] = useState([])
    const [cart, setCart] = useContext(UserContext)
    
    const handleAddToCart = (product) => {
        const newProduct = [...cart, product];
        setCart(newProduct);
    }

    const url = `https://nameless-atoll-08724.herokuapp.com/products`

    useEffect(()=>{
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    },[])

    return (
        <div className="container">
            <h1 className="mt-5 pt-5 text-center">Sale On</h1>
            <p className="text-center text-secondary">Mirum est notare quam littera gothica quam nunc putamus parum claram!</p>
            <div className="row">
                {
                    product.map(pd => <ProductCard pd={pd} handleAddToCart={handleAddToCart}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Product;