import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './PaymentForm';

const stripePromise = loadStripe('pk_test_51PAaxH00TUSDxJn9167HeLCYgd7AeKETIuuliCxr3TvJDQT9Q2DaRXKBnPRpmsW7D9TfhqtgI1Lrif0a9DBIklSg00F4W5KDAT');

const StripContainer = () => {
    return (
        <Elements stripe={stripePromise}>
            {<PaymentForm/>}
        </Elements>
    );
};

export default StripContainer;