import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';

const Product = () => {
    
    const [product, setProduct] = useState([])
    console.log(product);

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
                    product.map(pd => <ProductCard pd={pd}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Product;