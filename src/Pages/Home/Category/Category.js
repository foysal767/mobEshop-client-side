import React from 'react';

const Category = () => {
    return (
        <div className='mb-12'>
            <h2 className='text-3xl font-semibold mx-auto mt-6'>Products Category</h2>
            <div className='grid grid-cols-3 gap-4 mx-auto mt-6'>
                <div className="max-w-xs rounded-md shadow-md mx-auto">
                    <img src="https://www.gizbot.com/img/2017/05/list-latest-nokia-feature-phones-buy-india-17-1495010940.jpg" alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                    <div className="flex flex-col justify-between p-6 space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-semibold tracking-wide">Basic Phone</h2>
                            <p className="dark:text-gray-100">Get Second-hand Basic Phones from mobEshop to stay in touch</p>
                        </div>
                        <button type="button" className="flex items-center btn-primary justify-center w-full p-3 font-semibold tracking-wide rounded-md text-white">More Products</button>
                    </div>
                </div>
                <div className="max-w-xs rounded-md shadow-md mx-auto">
                    <img src="https://www.samma3a.com/tech/en/wp-content/uploads/sites/2/2020/04/Best-Android-Phones.jpg" alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                    <div className="flex flex-col justify-between p-6 space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-semibold tracking-wide">Android Phone</h2>
                            <p className="dark:text-gray-100">Get Second-hand Android Phones from mobEshop to stay in touch</p>
                        </div>
                        <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md btn-primary text-white">More Products</button>
                    </div>
                </div>
                <div className="max-w-xs rounded-md shadow-md mx-auto">
                    <img src="https://static.independent.co.uk/2021/10/04/14/iphones%20IndyBest.jpg?quality=75&width=982&height=726&auto=webp" alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                    <div className="flex flex-col justify-between p-6 space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-semibold tracking-wide">iPhones</h2>
                            <p className="dark:text-gray-100">Get Second-hand iPhones from mobEshop to stay in touch</p>
                        </div>
                        <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md btn-primary text-white">More Products</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Category;