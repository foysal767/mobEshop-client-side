import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);


const Payment = () => {
    const booking = useLoaderData();
    console.log('booking data', booking)
    return (
        <div>
            <h2 className='text-3xl my-8'>Payment for: {booking?.productName}</h2>
            <p className="text-xl">Please pay: <strong>{booking?.resalePrice}</strong></p>
            <div className='w-96 my-12 mx-auto'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                    booking={booking}
                    />
                </Elements>
            </div>

        </div>
    );
};

export default Payment;