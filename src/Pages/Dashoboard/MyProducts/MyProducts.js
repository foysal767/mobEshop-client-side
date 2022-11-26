import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyProducts = () => {
    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/myproducts?email=${user?.email}`;

    const { data: myproducts = [] } = useQuery({
        queryKey: ['myproducts', user?.email],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json()
            console.log(data)
            return data;
        }
    })
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
                                        product.status &&
                                        <button className='btn btn-primary text-white'>Sold</button>
                                    }
                                </td>
                                <td><button className='btn btn-error text-white'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;