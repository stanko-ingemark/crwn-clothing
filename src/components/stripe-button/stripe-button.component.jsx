import React from 'react';
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {
  const priceForStripe = price*100;
  const publishableKey = 'pk_test_51In3FmLKl0eZmYTqUOUAc79pvuJUlszV2pTaAU9x7WgGen7snFh25iW4hX2oIESxwRlOYfkzsx5Ru1Rdu5GZrOqR00jaQqmZCJ';

  const onToken = (token) => console.log(`The token is ${token}`);

  return (<StripeCheckout
    label='Pay now'
    name='CRWN clothing'
    billingAddress
    shippingAddress
    image='https://svgshare.com/i/CUz.svg'
    description={`Your total is $${price}`}
    amount={priceForStripe}
    panelLabel='Pay Now'
    token={onToken}
    stripeKey={publishableKey}
  />)
};

export default StripeCheckoutButton;
