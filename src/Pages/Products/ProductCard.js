import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const { productName, originalPrice, resalePrice, deliveryLocation, yearsOfUse, img, sellersName } = product;
    return (
        <div className="card lg:card-side shadow-xl p-6 ">
            <div className='w-5/12'>
                <figure><img src={img} alt="Album" /></figure>
            </div>
            <div className="w-7/12 my-auto text-left pl-16">
                <h2 className='text-2xl font-semibold'>Product Name: {productName}</h2>
                <p className='my-2'>Original Price: {originalPrice}</p>
                <p>Resale Price: {resalePrice}</p>
                <p className='my-2'>Location: {deliveryLocation}</p>
                <p>years of use: {yearsOfUse}</p>
                <p className='my-2'>Seller Name: {sellersName}</p>
                <div className='mt-4'>
                    <Link><button className="btn btn-primary text-white">Book Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;