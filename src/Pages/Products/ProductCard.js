import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';
import useVerified from '../../hooks/useVerified/useVerified';
import { CheckBadgeIcon } from '@heroicons/react/24/solid'

const ProductCard = ({ product, setProductBooking }) => {
    const { user } = useContext(AuthContext)
    console.log(user.email)

    const { productName, originalPrice, resalePrice, deliveryLocation, yearsOfUse, img, sellersName, postTime, _id } = product;

    const [isVerified] = useVerified(product?.userEmail)

    // const {data: reportProduct = [], refetch, isLoading} = useQuery({
    //     queryKey: ['reportProduct'],
    //     queryFn: async () =>{
    //         const res = await fetch(`http://localhost:5000/reported/${_id}`)
    //         const data = await res.json()
    //         console.log(data)
    //         return data
    //     }
    // })



    const handleReport = () => {
        const proceed = window.confirm('Are you sure, you want to report this product?')
        if (proceed) {
            const reportedProducts = {
                productName,
                resalePrice,
                img,
                id: _id,
                buyerEmail: user.email
            }
            fetch(`http://localhost:5000/reported`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(reportedProducts)
            })
                .then(res => res.json())
                .then(data => {
                    console.log('reported items', data)
                    if (data.acknowledged) {
                        toast.success('Reported Successfully')
                    }
                    else {
                        toast.error(data.message)
                    }
                })
        }
    }

    return (
        <div className="card lg:card-side shadow-xl p-6 border border-gray-200">
            <div className='w-5/12'>
                <figure><img src={img} alt="Album" /></figure>
            </div>
            <div className="w-7/12 my-auto text-left pl-0 md:pl-16">
                <h2 className='text-2xl font-semibold'>Product Name: {productName}</h2>
                <p className='my-2'>Original Price: {originalPrice}</p>
                <p>Resale Price: {resalePrice}</p>
                <p className='my-2'>Location: {deliveryLocation}</p>
                <p>years of use: {yearsOfUse}</p>
                <p className='my-2 flex'>Seller Name: {sellersName}{
                        isVerified &&
                        <CheckBadgeIcon className="h-6 w-6 text-blue-500" />

                    }
                </p>
                {
                    postTime &&
                    <p className='my-2'>Post Time: {postTime?.slice(0, 10)}</p>
                }
                <div className='mt-4 card-actions mb-4'>
                    <label
                        htmlFor="booking-modal" className="btn btn-primary text-white"
                        onClick={() => setProductBooking(product)}
                    >Booking Now</label>
                </div>
                <button onClick={() => handleReport(product)} className='btn btn-error text-white'>Report to Admin</button>
            </div>
        </div>
    );
};

export default ProductCard;