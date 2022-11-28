import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const ProductBookingModal = ({ setProductBooking, productBooking }) => {

    const { productName, resalePrice, img } = productBooking;

    const { user } = useContext(AuthContext);

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const productName = form.productName.value;
        const byuerName = form.byuerName.value;
        const buyerEmail = form.buyerEmail.value;
        const phone = form.phone.value;
        const meetingLocation = form.meetingLocation.value;
        const resalePrice = form.resalePrice.value;
        const booking = {
            productName,
            byuerName,
            buyerEmail,
            phone,
            meetingLocation,
            resalePrice,
            img
        }
        fetch('https://mob-shop-server-foysal767.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data?.acknowledged) {
                    setProductBooking('')
                    toast.success('Booking Confirmed Successfully')
                }
                else {
                    toast.error(data.message)
                }
            })

    }



    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{ }</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" name='productName' value={productName} disabled className="input w-full input-bordered" />
                        <input type="text" name='resalePrice' value={resalePrice} disabled className="input w-full input-bordered" />
                        <input name='byuerName' type="text"
                            defaultValue={user?.displayName}
                            disabled
                            placeholder="Your Name" className="input w-full input-bordered" />
                        <input name='buyerEmail' type="email"
                            defaultValue={user?.email}
                            disabled
                            placeholder="Email Address" className="input w-full input-bordered" />
                        <input name='phone' type="text" placeholder="Phone Number" className="input w-full input-bordered" required />
                        <input name='meetingLocation' type="text" placeholder="Meeting Location" className="input w-full input-bordered" required />
                        <br />
                        <input className='btn btn-secondary w-full' type="submit" value='Submit' />
                    </form>
                </div>
            </div>
        </>
    );
};

export default ProductBookingModal;