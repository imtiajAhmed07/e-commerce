import React from 'react';
import BlogPost from '../BlogPost/BlogPost';
import Discount from '../Discount/Discount';
import FooterBanner from '../FooterBanner/FooterBanner';
import Header from '../Header/Header/Header';
import Product from '../Product/Product';
import SmallBanner from '../SmallBanner/SmallBanner';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Product></Product>
            <SmallBanner></SmallBanner>
            <BlogPost></BlogPost>
            <FooterBanner></FooterBanner>
            <Discount></Discount>
        </div>
    );
};

export default Home;