import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyProducts = () => {
    const {user} = useContext(AuthContext);

    const url = `http://localhost:5000/myproducts?email=${user?.email}`;

    const {data: myproducts = []} = useQuery({
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
            <h1>This is my products: {myproducts.length}</h1>
        </div>
    );
};

export default MyProducts;