import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';

const Category = () => {
    const [categories, setCategories] = useState('')
    useEffect(() => {
        fetch('http://localhost:5000/category')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])
    return (
        <div className='mb-12'>
            <h2 className='text-3xl font-semibold mx-auto mt-6'>Products Category</h2>
            <div className='grid grid-cols-3 gap-4 mx-auto mt-6'>
                {
                    categories?.map(category => <CategoryCard
                    key={category._id}
                    category={category}
                    ></CategoryCard>)
                }
            </div>
        </div>

    );
};

export default Category;