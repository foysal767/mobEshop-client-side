import React from 'react';
import Advertise from '../Advertise/Advertise';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import ProductsInfo from '../ProductsInfo/ProductsInfo';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Advertise></Advertise>
            <Category></Category>
            <ProductsInfo></ProductsInfo>
        </div>
    );
};

export default Home;