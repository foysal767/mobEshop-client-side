import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../../Shared/Loading/Loading';

const AllBuyers = () => {
    const { data: allbuyers = [], isLoading } = useQuery({
        queryKey: ['allbuyers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allbuyers')
            const data = await res.json()
            return data
        }
    })
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='text-3xl font-semibold my-8'>Total Buyers: {allbuyers.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allbuyers?.map((buyer, i) => <tr key={buyer._id}>
                                <th>{i + 1}</th>
                                <td>{buyer.name}</td>
                                <td>{buyer.email}</td>
                                <td>
                                    {
                                        buyer &&
                                        <Link>
                                            <button className='btn btn-error text-white'>Delete</button>
                                        </Link>
                                    }
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyers;