import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const MyBooked = () => {
    const { user } = useContext(AuthContext);
    const url = `https://mob-shop-server-foysal767.vercel.app/bookings?email=${user?.email}`;
    const { data: bookings = [], refetch, isLoading } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            console.log(data)
            return data;
        }
    })

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete this product from your booking list?')
        if (proceed) {
            fetch(`https://mob-shop-server-foysal767.vercel.app/bookings/${id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        toast.error('Deleted Successfully')
                        refetch()
                    }
                })
        }
    }

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='text-3xl font-semibold my-8'>My Orders</h1>
            {
                bookings.length ?
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Image</th>
                                    <th>Original Price</th>
                                    <th>Resale Price</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody className='border border-gray-200'>
                                {
                                    bookings.map((booked, i) => <tr key={booked._id}>
                                        <th>{i + 1}</th>
                                        <td>{booked.productName}</td>
                                        <td>
                                            {
                                                <div className="avatar">
                                                    <div className="w-16 rounded-xl">
                                                        <img src={booked.img} alt={booked.productName} />
                                                    </div>
                                                </div>
                                            }
                                        </td>
                                        <td>{booked.originalPrice}</td>
                                        <td>{booked.resalePrice}</td>
                                        <td>
                                            {
                                                booked?.resalePrice && !booked?.paid &&
                                                <Link to={`/dashboard/payment/${booked._id}`}>
                                                    <button className='btn btn-secondary text-white'>Paid</button>
                                                </Link>
                                            }
                                            {
                                                booked?.resalePrice && booked?.paid &&
                                                <span className='text-secondary'>Paid</span>
                                            }
                                        </td>
                                        <td>
                                            <button onClick={() => handleDelete(booked._id)} className='btn btn-error text-white mr-4'>Delete</button>
                                        </td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                    :
                    <h2 className='text-2xl font-semibold text-center'>You don't have any booking products</h2>
            }

        </div>
    );
};

export default MyBooked;