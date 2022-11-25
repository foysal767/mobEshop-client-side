import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard';

const Products = () => {
    const products = useLoaderData({})
    return (
        <div className='w-10/12 mx-auto grid grid-cols-1 gap-6 my-12'>
            {
                products.map(product => <ProductCard
                    key={product._id}
                    product={product}
                ></ProductCard>)
            }
        </div>
    );
};

export default Products;