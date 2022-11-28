import React from 'react';

const ProductCard = ({ product, setProductBooking }) => {

    const { productName, originalPrice, resalePrice, deliveryLocation, yearsOfUse, img, sellersName, postTime } = product;

    return (
        <div className="card lg:card-side shadow-xl p-6 border border-gray-200">
            <div className='w-5/12'>
                <figure><img src={img} alt="Album" /></figure>
            </div>
            <div className="w-7/12 my-auto text-left pl-0 md:pl-16">
                <h2 className='text-2xl font-semibold'>Product Name: {productName}</h2>
                <p className='my-2'>Original Price: {originalPrice}</p>
                <p>Resale Price: {resalePrice}</p>
                <p className='my-2'>Location: {deliveryLocation}</p>
                <p>years of use: {yearsOfUse}</p>
                <p className='my-2'>Seller Name: {sellersName}</p>
                {
                    postTime &&
                    <p className='my-2'>Post Time: {postTime.slice(0, 10)}</p>
                }
                <div className='mt-4 card-actions'>
                    <label
                        htmlFor="booking-modal" className="btn btn-primary text-white"
                        onClick={() => setProductBooking(product)}
                    >Booking Now</label>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;