import React from 'react';

const CategoryCard = ({category}) => {
    const {name, img, description, _id} = category;
    console.log(_id)
    return (
        <div className="max-w-xs rounded-md shadow-md mx-auto">
            <img src={img} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
                    <p className="dark:text-gray-100">{description}</p>
                </div>
                <button type="button" className="flex items-center btn-primary justify-center w-full p-3 font-semibold tracking-wide rounded-md text-white">More Products</button>
            </div>
        </div>
    );
};

export default CategoryCard;