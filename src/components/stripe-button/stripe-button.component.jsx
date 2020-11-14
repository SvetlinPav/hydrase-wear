import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HnOQZH3BANnG3OF4DKOTV9YD30rjWVve9bIO4wsTu6qAa3nVn2kpJeVTDk4bjcR0woBXAuwcpIzYE9nzvwzVMbG00KEFPVDQp';

    const onToken = token => {
        console.log(token);
        alert('Payment Complete CONGRATS')
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='HYDRASE WEAR.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;