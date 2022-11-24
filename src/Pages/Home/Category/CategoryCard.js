import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ productCategory }) => {
    const { name, img, description, _id } = productCategory;
    console.log(_id)

    return (
        <div className="max-w-xs rounded-md shadow-md mx-auto">
            <img src={img} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
                    <p className="dark:text-gray-100">{description}</p>
                </div>
                <Link to={`/category/${name}`}><button className="flex items-center btn-primary justify-center w-full p-3 font-semibold tracking-wide rounded-md text-white">More Products</button></Link>

            </div>
        </div>
    );
};

export default CategoryCard;