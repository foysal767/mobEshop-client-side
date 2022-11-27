import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Moment from 'react-moment';
import Loading from '../../Shared/Loading/Loading';
import AdvertiseCard from './AdvertiseCard';

const Advertise = () => {
    const { data: advertise, isLoading } = useQuery({
        queryKey: ['advertise'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/advertise')
                const data = await res.json()
                return data
            }
            catch (error) {
            }
        }
    })
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <>
        {advertise.length > 0}
            <div className='mb-12'>
                <h2 className='text-3xl font-semibold mx-auto mt-6'>Products Category</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto mt-6'>
                    {
                        advertise?.map(add => <AdvertiseCard
                            key={add._id}
                            add={add}
                        ></AdvertiseCard>)
                    }
                </div>
            </div>
        </>

    );
};

export default Advertise;