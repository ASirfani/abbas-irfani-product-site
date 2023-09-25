import React, { useState } from 'react';
import './index.css'

const CheckoutPage = ({ cartItems, totalAmount, completePurchase }) => {
  const [paymentInfo, setPaymentInfo] = useState({
    name: '',
    cardNumber: '',
    expiration: '',
    cvv: '',
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setPaymentInfo({ ...paymentInfo, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <div>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <label>Name on Card:</label>
        <input type="text" name="name" onChange={handleInputChange} />

        <label>Card Number:</label>
        <input type="text" name="cardNumber" onChange={handleInputChange} />

        <label>Expiration Date:</label>
        <input type="text" name="expiration" onChange={handleInputChange} />

        <label>CVV:</label>
        <input type="text" name="cvv" onChange={handleInputChange} />

        <p>Total Amount: ${totalAmount}</p>
        <button type="submit">Complete Purchase</button>
      </form>
    </div>
  );
};

export default CheckoutPage;
