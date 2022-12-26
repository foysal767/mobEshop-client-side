import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const CheckoutForm = ({ booking }) => {
    const { resalePrice, byuerName, buyerEmail } = booking;
    const [clientSecret, setClientSecret] = useState('')
    const [cardError, setCardError] = useState('')
    const stripe = useStripe();
    const elements = useElements();
    useEffect(() => {
        fetch('https://mob-shop-server-foysal767.vercel.app/create-payment-intent', {
            mode: "no-cors",
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ resalePrice })
        })
            .then(res => res.json())
            .then(data => setClientSecret(data.clientSecret))
    }, [resalePrice])
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement);

        if (card === null) {
            return
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log(error)
            setCardError(error.message)
        }
        else {
            setCardError('')
        }
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: byuerName,
                        email: buyerEmail
                    },
                },
            },
        );
        if(confirmError){
            setCardError(confirmError.message);
            return
        }
        console.log('paymentIntent', paymentIntent)
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-sm mt-4 btn-primary text-white' type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
            <p className="text-error mt-4">{cardError}</p>
        </>
    );
};

export default CheckoutForm;