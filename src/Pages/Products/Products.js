import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Products = () => {
    const {name, description} = useLoaderData()
    console.log(name)
    return (
        <div>
            <h1>Products name: {name}</h1>
            <p>{description}</p>
        </div>
    );
};

export default Products;