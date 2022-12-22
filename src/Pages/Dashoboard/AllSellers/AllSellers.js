import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const AllSellers = () => {
    const {user} = useContext(AuthContext)

    const { data: allsellers = [], isLoading, refetch } = useQuery({
        queryKey: ['allsellers', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://mob-shop-server-foysal767.vercel.app/allsellers?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            return data
        }
    })

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete this Seller?')
        if (proceed) {
            fetch(`https://mob-shop-server-foysal767.vercel.app/allsellers/${id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.error('Deleted Successfully')
                        refetch()
                    }
                })
        }
    }

    const handleVerify = id => {
        fetch(`https://mob-shop-server-foysal767.vercel.app/allsellers/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Seller verified successfully!')
                    refetch();
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='text-3xl font-semibold my-8'>Total Sellers: {allsellers.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allsellers?.map((seller, i) => <tr key={seller._id}>
                                <th>{i + 1}</th>
                                <td>{seller.name}</td>
                                <td>{seller.email}</td>
                                <td>
                                    {
                                        seller?.status === 'verified' ?
                                            <button className='btn btn-accent' disabled>Verified</button>
                                            :
                                            <Link><button onClick={() => handleVerify(seller._id)} className='btn btn-secondary text-white'>Verify</button></Link>
                                    }
                                </td>
                                <td>
                                    {
                                        seller &&
                                        <Link>
                                            <button onClick={() => handleDelete(seller._id)} className='btn btn-error text-white'>Delete</button>
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

export default AllSellers;