import React from 'react';
import BlogPost from '../BlogPost/BlogPost';
import Discount from '../Discount/Discount';
import Footer from '../Footer/Footer';
import FooterBanner from '../FooterBanner/FooterBanner';
import Header from '../Header/Header/Header';
import Navbar from '../Navbar/Navbar';
import Product from '../Product/Product';
import SmallBanner from '../SmallBanner/SmallBanner';


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <Product></Product>
            <SmallBanner></SmallBanner>
            <BlogPost></BlogPost>
            <FooterBanner></FooterBanner>
            <Discount></Discount>
            <Footer></Footer>
        </div>
    );
};

export default Home;