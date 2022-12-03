import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';
import ProductBookingModal from './ProductBookingModal/ProductBookingModal';
import ProductCard from './ProductCard';

const Products = () => {
    const products = useLoaderData({});
    const [productBooking, setProductBooking] = useState(null)
    if(Loading){
        <Loading></Loading>
    }
    return (
        <section>
            <div className='w-10/12 mx-auto grid grid-cols-1 gap-6 my-12'>
                {
                    products?.map(product => <ProductCard
                        key={product._id}
                        product={product}
                        setProductBooking={setProductBooking}
                    ></ProductCard>)
                }
            </div>
            {
                productBooking &&
                <ProductBookingModal
                productBooking={productBooking}
                setProductBooking={setProductBooking}
                ></ProductBookingModal>
            }
        </section>

    );
};

export default Products;