import { useQuery } from '@tanstack/react-query';

import toast from 'react-hot-toast';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyProducts = () => {
    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/myproducts?email=${user?.email}`;

    const { data: myproducts = [], refetch } = useQuery({
        queryKey: ['myproducts', user?.email],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json()
            console.log(data)
            return data;
        }
    })

    const handleAdvertise = id => {
        fetch(`http://localhost:5000/myproducts/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    toast.success('Producted added in Advertise')
                    refetch();
                }
            })
    }
    return (
        <div>
            <h1 className='text-3xl font-semibold my-8'>My products</h1>
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
                            myproducts.map((product, i) => <tr key={product._id}>
                                <th>{i + 1}</th>
                                <td>{product.productName}</td>
                                <td>
                                    {
                                        <div className="avatar">
                                            <div className="w-16 rounded-xl">
                                                <img src={product.img} alt={product.productName} />
                                            </div>
                                        </div>
                                    }
                                </td>
                                <td>{product.originalPrice}</td>
                                <td>{product.resalePrice}</td>
                                <td>
                                    {
                                        product?.status === "unsold" ?
                                            <>
                                                <div className='flex items-center'>
                                                    <h2 className='mr-2'>Available</h2>
                                                    {
                                                        product?.advertise === 'advertise' ?
                                                            <button className='btn btn-accent' disabled>Advertised</button>
                                                            :
                                                            <button onClick={() => handleAdvertise(product?._id)} className='btn btn-primary text-white'>Advertise</button>
                                                    }

                                                </div>
                                            </>
                                            :
                                            <h2 className='text-white text-2xl'>Sold</h2>
                                    }
                                </td>
                                <td>
                                    <button className='btn btn-error text-white mr-4'>Delete</button>
                                    {
                                        product?.status !== "sold" &&
                                        <button
                                            className='btn btn-primary text-white'
                                        >Slod
                                        </button>
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

export default MyProducts;