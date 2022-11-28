import React from 'react';
import { Link } from 'react-router-dom';

const AdvertiseCard = ({add}) => {
    const {img, productName, originalPrice, resalePrice, yearsOfUse, postTime} = add;
    return (
        <div className="max-w-xs rounded-md shadow-md mx-auto">
            <img src={img} alt="" className="object-cover object-center w-full rounded-t-md h-72" />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2 text-left">
                    <h2 className="text-xl font-semibold tracking-wide">{productName}</h2>
                    <p className="dark:text-gray-100">Original Price: {originalPrice}</p>
                    <p className="dark:text-gray-100">Resale Price: {resalePrice}</p>
                    <p className="dark:text-gray-100">Years Of Use: {yearsOfUse}</p>
                <p className="dark:text-gray-100">Post Time: {postTime?.slice(0, 10)}</p>
                </div>
                <Link ><button  className="flex items-center btn-primary justify-center w-full p-3 font-semibold tracking-wide rounded-md text-white">Buy Now</button></Link>
            </div>
        </div>
    );
};

export default AdvertiseCard;