import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const ReportedItems = () => {
    const { data: reported = [], isLoading, refetch } = useQuery({
        queryKey: ['reported'],
        queryFn: async () => {
            const res = await fetch("https://mob-shop-server-foysal767.vercel.app/reported")
            const data = await res.json()
            return data
        }
    })

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete this item permenantly?')
        if(proceed){
            fetch(`https://mob-shop-server-foysal767.vercel.app/reported/${id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    fetch(`https://mob-shop-server-foysal767.vercel.app/products/${id}`, {
                        method: 'DELETE',
                        headers: {
                            'content-type': 'application/json'
                        }
                    })
                    .then(res => res.json())
                    .then(data => {
                        if(data.deletedCount > 0){
                            toast.success('Permanantly deleted')
                            refetch()
                        }
                    })
                }
            })
        }
    }
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-3xl font-semibold my-10'>Reported Items</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Resale Price</th>
                            <th>Buyer Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reported?.map((product, i) => <tr key={product._id}>
                                <th>{i + 1}</th>
                                <td>{product?.productName}</td>
                                <td>
                                    <div className="avatar">
                                        <div className="w-24 rounded-full">
                                            <img src={product?.img} alt='' />
                                        </div>
                                    </div>
                                </td>
                                <td>{product?.resalePrice}</td>
                                <td>{product?.buyerEmail}</td>
                                <td>
                                    <Link><button onClick={() => handleDelete(product?.id)} className='btn btn-error text-white'>Delete</button></Link>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ReportedItems;