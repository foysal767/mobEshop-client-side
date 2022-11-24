import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import Loading from '../../Shared/Loading/Loading';
import CategoryCard from './CategoryCard';

const Category = () => {

    const {data: productCategories, isLoading} = useQuery({
        queryKey: ['productCategories'],
        queryFn: async () => {
            try{
                const res = await fetch('http://localhost:5000/category')
                const data = await res.json()
                return data
            }
            catch(error){

            }
        }
    })

    if(isLoading){
        <Loading></Loading>
    }

    return (
        <div className='mb-12'>
            <h2 className='text-3xl font-semibold mx-auto mt-6'>Products Category</h2>
            <div className='grid grid-cols-3 gap-4 mx-auto mt-6'>
                {
                    productCategories?.map(productCategory => <CategoryCard
                    key={productCategory._id}
                    productCategory={productCategory}
                    ></CategoryCard>)
                }
            </div>
        </div>

    );
};

export default Category;